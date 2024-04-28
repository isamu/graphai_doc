# sampleのagentを作る

graphaiで使うagentの作り方の説明をします。

Agentは、Agentの本体とそれをテストするテストコードで構成されます。
Agentの本体をsrc/以下(今回は[src/sample_agent.ts](./src/sample_agent.ts)), Agentのテストコードをtest/以下(今回は[tests/test_agent.ts](./tests/test_agent.ts))に作ります。

今回作成するAgentはSampleAgentという名前です。
動作は、GraphAIからの入力値(設定ファイルのparams)のparamsと、前のagentからの入力値inputs、この２つの値をmergeしてobjectとして返す簡単なAgentです。



// for test and document

以下に動作検証とdocumentのためのsample値がある。

それらの情報をagentのinfoとしてdefault exportする。

# test

tests/test_agent.ts で、agentのファイルに記載されている情報を元にunit test。

params,inputsをagentに与えて、resultと一致するかテストをする

```
yarn run test
```

でテストをする


