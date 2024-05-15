

# import するファイル

- GraphAI本体

GraphAI本体と、それを動かすのに必要な型情報があります。
```
import { GraphData } from "graphai";
```

https://github.com/receptron/graphai/blob/main/src/index.ts


- Agent
GraphAIに含まれる全てのAgent。
experimentalと命名しているので、まだ仕様が固まってないAgentです。バージョンアップ時にBreaking Changeすることがあります。
他のnpmに依存しているので、npmを追加でインストールする必要があります。
またAPI Keyが必要なものもあるので、設定をしてください。

```
import * as agents "graphai/lib/experimental_agents"
```

- npm依存のない全てのAgent

他のnpmに依存していない全てのAgent.

```
import * as agents from "graphai/lib/experimental_agents/vanilla";
```

- 型ファイル



```
import "graphai/lib/type
```

graphaでimportできない型情報。GraphAIで使っている型はこのファイルで全て定義されています。


## 内部の処理


## 関連レポジトリ

- GraphAI本体

https://github.com/receptron/graphai

- CLI

https://github.com/receptron/graphai_cli

- Webのサンプル

Firebase + Vueで作られたサンプル
https://github.com/receptron/graphai-demo-web

- SlashGPT

https://github.com/receptron/slashgpt-js

- StreamingをサポートしたWebサンプル
exporess + Vueでlocalで動かしてLLMのStreamingを検証できます

https://github.com/isamu/graphai-stream-web

- 日本語のDocument
このレポジトリ
https://github.com/isamu/graphai_doc