<script setup lang="ts">
import { reactive } from 'vue';
import Counter from './components/Counter.vue';

interface IAppInfo {
  name: string,
  slogan: string,
};

const appInfo: IAppInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on',
});
</script>

<template>
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan }}</h2>
  </div>
 <Counter 
    :limit="10"
  />
</template>

<style scoped>

</style>
