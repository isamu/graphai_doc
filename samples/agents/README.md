# sampleのagentを作る

graphaiで使うagentの作り方の説明をします。
agentのソースをsrc/以下の [src/sample_agent.ts](./src/sample_agent.ts), agentのテストコードをtest以下の[tests/test_agent.ts]に作ります。

agentは  のsampleAgent。

graphの入力値, paramsと、前のagentからの入力値inputsを、objectとして返すagent

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


