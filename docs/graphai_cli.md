# GraphAI cli

[graphai_cli](https://www.npmjs.com/package/@receptron/graphai_cli)は、[graphai](https://github.com/receptron/graphai)をcliで実行するツールです。

インストールは

```
npm install -g @receptron/graphai_cli
```

です。nodeやnpmがインストールされてない場合は、最初にインストールしてください。

# 使い方

### ヘルプ

引数無しで実行すると、使い方の説明が表示されます。

```
$ graphai
```

```
graphai <yaml_or_json_file>

run GraphAI with GraphAI file.

Positionals:
      --yaml_or_json_file  yaml or json file                            [文字列]

オプション:
      --help     ヘルプを表示                                             [真偽]
      --version  バージョンを表示                                         [真偽]
  -l, --list     agents list
  -s, --sample   agents list                                            [文字列]
  -d, --detail   agent detail                                           [文字列]
  -v, --verbose  verbose log                   [真偽] [必須] [デフォルト: false]
      --log      output log                                             [文字列]
```

### 実行

yamlかjsonのファイル名を指定すると、そのファイルに書かれているData flow graphが実行されます。

```
$ graphai test_base.yml 
```

```
{
  node5: {
    node5: 'output',
    node2: 'output',
    node4: 'output',
    node3: 'output',
    node1: 'output'
  }
}

```


サンプルのyamlファイルは以下からダウンロードしてくだださい。

https://raw.githubusercontent.com/receptron/graphai_cli/main/test_yaml/test_base.yml


### Agentの一覧

graphaiで使えるAgentの一覧です。
cliで使うData flow graphのyamlを作る場合は、この一覧にあるAgentをAgentIdに指定して使ってください。

```
$ graphai -l
```

```
Available Agents
* bypassAgent - bypass agent
* dataObjectMergeTemplateAgent - Merge object
* dataSumTemplateAgent - Returns the sum of input values
* dotProductAgent - dotProduct Agent
* echoAgent - Echo agent
* mapAgent - Map Agent
* nestedAgent - nested Agent
* popAgent - pop Agent
* pushAgent - push Agent
* shiftAgent - shift Agent
* slashGPTAgent - Slash GPT Agent
* sleeperAgent - sleeper Agent
* sleeperAgentDebug - sleeper debug Agent
* sortByValuesAgent - sortByValues Agent
* stringEmbeddingsAgent - Embeddings Agent
* stringSplitterAgent - This agent strip one long string into chunks using following parameters
* stringTemplateAgent - Template agent
* tokenBoundStringsAgent - token bound Agent
* totalAgent - Returns the sum of input values
```

### 独自のGraphファイルを書く

CLI版に含まれているAgentのリストを元に、yaml またはjsonファイルを作成することで、独自のGraph ファイルを作成じて実行することが可能です。

また、公開されているサンプルのyamlファイルを利用することも可能です。
