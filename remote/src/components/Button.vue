<template>
  <div>
    <div class="text-center flex justify-center">
      <!-- MyComponent -->
      <button class="bg bg-red-400" @click="onButtonClick">click me</button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['someEvent'])

function onButtonClick() {
  // debugger
  emit("someEvent")
  alert("Hello from remote")
}
</script>