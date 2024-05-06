# YAMLの書き方

GraphAIのYAMLを書きます。

YAMLの必須項目はversionとnodesです。
versionは、0.2を指定します。(2024/05現在)

nodesは、GraphAIで使う各ノードを書いていきます。

まずはGraphAIに含まれているechoAgentを使って簡単なサンプルを作ります。
echoAgentはparamsで指定しているユーザからの入力値をそのまま返すAgentです。
node1というNode名でnodeを追加します。

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




