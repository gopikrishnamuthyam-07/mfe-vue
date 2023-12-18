
<template>
    <div>
        <ButtonComponent @someEvent="logToConsole" class="bg bg-red-500" />
    </div>
</template>
  
<script setup>
import ButtonComponent from './ButtonComponent.vue';
function logToConsole() {
    console.log('Button clicked in Component C!');

}

</script>
  