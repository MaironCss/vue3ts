<script setup lang="ts">
import { ref, onMounted } from 'vue';
import fetchCount from '../fetchCount'
import ControlBar from './ControlBar.vue';

interface IProps {
    limit: number;
    alertMessageOnLimit?: string;
};

const props = withDefaults(defineProps<IProps>(), {
    alertMessageOnLimit: 'can not go any higher'
})

const count = ref<number | null>(null);

onMounted(() => {
  fetchCount((initialCount) => {
    count.value = initialCount
  })
})

function addCount(num: number): void {
  if (count.value !== null) {
    if (count.value >= props.limit) {
        alert(props.alertMessageOnLimit)
    } else {
        count.value += num;
    }
  };
};

</script>

<template>
  <div>
    <p>{{ count }}</p>
    <ControlBar 
        @add-count="addCount"
        @reset-count="count = 0"
    >
    </ControlBar>
  </div>
</template>