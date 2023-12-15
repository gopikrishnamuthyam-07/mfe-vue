<!-- ModalComponent.vue -->

<template>
  <div>
    <p>show is {{ show }}</p>
    <div v-if="show" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <h1 class="bg bg-red-500">hello</h1>
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="closeModal"></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <!-- Your modal content -->

            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                @click="closeModal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { show } = defineProps(['show']);
const emits = defineEmits();

const closeModal = () => {
  emits('close');
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
