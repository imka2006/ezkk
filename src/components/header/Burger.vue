<template>
  <div class="burger">
    <div v-if="store.state.burger" :class="store.state.burger ? 'burger-menu active' : 'burger-menu'"
      @click="store.state.burger = !store.state.burger">
      <img src="../../assets/icons/modal/Close.svg" style="cursor:pointer;" alt="logo">
    </div>
    <div v-else :class="store.state.burger ? 'burger-menu active' : 'burger-menu'"
      @click="store.state.burger = !store.state.burger">
      <div class="burger-line"></div>
      <div class="burger-line"></div>
      <div class="burger-line"></div>
    </div>


  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import Arrow from '../../assets/icons/burger/Arrow.vue';
const store = useStore();
</script>

<style lang="scss">
.burger {
  display: none;

  &-menu {
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: end;
    justify-content: center;
    width: 42px;
    height: 43px;
    border-radius: 10px;
    padding: 14px 13.8px 14.53px 9px;
    box-sizing: border-box;
    cursor: pointer;

    &.active .header-logo{
    background: none;
      display: unset;
      height: unset;
      width: unset;
      border-radius: 0;
      padding: unset;
      
    }
  }

  &-line {
    background: #1EA9B9;
    height: 2px;
    border-radius: 2px;

    &:first-child {
      width: 12px;
    }

    &:nth-child(2) {
      width: 21px;
    }

    &:last-child {
      width: 16px;
    }
  }

  

  &-signin {
    background: rgba(0, 0, 0, 0);
    border: 1.13469px solid #1EA9B9;
    border-radius: 7.78947px;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.05em;
    background: #1EA9B9;
    border-radius: 21.8505px;
    padding: 14px 30px;
    color: #fff;
  }

  &-signup {
    background: #49A7EB;
    border-radius: 7.78947px;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.05em;
    background: linear-gradient(180deg, rgba(237, 128, 253, 0) 0%, rgba(89, 97, 249, 0) 100%);
    border: 1.13469px solid #1EA9B9;
    border-radius: 21.8505px;
    padding: 15px 24px;
    color: #1EA9B9;
  }

  &-wrapperr {
    display: flex;
    align-items: center;
    gap: 15px;
  }
} 
@media screen and (max-width:780px) {
  .burger {
    display: block;
  }
}
</style>