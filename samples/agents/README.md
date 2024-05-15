# SampleのAgentを作る

GraphAIで使うAgentの作り方の説明をします。

Agentは、Agentの本体とそれをテストするテストコードで構成されます。
Agentの本体をsrc/以下(今回は[src/sample_agent.ts](./src/sample_agent.ts)), Agentのテストコードをtest/以下(今回は[tests/test_agent.ts](./tests/test_agent.ts))に作ります。

今回作成するAgentは`SampleAgent`という名前です。
動作は、GraphAIからの入力値(設定ファイルのparams)の`params`と、前のagentからの入力値`inputs`、この２つの値をmergeしてobjectとして返す簡単なAgentです。

### Agent

Agentの本体はこちらです。

```typescript
import { AgentFunction } from "graphai";

export const sampleAgent: AgentFunction = async ({ params, inputs }) => {
  return { params, inputs };
};
```

Agentは必ず`AgentFunction`の型で、非同期(`async`)な関数です。
最初の説明にあったように、`params`と入力をとって、それを返すだけのコードです。

どんなAgentも基本的にはこのように入力値を受け取って、何らかの結果を返す１つの関数です。

### AgentFunctionInfo

Agentは、AgentFunctionInfoの型のデータとしてGraphAIにわたす必要があります。
AgentFunctionInfoはAgent本体とinputs/params/resultのサンプルの値、Agentのメタ情報を含みます。

[src/sample_agent.ts](./src/sample_agent.ts)に追加します。

```
// for test and document
```
以下にテストのサンプル値と、このAgentの情報(`AgentFunctionInfo`)を記載しています。
これらをsampleAgentInfoにまとめて`export`します。

サンプル値はUnit Test(つまり、サンプルのドキュメントとUnit Testの両方を兼ねています）で使います。
後述する開発時にはこのサンプル値を使ってTestRunnerでテストをします。

Agentのファイルは、agentを含むパッケージ情報(`AgentFunctionInfo`)を`defaule export`します。

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

```typescript
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
複数のサンプル値があるときはテストランナーは全てのケースをテストします。

# Unit Test

Agentのパッケージの情報を使ってAgent単体のUnit Testをします。
GraphAIに含まれるagentTestRunnerにsampleAgentInfoを渡してUnit Testを実行します。
agentTestRunnerは、sampleAgentInfoに含まれるサンプル値を使ってAgentを実行します。
この関数は、内部で`node:test`を使っています。
inputs, paramsのペアを使ってAgentを実行、結果とresultが一致すればテストは成功です。

```typescript
import sampleAgentInfo from "@/sample_agent";
import { agentTestRunner } from "graphai/lib/utils/test_utils";

agentTestRunner(sampleAgentInfo);
```

package.jsonにテスト実行のスクリプトがあるので

```
yarn run test
```

でテストを実行します。


# 開発

最初にAgentを開発するとき、このディレクトリをコピーし、ベースとして使うと良いです。
Agent作成に必要な設定は `package.json`, `eslintrc.js`, `.prettierrc`, `tsconfig.json` に設定済みです

`src/sample_agent.ts`をベースに必要な実装を追加していき、期待すべき`samples`を更新、追加しながらUnit Testを動かします。
Unit TestをPassし、期待すべき動作がするようになればAgentは完成です。





