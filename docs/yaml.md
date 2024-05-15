# YAMLの書き方


## echoAgentを使ったGraph作成

echoAgent(指定されたデータを出力するAgent)を使って、簡単なGraphファイルを作ります。
GraphAIのGraphファイルの必須項目はversionとnodesです。

versionは、0.3を指定します。(2024/05現在)

nodesは、GraphAIで使う各ノードを書いていきます。
このサンプルではnodesにechoAgentを使った１つのnodeを追加します。
echoAgentはparamsで指定しているユーザからの入力値をそのまま返すAgentです。

追加するnodeは、node1というNode名をつけます。
このnodeは`message: hello`というデータを出力します。

このサンプルのYAMLは１つしかnodeがありませんが、結果を返すnodeはnode1なので、`isResult: true`を追加し、このnodeの結果がこのGraphの結果と指定します。


```yaml
version: 0.2
nodes:
  node1: 
    params:
      message: hello
    agent: echoAgent
    isResult: true
   
```

これをecho.yamlというファイル名で保存して、graphaiのcliで実行します

```sh
$ graphai echo.yaml 
{ node1: { message: 'hello' } }
```

2行目の`message: hello`が表示されていれば成功です。

## inputsを追加する

次に複数のAgentを組み合わせ、inputsで入力を指定したYAMLを作ります。
入力を指定することで依存関係が定義でき、それによって実行順が制御されます。

bypassAgentは入力値をそのまま出力値で返すAgentです。
先程のechoAgentのyamlにnode2を追加します。node2のagentはbypassAgentを指定します。
入力のinputsとして、前のnode1を指定します。inputsは文字列の配列で、node名を指定します。

今回は出力はbypassAgentのnode2なので、node2に`isResult: true`を指定します。node1のisResultは削除します。

```yaml
version: 0.2
nodes:
  node1: 
    params:
      message: hello
    agent: echoAgent
  node2: 
    agent: bypassAgent
    inputs: [":node1"]
    isResult: true
```

実行される順に説明すると、
- node1のechoAgentが実行され、paramsの値を結果として返す
- node1を入力としているnode、node2が実行される。node2の入力値はnode1の実行結果で、それを入力としてうけとる。node2のbypassAgentは入力値をそのまま結果として返すagentなので、node1の結果をそのまま返す。

これを実行するとnode2の結果として`message: 'hello'`が表示されます。
また結果はarrayになっています。

```sh
 $ graphai echo2.yaml
{ node2: [ { message: 'hello' } ] }
```

同じように、今度は入力を増やして試してみます。
node1と同じechoAgentをnode2とし、bypassAgentをnode3にします。

入力のinputsは今度は` ["node1", "node2"]`と２つ指定します。

node3が`isResult: true`です。

```yaml
version: 0.2
nodes:
  node1: 
    params:
      message: hello
    agent: echoAgent
  node2: 
    params:
      message: こんにちは
    agent: echoAgent
  node3: 
    agent: bypassAgent
    inputs: ["node1", "node2"]
    isResult: true
```

```sh
$ graphai echo3.yaml
{ node3: [ { message: 'hello' }, { message: 'こんにちは' } ] }
```

node3の結果として、２つの入力値がそのまま出力されます

このようにinputsを使って、複数のエージェントをつなげていくことができます。

inputsを持つagentは、入力となるnode1, node2のagentの実行結果を待ってから実行します。
入力のagentがデータベースに接続したり、APIを叩くような時間のかかる処理の場合でも、その前の処理が終わるのを待ってから実行されます。

## nodeについて

nodeにはcomputed nodeとstatic nodeの２種類のnodeがあります。

computed nodeはagentを持つnodeで、agentに指定しているプログラムを実行します。

static nodeはデータを持つノードです。valueでデータを指定します。別ページで説明しますが、いくつかの方法で前のノードなどの値を受け取り、次のnodeにわたすことができます。プログラム(agent)は実行しないでデータの受け渡しをするnodeです。
