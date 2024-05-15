// setup
//   yarn install
// run
//   npx ts-node tasks.ts

import * as agents from "graphai/lib/vanilla_agents";
import { GraphAI } from "graphai";

const sleep = async (milliseconds: number) => {
  return await new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const just_task = async (name: string, time: number) => {
  console.log(`start task ${name}`);
  await sleep(time * 1000)
  console.log(`end task ${name}`);
};

const cycle_task = async (name: string, time: number, count: number) => {
  let task_counter = 0;
  console.log(`start task ${name}`);
  while(task_counter < count) {
    console.log(`task ${name} call`)
    task_counter ++;
    if (task_counter < count) {
      await sleep(time * 1000);
    }
  }
  console.log(`end task ${name}`);
};

const task_1_coffee_water = async () => {
  await  just_task("1 coffee water", 4);
};

const task_2_wakeup = async () => {
  await cycle_task("2", 3, 5)
};

const task_3_cooking = async () => {
  await  just_task("3 cooking", 15);
};

const task_4_newspaper = async () => {
  await cycle_task("4 newspaper", 5, 4)
};

const task_5_cooking_drip = async () => {
  await  just_task("5 coffee drip", 5);
};

const task_6_change = async () => {
  await  just_task("6 change", 6);
};
const task_7_wash = async () => {
  await  just_task("7 wash", 13);
};

const task_8_breakfirst = async () => {
  await  just_task("8 breakfirst", 9);
};

const task_9_laundry = async () => {
  await  just_task("9 laundry", 5);
};

const task_10_coffee = async () => {
  await  just_task("10 drink coffee", 5);
};

const task_11_wash_dish = async () => {
  await  just_task("11 wash dish", 4);
};

const task_12_ready_to_go_out = async () => {
  await  just_task("12 ready to go out", 3);
};

const task_13_read_news_paper = async () => {
  await  just_task("13 read news paper", 8);
};

const task_14_go_out = async () => {
  console.log("14 go out")
}

const main = () => {
  const graph_data = {
    version: 0.3,
    nodes: {
      task1: {
        agent: task_1_coffee_water,
      },
      task2: {
        agent: task_2_wakeup,
      },
      task3: {
        agent: task_3_cooking,
      },
      task4: {
        agent: task_4_newspaper,
      },
      task5: {
        agent: task_5_cooking_drip,
        inputs: [":task1"],
      },
      task6: {
        agent: task_6_change,
        inputs: [":task2"],
      },
      task7: {
        agent: task_7_wash,
        inputs: [":task6"],
      },
      task8: {
        agent: task_8_breakfirst,
        inputs: [":task3", ":task5", ":task6"],
      },
      task9: {
        agent: task_9_laundry,
        inputs: [":task7"],
      },
      task10: {
        agent: task_10_coffee,
        inputs: [":task5", ":task9"],
      },
      task11: {
        agent: task_11_wash_dish,
        inputs: [":task8", ":task10"],
      },
      task12: {
        agent: task_12_ready_to_go_out,
        inputs: [":task8",],
      },
      task13: {
        agent: task_13_read_news_paper,
        inputs: [":task4",],
      },
      task14: {
        agent: task_14_go_out,
        inputs: [":task1", ":task2",":task3",":task4",":task5",":task6",":task7",":task8",":task9",":task10",":task11",":task12",":task13",],
      },
    },
    
  };
  const agentInfoDictonary = {};
  const graph = new GraphAI(graph_data, { ...agents as any, ...agentInfoDictonary });
  // graph.onLogCallback = console.log
  graph.run();
};
main();


/*

## 例

朝起きてから家を出るまでのタスクをプログラムで各例を考えます。左の()内がタスクのid. 右の()は、依存するタスクidとそれぞれの実行にかかる時間。

#### 起きたらすぐするタスク

- (1) コーヒーのお湯をわかす (４分)
- (2) 子供を起こす
  - 3分おきの5回呼ぶと起きる。ただし、3分以内の呼んだり、5分以上間隔が開くと、最初からやり直し
- (3) 朝食をつくる (15分)
- (4) いつも遅れる新聞をとりにいく
  - 5分以上間隔をあけて４回見に行くと、新聞はきている。ただし5分未満で見に行くと 最初からやりなおし

#### 依存タスク

- (5) お湯が湧いたらコーヒーをいれる(1)	(5分)
- (6) 子供が起きたら着替える(2)	(6分)
- (7) 子供が着替えおわったら洗濯機をまわす(6) (13分)
- (8) 朝食ができる && コーヒーができる&& こども着替えおわるの条件を満たすと朝食を食べる(3)(5)(6) (９分)
- (9) 洗濯機終了後、洗濯を干す(7) (5分)
- (10) コーヒーができていて、洗濯が終わっていたらコーヒーを飲み終える(5)(9) (５分)
- (11) 朝食終了 && コーヒーを飲み終えると食器を洗う(10)(8) (４分)
- (12) 朝食終了後、子供が用意する(8) (３分)
- (13) 新聞到着していたら新聞が読む(4) (8分)
- (14) 13までのタスクが全て終わっていたら家出発(1~13)


  
 */

