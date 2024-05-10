const { GraphAI } = require("graphai")
const vanilla_agents = require("graphai/lib/vanilla_agents")

const ai = new GraphAI({
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
}, vanilla_agents);

ai.run().then(res => {
  console.log(res)
});
