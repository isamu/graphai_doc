import "dotenv/config";
import { GraphAI, assert } from "graphai";
import * as vanillaAgents from "@graphai/vanilla";
import { openAIAgent } from "@graphai/openai_agent";
import { anthropicAgent } from "@graphai/anthropic_agent";

const parallelLlmGraphData = {
  version: 0.5,
  nodes: {
    llmParams: {
      value: [
        {
          agent: "openAIAgent",
          model: "gpt-4o",
          baseUrl: null,
          name: "openai1",
        },
        {
          agent: "anthropicAgent",
          model: "claude-3-5-sonnet-latest",
          baseUrl: null,
          name: "claude1",
        },
        {
          agent: "openAIAgent",
          model: "gpt-4.1-mini",
          baseUrl: null,
          name: "openai2",
        },
        /* {
agent: "openAIAgent",
model: "llama",
baseUrl: "http://localhost:11434",
}*/
      ],
    },
    prompt: {
      value: "let me know the answer 5 * 6 + 3^ 4",
    },
    pllarellLLM: {
      isResult: true,
      agent: "mapAgent",
      params: {
        compositeResult: true,
      },
      inputs: {
        rows: ":llmParams",
        prompt: ":prompt",
      },
      graph: {
        version: 0.5,
        nodes: {
          llm: {
            isResult: true,
            agent: ":row.agent",
            // params: {
            inputs: {
              model: ":row.model",
              baseUrl: ":row.baseUrl",
              // system: "someSystemPrompt",
              prompt: ":prompt",
            },
            passThrough: {
              name: ":row.name",
            },
            output: {
              text: ".text",
            },
          },
        },
      },
    },
  },
};

const main = async () => {
  const graphai = new GraphAI(parallelLlmGraphData, {
    ...vanillaAgents,
    openAIAgent,
    anthropicAgent,
  });
  const result = await graphai.run();
  console.log(JSON.stringify(result, null, 2));
};

main();
