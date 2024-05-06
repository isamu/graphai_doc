## stringEmbeddingsAgent

### Description

Embeddings Agent

### Samples



### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## tokenBoundStringsAgent

### Description

token bound Agent

### Samples



### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## functionAgent

### Description

It allows developers to implement the agent function within the graph itself.

### Samples

#### inputs

```json

[
          {
                    "model": "Model 3",
                    "maker": "Tesla",
                    "range": 300,
                    "price": 35000
          }
]

````

#### params

```json

{}

````

#### result

```json

"A Tesla Model 3 has the range of 300 miles. It costs $35000."

````
#### inputs

```json

[
          "{\"model\":\"Model 3\",\"maker\":\"Tesla\",\"range\":300,\"price\":35000}"
]

````

#### params

```json

{}

````

#### result

```json

{"model":"Model 3","maker":"Tesla","range":300,"price":35000}

````

### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## stringSplitterAgent

### Description

This agent strip one long string into chunks using following parameters

### Samples

#### inputs

```json

[
          "Here's to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes ... the ones who see things differently -- they're not fond of rules, and they have no respect for the status quo. ... You can quote them, disagree with them, glorify or vilify them, but the only thing you can't do is ignore them because they change things. ... They push the human race forward, and while some may see them as the crazy ones, we see genius, because the people who are crazy enough to think that they can change the world, are the ones who do."
]

````

#### params

```json

{"chunkSize":64}

````

#### result

```json

{"contents":["Here's to the crazy ones, the misfits, the rebels, the troublema","roublemakers, the round pegs in the square holes ... the ones wh"," ones who see things differently -- they're not fond of rules, a","rules, and they have no respect for the status quo. ... You can ","You can quote them, disagree with them, glorify or vilify them, ","y them, but the only thing you can't do is ignore them because t","ecause they change things. ... They push the human race forward,","forward, and while some may see them as the crazy ones, we see g","we see genius, because the people who are crazy enough to think ","o think that they can change the world, are the ones who do."," do."],"count":11,"chunkSize":64,"overlap":8}

````

### Author

Satoshi Nakajima

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## stringTemplateAgent

### Description

Template agent

### Samples

#### inputs

```json

[
          "hello",
          "test"
]

````

#### params

```json

{"template":"${0}: ${1}"}

````

#### result

```json

"hello: test"

````

### Author

Satoshi Nakajima

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## sleeperAgent

### Description

sleeper Agent

### Samples



### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## sleeperAgentDebug

### Description

sleeper debug Agent

### Samples



### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## totalAgent

### Description

Returns the sum of input values

### Samples

#### inputs

```json

[
          {
                    "a": 1
          },
          {
                    "a": 2
          },
          {
                    "a": 3
          }
]

````

#### params

```json

{}

````

#### result

```json

{"a":6}

````
#### inputs

```json

[
          [
                    {
                              "a": 1,
                              "b": -1
                    },
                    {
                              "c": 10
                    }
          ],
          [
                    {
                              "a": 2,
                              "b": -1
                    }
          ],
          [
                    {
                              "a": 3,
                              "b": -2
                    },
                    {
                              "d": -10
                    }
          ]
]

````

#### params

```json

{}

````

#### result

```json

{"a":6,"b":-4,"c":10,"d":-10}

````

### Author

Satoshi Nakajima

### Repository

https://github.com/snakajima/graphai


### License

MIT


<hr/>

## dataObjectMergeTemplateAgent

### Description

Merge object

### Samples

#### inputs

```json

[
          {
                    "a": 1,
                    "b": 1
          },
          {
                    "a": 2,
                    "b": 2
          },
          {
                    "a": 3,
                    "b": 0,
                    "c": 5
          }
]

````

#### params

```json

{}

````

#### result

```json

{"a":3,"b":0,"c":5}

````
#### inputs

```json

[
          {
                    "a": {
                              "b": {
                                        "c": {
                                                  "d": "e"
                                        }
                              }
                    }
          },
          {
                    "b": {
                              "c": {
                                        "d": {
                                                  "e": "f"
                                        }
                              }
                    }
          },
          {
                    "b": {
                              "d": {
                                        "e": {
                                                  "f": "g"
                                        }
                              }
                    }
          }
]

````

#### params

```json

{}

````

#### result

```json

{"a":{"b":{"c":{"d":"e"}}},"b":{"c":{"d":{"e":"f"}},"d":{"e":{"f":"g"}}}}

````

### Author

Satoshi Nakajima

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## dataSumTemplateAgent

### Description

Returns the sum of input values

### Samples

#### inputs

```json

[
          1,
          2,
          3
]

````

#### params

```json

{}

````

#### result

```json

6

````

### Author

Satoshi Nakajima

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## propertyFilterAgent

### Description

Filter properties based on property name either with 'include' or 'exclude'

### Samples

#### inputs

```json

[
          {
                    "color": "red",
                    "model": "Model 3",
                    "type": "EV",
                    "maker": "Tesla",
                    "range": 300
          }
]

````

#### params

```json

{"include":["color","model"]}

````

#### result

```json

{"color":"red","model":"Model 3"}

````
#### inputs

