<template>
  <div>
    <div class="text-center flex justify-center">
      <!-- MyComponent -->
      <div class="container">
        <slot name="componentA"></slot>
        <button class="p-2 font-semibold" @click="onButtonClick">click me </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['someEvent'])

function onButtonClick() {
  // debugger
  emit("someEvent")
  // alert("Hello from remote")
}
</script>