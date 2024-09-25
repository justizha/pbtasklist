<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";
import { getTask } from "../../api/index.ts";
import { RecordModel } from "pocketbase";

const tasks: Ref<RecordModel[]> = ref([]);

onMounted(async () => {
  try {
    const response = await getTask();
    tasks.value = response;
    console.log(tasks);
  } catch (error) {
    console.error("Something went wrong : ", error);
  }
});
</script>

<template>
  <h1>Task</h1>
</template>