```json

[
          {
                    "color": "red",
                    "model": "Model 3",
                    "type": "EV",
                    "maker": "Tesla",
                    "range": 300
          }
]

````

#### params

```json

{"exclude":["color","model"]}

````

#### result

```json

{"type":"EV","maker":"Tesla","range":300}

````

### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## pushAgent

### Description

push Agent

### Samples

#### inputs

```json

[
          [
                    1,
                    2
          ],
          3
]

````

#### params

```json

{}

````

#### result

```json

[1,2,3]

````

### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## popAgent

### Description

Pop Agent

### Samples

#### inputs

```json

[
          [
                    1,
                    2,
                    3
          ]
]

````

#### params

```json

{}

````

#### result

```json

{"array":[1,2],"item":3}

````
#### inputs

```json

[
          [
                    "a",
                    "b",
                    "c"
          ]
]

````

#### params

```json

{}

````

#### result

```json

{"array":["a","b"],"item":"c"}

````
#### inputs

```json

[
          [
                    1,
                    2,
                    3
          ],
          [
                    "a",
                    "b",
                    "c"
          ]
]

````

#### params

```json

{}

````

#### result

```json

{"array":[1,2],"item":3}

````

### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## shiftAgent

### Description

shift Agent

### Samples

#### inputs

```json

[
          [
                    1,
                    2,
                    3
          ]
]

````

#### params

```json

{}

````

#### result

```json

{"array":[2,3],"item":1}

````
#### inputs

```json

[
          [
                    "a",
                    "b",
                    "c"
          ]
]

````

#### params

```json

{}

````

#### result

```json

{"array":["b","c"],"item":"a"}

````

### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## dotProductAgent

### Description

dotProduct Agent

### Samples

#### inputs

```json

[
          [
                    [
                              1,
                              2
                    ],
                    [
                              3,
                              4
                    ],
                    [
                              5,
                              6
                    ]
          ],
          [
                    [
                              3,
                              2
                    ]
          ]
]

````

#### params

```json

{}

````

#### result

```json

[7,17,27]

````

### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## sortByValuesAgent

### Description

sortByValues Agent

### Samples



### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## echoAgent

### Description

Echo agent

### Samples



### Author

Satoshi Nakajima

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## bypassAgent

### Description

bypass agent

### Samples

#### inputs

```json

[
          {
                    "a": "123"
          }
]

````

#### params

```json

{}

````

#### result

```json

[{"a":"123"}]

````
#### inputs

```json

[
          [
                    {
                              "a": "123"
                    },
                    {
                              "b": "abc"
                    }
          ],
          [
                    {
                              "c": "987"
                    },
                    {
                              "d": "xyz"
                    }
          ]
]

````

#### params

```json

{}

````

#### result

```json

[[{"a":"123"},{"b":"abc"}],[{"c":"987"},{"d":"xyz"}]]

````
#### inputs

```json

[
          [
                    {
                              "a": "123"
                    },
                    {
                              "b": "abc"
                    }
          ],
          [
                    {
                              "c": "987"
                    },
                    {
                              "d": "xyz"
                    }
          ]
]

````

#### params

```json

{"firstElement":true}

````

#### result

```json

[{"a":"123"},{"b":"abc"}]

````
#### inputs

```json

[
          [
                    {
                              "a": "123"
                    },
                    {
                              "b": "abc"
                    }
          ],
          [
                    {
                              "c": "987"
                    },
                    {
                              "d": "xyz"
                    }
          ]
]

````

#### params

```json

{"flat":1}

````

#### result

```json

[{"a":"123"},{"b":"abc"},{"c":"987"},{"d":"xyz"}]

````

### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## countingAgent

### Description

Counting agent

### Samples

#### inputs

```json

[]

````

#### params

```json

{"count":4}

````

#### result

```json

{"list":[0,1,2,3]}

````

### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## copyMessageAgent

### Description

CopyMessage agent

### Samples

#### inputs

```json

[]

````

#### params

```json

{"count":4,"message":"hello"}

````

#### result

```json

{"messages":["hello","hello","hello","hello"]}

````

### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## copy2ArrayAgent

### Description

Copy2Array agent

### Samples

#### inputs

```json

[
          {
                    "message": "hello"
          }
]

````

#### params

```json

{"count":10}

````

#### result

```json

[{"message":"hello"},{"message":"hello"},{"message":"hello"},{"message":"hello"},{"message":"hello"},{"message":"hello"},{"message":"hello"},{"message":"hello"},{"message":"hello"},{"message":"hello"}]

````

### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## mergeNodeIdAgent

### Description

merge node id agent

### Samples

#### inputs

```json

[
          {
                    "message": "hello"
          }
]

````

#### params

```json

{}

````

#### result

```json

{"message":"hello","test":"hello"}

````

### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## streamMockAgent

### Description

Sstream mock agent

### Samples



### Author

xSatoshi Nakajima

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## nestedAgent

### Description

nested Agent

### Samples



### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## mapAgent

### Description

Map Agent

### Samples



### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## gloqAgent

### Description

Groq Agent

### Samples



### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## slashGPTAgent

### Description

Slash GPT Agent

### Samples



### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>


