# YAMLの書き方


## echo 
GraphAIのYAMLの必須項目はversionとnodesです。

versionは、0.2を指定します。(2024/05現在)

nodesは、GraphAIで使う各ノードを書いていきます。

まずはGraphAIに含まれているechoAgentを使って簡単なサンプルを作ります。
echoAgentはparamsで指定しているユーザからの入力値をそのまま返すAgentです。
node1というNode名でnodeを追加します。
このサンプルは`message: hello`というデータをagentの出力として出します。

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

## inputs

次に複数のAgentを組み合わせたYAMLを作ります。

bypassAgentは入力値をそのまま出力値で返すAgentです。
先程のechoのyamlにnode2を追加し、bypassAgentを指定します。
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
    inputs: ["node1"]
    isResult: true
```

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