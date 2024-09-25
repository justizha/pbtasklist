<script lang="ts" setup></script>
<template>
  <nav class="px-8 py-4 border border-b border-gray-800">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl">PbList</h1>
      <ul class="font-medium text-xl flex space-x-5">
        <li>
          <RouterLink to="/task">Task</RouterLink>
        </li>
        <li>
          <RouterLink to="/auth">Login</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
