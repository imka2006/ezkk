<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/header/Header.vue"
import { RouterView, useRouter } from 'vue-router'
import { computed, onMounted } from 'vue'
import Sidebar from './layout/Sidebar.vue'
import { useStore } from "vuex";
import Burgerinfo from './components/header/BurgerInfo.vue';

const store = useStore();
const route = useRouter()
import SignUp from './components/modal/SignUp.vue';
import SignIn from './components/modal/SignIn.vue';
import Loading from './components/loading/Loading.vue';

onMounted(() => {
  // console.log(store.state.signupModel, store.state.signinModel, store.state.burger);
  // if (!store.state.signupModel) {
  //   document.querySelector("body").style.overflow = "hidden"
  // } else {
  //   document.querySelector("body").style.overflow = "unset"
  // }
 })

// const layout = computed(() => {
//   console.log(route.meta);
// })
</script>

<template>
  <Header />
    <Burgerinfo v-show="store.state.burger" /> 
        <SignUp />
        <SignIn />
  <!-- <component :is="layout"> -->
    <router-view />
  <!-- </component> -->
  <Footer />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

body {
  margin: 0;
  font-family: "Jost";
}

body.active {
  overflow: hidden;
}

ul {
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: initial;
}

h1,
h2,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

button {
  border: none;
  cursor: pointer;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.title {
  font-weight: 700;
  font-size: 48px;
  line-height: 120%;
  text-align: center;
  color: #010851;
}

.text-dark-blue {
  color: #8d64dc;
}

.text-blue {
  color: #49a7eb;
}

.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px;
}

.wrapper {
  display: flex;
  align-items: start;justify-content: space-between;
}
</style>