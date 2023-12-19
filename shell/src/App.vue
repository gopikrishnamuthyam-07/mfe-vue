
<template>
  <div class="text-center">
    <h1 class="italic uppercase font-bold bg bg-blue-400">Shell</h1>
    <ButtonComponent @someEvent="openModal" />
    <ModalComponent :show="modalVisible" @close="closeModal" />
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from "remote/ButtonComponent";
import ModalComponent from './components/ModalComponent.vue'

import { ref } from 'vue';

const modalVisible = ref(false);

const openModal = () => {
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
};
</script>
