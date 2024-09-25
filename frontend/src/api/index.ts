import PocketBase from "pocketbase";

export interface Task {
  id: string;
  task: string;
  progress: string;
  level: string;
  created: Date;
  updated: Date;
}

const pb = new PocketBase("http://127.0.0.1:8090");

export const getTask = async () => {
  try {
    const records = await pb.collection("task").getFullList({
      sort: "-created",
    });
    return records;
  } catch (error) {
    console.error("Error Fetching data : ", error);
    throw error;
  }
};
