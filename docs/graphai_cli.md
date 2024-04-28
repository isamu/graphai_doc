# GraphAI cli

graphai_cliは、graphaiをcliで実行するツールです。

インストールは

```
npm install -g graphai_cli
```

です。nodeやnpmがインストールされてない場合は、最初にインストールしてください。

# 使い方

### ヘルプ

引数無しで実行すると、使い方の説明が表示されます。

```
$ graphai
```

```
graphai <yaml_file>

run GraphAI with yaml GraphAI file.

オプション:
      --help     ヘルプを表示                                             [真偽]
      --version  バージョンを表示                                         [真偽]
  -l, --list     agents list

オプションではない引数が 0 個では不足しています。少なくとも 1 個の引数が必要です:
```

### 実行

yamlのファイル名を指定すると、そのファイルに書かれているData flow graphが実行されます。

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
- bypassAgent
- copy2ArrayAgent
- copyMessageAgent
- countingAgent
- dataObjectMergeTemplateAgent
- dataSumTemplateAgent
- dotProductAgent
- echoAgent
- mapAgent
- mergeNodeIdAgent
- nestedAgent
- popAgent
- pushAgent
- shiftAgent
- slashGPTAgent
- sleeperAgent
- sleeperAgentDebug
- sortByValuesAgent
- stringEmbeddingsAgent
- stringSplitterAgent
- stringTemplateAgent
- tokenBoundStringsAgent
- totalAgent
```
