# SampleのAgentを作る

GraphAIで使うAgentの作り方の説明をします。

Agentは、Agentの本体とそれをテストするテストコードで構成されます。
Agentの本体をsrc/以下(今回は[src/sample_agent.ts](./src/sample_agent.ts)), Agentのテストコードをtest/以下(今回は[tests/test_agent.ts](./tests/test_agent.ts))に作ります。

今回作成するAgentはSampleAgentという名前です。
動作は、GraphAIからの入力値(設定ファイルのparams)のparamsと、前のagentからの入力値inputs、この２つの値をmergeしてobjectとして返す簡単なAgentです。

### agent

Agentの本体はこちらです。

```typescript
import { AgentFunction } from "graphai";

export const sampleAgent: AgentFunction = async ({ params, inputs }) => {
  return { params, inputs };
};
```

Agentは必ず`AgentFunction`の型で、非同期(async)な関数です。
最初の説明にあったように、paramsと入力をとって、それを返すだけのコードです。

どんなAgentも基本的にはこのように入力値を受け取って、何らかの結果を返す１つの関数です。

この関数はexportする必要があります。

```
// for test and document
```
以下にテストとドキュメント用のサンプル値と、このAgentの情報(AgentFunctionInfo)を記載しています。
サンプル値はAgentの情報に含め、まとめてexportします。

このサンプル値はunit testで使い、Agentの情報はこのAgentをパッケージとして利用するときに必要な情報を記載しています。

AgentFunctionInfoはdefault exportします

```typescript
import { AgentFunctionInfo } from "graphai/lib/type";

const sampleInput = [{message: "hello"}, {message: "test"}];
const sampleParams = { sample: "123" };
const sampleResult = { inputs: sampleInput, params: sampleParams };

const sampleAgentInfo: AgentFunctionInfo = {
  name: "sampleAgent",
  agent: sampleAgent,
  mock: sampleAgent,
  samples: [
    {
      inputs: sampleInput,
      params: sampleParams,
      result: sampleResult,
    },
  ],
  description: "Sample agent",
  author: "isamu arimoto",
  repository: "https://github.com/isamu/graphai_doc",
  license: "MIT",
};

export default sampleAgentInfo;

```

複数のサンプル値を用意する場合は
```
  samples: [
    {
      inputs: sampleInput,
      params: sampleParams,
      result: sampleResult,
    },
    {
      inputs: sampleInput2,
      params: sampleParams2,
      result: sampleResult2,
    },
  ],
```
とします。

# test

tests/test_agent.ts で、agentのファイルに記載されている情報を元にunit test。

params,inputsをagentに与えて、resultと一致するかテストをする

```
yarn run test
```

でテストをする


