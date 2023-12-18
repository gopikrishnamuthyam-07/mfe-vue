<template>
    <div >
        <ButtonComponent @someEvent="showConfirm" class="text-black bg bg-blue-500"></ButtonComponent>
    </div>
</template>

<script setup>

import ButtonComponent from './ButtonComponent.vue';
function showConfirm() {
    if (window.confirm("are you")) {
        console.log("alert from comp A")
    }
}
</script>