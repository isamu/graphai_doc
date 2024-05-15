# Node.jsで使ってみる

npmを追加します。

```
yarn add graphai
```
graphai本体は他のnpmに依存しないので、graphaiのみが追加されます。

GraphAI本体と、agentsをimportします。
`graphai/lib/vanilla_agents`は、他npmに依存しないagentのみのpackagesです。packagesはagentsのAgentFunctionInfoDictonaryです。

他に、npm依存を含む全てのagentを含んだ`graphai/lib/experimental_agents`もあります。
これをimportするにはいくつかの必要とされるnpmを別途インストールする必要があります。
cliの[package.json](https://github.com/receptron/graphai_cli/blob/main/package.json)などを参考に追加インストールしてください。

```TypeScript
import { GraphAI } from "graphai";
import * as agents from "graphai/lib/vanilla_agents";
```

シンプルなGraphDataを定義します。
vanilla_agentsで提供されるechoAgentを使います。

```TypeScript
const data = {
  version: 0.3,
  nodes: {
    test1: {
      agent: "echoAgent",
      params: {
        message: "echo",
      },
      isResult: true,
    },
  },
};
```

GraphAIは非同期で動くのでmainをasyncで定義し、その中で初期化し走らせます。
GraphAIのコンストラクタには、GraphDataとagentのagentFunctionInfoDictonaryを渡します。
初期化時にValidationやタスクの調整が行われ、問題なければRunで走らせます。
RunはGraphの全ての処理が終わるまで待ちます。
途中経過が知りたいときは、`graph.onLogCallback`でlogをcallbackして見ることができます。各nodeの状態が変化したときに呼ばれます。

```TypeScript
const main = async () => {
  const graph = new GraphAI(data, agents);
  const result = await graph.run();
  console.log(result);
};
```

まとめると以下のようになります。

```TypeScript
import { GraphAI } from "graphai";
import * as agents from "graphai/lib/vanilla_agents";

const data = {
  version: 0.3,
  nodes: {
    test1: {
      agent: "echoAgent",
      params: {
        message: "echo",
      },
      isResult: true,
    },
  },
};

const main = async () => {
  const graph = new GraphAI(data, agents);
  const result = await graph.run();
  console.log(result);
};

main();
```
