
<template>
    <div>
        <ButtonComponent @someEvent="showAlert" class="bg bg-yellow-500" />
        <!-- Other content for ComponentB -->
    </div>
</template>
  
<script setup>
import ButtonComponent from './ButtonComponent.vue';
function showAlert() {
    alert('Operation B initiated!');
    // Logic for Operation B
}


</script>
  