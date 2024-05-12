# testについて

# sampleについて


# agent

### ディレクトリー構成

全てのAgentFunctionInfo。各サブディレクターのpackages.tsをexportしている

graphai/src/experimental_agents/packages.ts

全てのAgentFunction。vanilla.tsを全て＋npmの依存のあるAgentFunctionを個別、もしくはサブディレクトリーごとにexportする
graphai/src/experimental_agents/index.ts

npmの依存のないagent。サブディレクトリのvanillaをexport
graphai/src/experimental_agents/vanilla.ts


### 読み込み方

#### packages
AgentFunctionInfoを含んだ全てのagentを読み込む。メタ情報付きなので、samplesを使ったテスト実行時やサーバでのagent一覧で使う
```
import * as packages from "graphai/lib/experimental_agents/packages";
```

#### vanilla
npm依存のないagent全て。npm/api keyを使わないunit testなどで使う

import * as packages from "graphai/lib/experimental_agents/vanilla";

### agents

AgentFunction全て。cliで利用。

import * as packages from "graphai/lib/experimental_agents";


### Agentの追加。開発編

graphai/src/experimental_agents以下にふさわしいカテゴリーのディレクトリー下におく。

graphai/src/experimental_agents/category/packages.ts には必ず追加。categoryのサブディレクトリーを追加した場合は、graphai/src/experimental_agents/packages.tsに、そのディレクトリーを追加

npmの依存のないagentは、graphai/src/experimental_agents/category/indexに追加。

npmの依存のあるagentは、graphai/src/experimental_agents/category/vanilla.ts