yarn run v1.22.21
$ npx ts-node -r tsconfig-paths/register src/docs.ts
## slashGPTAgent

### Description

Slash GPT Agent

### Samples

```json
[]
```


### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## stringEmbeddingsAgent

### Description

Embeddings Agent

### Samples

```json
[]
```


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

```json
[]
```


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

```json
[
  {
    "inputs": [
      "Here's to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes ... the ones who see things differently -- they're not fond of rules, and they have no respect for the status quo. ... You can quote them, disagree with them, glorify or vilify them, but the only thing you can't do is ignore them because they change things. ... They push the human race forward, and while some may see them as the crazy ones, we see genius, because the people who are crazy enough to think that they can change the world, are the ones who do."
    ],
    "params": {
      "chunkSize": 64
    },
    "result": {
      "contents": [
        "Here's to the crazy ones, the misfits, the rebels, the troublema",
        "roublemakers, the round pegs in the square holes ... the ones wh",
        " ones who see things differently -- they're not fond of rules, a",
        "rules, and they have no respect for the status quo. ... You can ",
        "You can quote them, disagree with them, glorify or vilify them, ",
        "y them, but the only thing you can't do is ignore them because t",
        "ecause they change things. ... They push the human race forward,",
        "forward, and while some may see them as the crazy ones, we see g",
        "we see genius, because the people who are crazy enough to think ",
        "o think that they can change the world, are the ones who do.",
        " do."
      ],
      "count": 11,
      "chunkSize": 64,
      "overlap": 8
    }
  }
]
```


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

```json
[
  {
    "inputs": [
      "hello",
      "test"
    ],
    "params": {
      "template": "${0}: ${1}"
    },
    "result": {
      "content": "hello: test"
    }
  }
]
```


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

```json
[]
```


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

```json
[]
```


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

```json
[
  {
    "inputs": [
      {
        "a": 1
      },
      {
        "a": 2
      },
      {
        "a": 3
      }
    ],
    "params": {},
    "result": {
      "a": 6
    }
  },
  {
    "inputs": [
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
    ],
    "params": {},
    "result": {
      "a": 6,
      "b": -4,
      "c": 10,
      "d": -10
    }
  }
]
```


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

```json
[
  {
    "inputs": [
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
    ],
    "params": {},
    "result": {
      "a": 3,
      "b": 0,
      "c": 5
    }
  },
  {
    "inputs": [
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
    ],
    "params": {},
    "result": {
      "a": {
        "b": {
          "c": {
            "d": "e"
          }
        }
      },
      "b": {
        "c": {
          "d": {
            "e": "f"
          }
        },
        "d": {
          "e": {
            "f": "g"
          }
        }
      }
    }
  }
]
```


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

```json
[
  {
    "inputs": [
      1,
      2,
      3
    ],
    "params": {},
    "result": 6
  }
]
```


### Author

Satoshi Nakajima

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## pushAgent

### Description

push Agent

### Samples

```json
[
  {
    "inputs": [
      [
        1,
        2
      ],
      3
    ],
    "params": {},
    "result": [
      1,
      2,
      3
    ]
  }
]
```


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

```json
[
  {
    "inputs": [
      [
        1,
        2,
        3
      ]
    ],
    "params": {},
    "result": {
      "array": [
        1,
        2
      ],
      "item": 3
    }
  },
  {
    "inputs": [
      [
        "a",
        "b",
        "c"
      ]
    ],
    "params": {},
    "result": {
      "array": [
        "a",
        "b"
      ],
      "item": "c"
    }
  },
  {
    "inputs": [
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
    ],
    "params": {},
    "result": {
      "array": [
        1,
        2
      ],
      "item": 3
    }
  }
]
```


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

```json
[
  {
    "inputs": [
      [
        1,
        2,
        3
      ]
    ],
    "params": {},
    "result": {
      "array": [
        2,
        3
      ],
      "item": 1
    }
  },
  {
    "inputs": [
      [
        "a",
        "b",
        "c"
      ]
    ],
    "params": {},
    "result": {
      "array": [
        "b",
        "c"
      ],
      "item": "a"
    }
  }
]
```


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

```json
[
  {
    "inputs": [
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
    ],
    "params": {},
    "result": {
      "contents": [
        7,
        17,
        27
      ]
    }
  }
]
```


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

```json
[]
```


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

```json
[]
```


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

```json
[]
```


### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

## nestedAgent

### Description

nested Agent

### Samples

```json
[]
```


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

```json
[]
```


### Author

Receptron team

### Repository

https://github.com/receptron/graphai


### License

MIT


<hr/>

Done in 1.14s.
