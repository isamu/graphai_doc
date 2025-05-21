import { main } from "./runner";
import { parallelLlmGraphData } from "./llms";

export const evaluationGraphData = {
  version: 0.5,
  nodes: {
    prompt: {
      value: "let me know the answer 8 * 7 + 4^ 8",
    },
    llms: {
      agent: "nestedAgent",
      graph: parallelLlmGraphData,
      inputs: {
        prompt: ":prompt",
      },
      output: {
        data: ".pllarellLLM.llm",
      },
    },
    evaluation: {
      isResult: true,
      agent: "openAIAgent",
      inputs: {
        system: [
          "You are a judge. You have been given the following questions.",
          "Please choose the one answer that best suits the question.",
          "Once you have chosen, please reply with the name of the person who gave you that answer and the reason why.",
          "### question",
          ":prompt",
        ],
        prompt: [
          "### answers",
          ":llms.data.toJSON()"
        ],
        response_format: {
          type: "json_schema",
          json_schema: {
            name: "evaluation",
            schema: {
              type: "object",
              properties: {
                name: { type: "string" },
                reason: { type: "string" }
              },
              required: ["name", "reason"],
              additionalProperties: false
            },
            strict: true
          }
        },
      },
      output: {
        data: ".text.jsonParse()"
      },
    },
  }
};

if (process.argv[1] === __filename) {
  main(evaluationGraphData);
}
