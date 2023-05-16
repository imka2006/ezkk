<template>
    <button v-if="store.state.isLoading == true"  class="signup-btn another"> <Loading /> </button>
    <button v-else class="signup-btn">Войти</button> 
</template>

<script setup>
import { useStore } from 'vuex';
import Loading from './Loading.vue';
const store = useStore()
</script>

<style lang="scss" >
 .signup-btn.another {
    padding: 6px 0;
    transition:.3s;
 }
</style>