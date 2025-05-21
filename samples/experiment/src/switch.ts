import { GraphData } from "graphai";
import { main } from "./runner";

const graphDictonary: Record<string, GraphData> = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
].reduce((tmp: Record<string, GraphData>, key) => {
  tmp[key] = {
    version: 0.5,
    nodes: {
      test: {
        console: {
          after: true,
        },
        agent: "copyAgent",
        inputs: {
          data: "hello, You chose " + key + " .",
          loop: ":injection",
        },
      },
    },
  };
  return tmp;
}, {});

export const switchGraphData = {
  version: 0.5,
  nodes: {
    start: {
      value: "a",
    },

    loopGraph: {
      agent: "nestedAgent",
      inputs: {
        graphIndex: ":start",
      },
      graph: {
        loop: {
          count: 10,
        },
        version: 0.5,
        nodes: {
          graphIndex: {
            update: ":nestIndex",
          },
          graphData: {
            // agent: "lookupDictionaryAgent",
            // params: graphDictonary,
            agent: (input: any) => {
              const { namedKey } = input;
              return graphDictonary[namedKey];
            },
            inputs: {
              namedKey: ":graphIndex",
            },
          },
          test: {
            agent: "copyAgent",
            inputs: {
              loop: "@loop",
            },
            console: {
              after: true,
            },
          },
          runner: {
            inputs: {
              injection: "@loop",
            },
            graph: ":graphData",
            agent: "nestedAgent",
          },
          nestIndex: {
            agent: () => {
              const keys = Object.keys(graphDictonary);
              const randomKey = keys[Math.floor(Math.random() * keys.length)];
              return randomKey;
            },
          },
        },
      },
    },
  },
};

if (process.argv[1] === __filename) {
  main(switchGraphData);
}
