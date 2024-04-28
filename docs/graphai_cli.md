# GraphAI cli

graphai_cliは、graphaiをcliで実行するツールです。

```
npm install -g graphai_cli
```

でインストールができます。

nodeやnpmがインストールされてない場合は、最初にインストールしてください。


# 使い方

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


https://raw.githubusercontent.com/receptron/graphai_cli/main/test_yaml/test_base.yml