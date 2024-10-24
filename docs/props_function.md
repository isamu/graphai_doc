
##propFunctionとagentのすみわけ
- jsonParse()
  - AgentのjsonParserAgentはmd対応。
  - jsonParseはjson stringのみ
- flat()は１つの入力に対してのみ
  - [:a, :b] をflatする場合はagentが必要
- string template
  - templateが大きな場合（fileやなにかの結果）
  - memo: TODO( templateをinputsからとってこれてもよいかも。file 系のagentなど。）

