<template>
  <div :class="store.state.burger ? 'burger-wrapper active' : 'burger-wrapper'">
    <div  class="burger-list">
      <router-link v-show="store.state.account" @click="store.state.burger = !store.state.burger" v-for="item in list" :key="item.id" :to="item.link" class="burger-link">
        <p class="burger-text">{{ item.text }}</p>
        <img :src="item.img" alt="img" class="burger-img">
      </router-link>

      <div v-if="store.state.account" class="burger-wrapperr">
      <img :src="Ava" alt="ava">
      <button class="burger-signin" @click="deleteLocal">Выйти</button>
    </div>
    <div v-else class="burger-btns">
      <button @click="store.state.signupModel = !store.state.signupModel" class="burger-signin">Войти</button>
      <button @click="store.state.signipModel = !store.state.signinModel" class="burger-signup">Регистрация</button>
    </div>
    </div>

     
  </div>
</template>

<script setup>
import { ref } from "vue";
import Ava from '../../assets/icons/sidebar/ava.svg';
import { useStore } from "vuex";
import img1 from '../../assets/icons/burger/img1.svg';
import img2 from '../../assets/icons/burger/img2.svg';
import img3 from '../../assets/icons/burger/img3.svg';
import { useRouter } from "vue-router";
const store = useStore()
const router = useRouter()
const list = ref([
  {
    id: 0,
    text: 'Личный кабинет',
    link: '/schedule',
    img: img1,
  },
  {
    id: 1,
    text: 'Расписание',
    link: '/',
    img: img2,
  },
  {
    id: 2,
    text: 'Настройки',
    link: '/',
    img: img3,
  },
])
const local = ref(localStorage.getItem('access'));

const deleteLocal = () => {
  store.commit("logOut")
  router.push('/')
}
</script>

<style lang="scss">
.burger {
  &-wrapper {
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 85%;
    overflow: auto; 
    align-items: center;
    justify-content: center;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 42px;
    align-items: center;
    margin: 30px 0;
  }

  &-text {
    font-weight: 600;
    font-size: 26.5508px;
    color: #FFFFFF;
    max-width: 154px;
    line-height: 27px;
  }

  &-link {
    border: 3.98262px solid #1EA8B8;
    border-radius: 39.8262px;
    background: #1EA9B9;
    width: 300px;
    height: 163.21px;
    position: relative;
    padding-left:31px ;
    display: flex;
    align-items: center;
    
  }
  &-img {
    position: absolute;
    top: -13px;
    right:-10px ;
  }

  &-btns {
    display: flex; 
    gap: 20px;
  }
}
.router-link-active.router-link-exact-active.burger-link {
      background: white ;
      .burger-text {
        color: #124D54;
      }
    }
</style>