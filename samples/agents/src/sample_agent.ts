import { AgentFunction } from "graphai";

export const sampleAgent: AgentFunction = async ({ params, inputs }) => {
  return { params, inputs };
};

// for test and document

const sampleInput = [{message: "hello"}, {message: "test"}];
const sampleParams = { sample: "123" };
const sampleResult = { inputs: sampleInput, params: sampleParams };

const sampleAgentInfo = {
  name: "sampleAgent",
  agent: sampleAgent,
  mock: sampleAgent,
  samples: [
    {
      inputs: sampleInput,
      params: sampleParams,
      result: sampleResult,
    },
  ],
  description: "Sample agent",
  author: "isamu arimoto",
  repository: "https://github.com/isamu/graphai_doc",
  license: "MIT",
};

export default sampleAgentInfo;
