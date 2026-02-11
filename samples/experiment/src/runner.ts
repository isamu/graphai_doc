import dotenv from "dotenv";
dotenv.config({ quiet: true });
import { GraphAI, assert, GraphData } from "graphai";
import * as vanillaAgents from "@graphai/vanilla";
import { openAIAgent } from "@graphai/openai_agent";
import { anthropicAgent } from "@graphai/anthropic_agent";

export const main = async (graphData: GraphData) => {
  const graphai = new GraphAI(graphData, {
    ...vanillaAgents,
    openAIAgent,
    anthropicAgent,
  });
  const result = await graphai.run();
  console.log(JSON.stringify(result, null, 2));
};
