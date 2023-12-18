<template>
  <div>
    <div class="text-center">
      <h1 class="uppercase text-center font-bold">remote</h1>
    </div>
    <!-- <RouterView></RouterView> -->
    <ComponentA class="m-2"/>
    <ComponentB class="m-2"/>
    <ComponentC />
  </div>
</template>

<script setup>
import ComponentA from './components/ComponentA.vue';
import ComponentB from './components/ComponentB.vue';
import ComponentC from './components/ComponentC.vue';
</script>