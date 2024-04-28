# sampleのagentを作る

agentは `src/sample_agent.ts` のsampleAgent。

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


