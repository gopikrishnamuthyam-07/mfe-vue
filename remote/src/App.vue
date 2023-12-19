<template>
  <div>
    <div class="text-center">
      <h1 class="uppercase text-center font-bold bg bg-yellow-400">Remote App</h1>
    </div>
    <!-- <RouterView></RouterView> -->
    <div class="flex justify-around mt-5">
      <ComponentA class="m-2" />
      <ComponentB class="m-2" />
      <ComponentC class=" m-2" />
    </div>
  </div>
</template>

<script setup>
import ComponentA from './components/ComponentA.vue';
import ComponentB from './components/ComponentB.vue';
import ComponentC from './components/ComponentC.vue';
</script>