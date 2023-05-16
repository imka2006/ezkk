<template>
    <header :class="store.state.burger ? 'header active' : 'header'">
        <div class="container"> 
            <div class="header-content">
                <div class="header-info">
                    <router-link to="/">
                        <Logo class="header-logo" /> 
                        <img :src="logoAnother" class="header-logo_another" alt="logo">
                        <Logo   v-if="store.state.burger" /> 
                        <img :src="logoAnother" v-else alt="logo">
                    </router-link>
                    <div class="header-languages">
                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 20.3771C16.5228 20.3771 21 16.1002 21 10.8243C21 5.54851 16.5228 1.27161 11 1.27161C5.47715 1.27161 1 5.54851 1 10.8243C1 16.1002 5.47715 20.3771 11 20.3771Z"
                                stroke="#454868" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M7.00006 10.8243C7.00006 16.1002 8.79092 20.3771 11.0001 20.3771C13.2092 20.3771 15.0001 16.1002 15.0001 10.8243C15.0001 5.54851 13.2092 1.27161 11.0001 1.27161C8.79092 1.27161 7.00006 5.54851 7.00006 10.8243Z"
                                stroke="#454868" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1 10.8243H21" stroke="#454868" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Russian</p>
                    </div>
                </div>
                <div v-if="store.state.account" class="header-wrapper">
                    <img :src="Ava" alt="ava">
                    <button class="header-signin" @click="deleteLocal()">Выйти</button>
                </div>
                <div v-else class="header-btns">
                    <button @click="store.state.signupModel = !store.state.signupModel" class="header-signin">Войти</button>
                    <button @click="store.state.signipModel = !store.state.signinModel"
                        class="header-signup">Регистрация</button>
                </div>
                <div class="header-flex">
                    <img v-show="store.state.account" :src="Ava" alt="ava">
                    <Burger />
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
// import { ref } from 'vue';
import Logo from '../../assets/icons/global/Logo.vue';
import logoAnother from '../../assets/icons/global/logoAnother.png';
import Burger from './Burger.vue'
import Ava from '../../assets/icons/sidebar/ava.svg'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
const store = useStore()
const local = ref(localStorage.getItem('access'))
const isActive = ref(false)
const router = useRouter() 

if (local.value) {
    console.log(local.value, isActive.value);
    isActive.value = true
} else {
    isActive.value = false
    console.log(local.value, isActive.value);
}

const deleteLocal = () => {
    store.commit("logOut")
    router.push('/')
}

import { ref, watch } from 'vue';

const myData = ref(''); // Ваша реактивная переменная

// Чтение данных из localStorage и установка их в реактивную переменную
const storedData = localStorage.getItem('access');
if (storedData) {
  myData.value = storedData;
}

// Отслеживание изменений реактивной переменной и сохранение данных в localStorage
watch(myData, (newValue) => {
  localStorage.setItem('myData', newValue);
});


</script>

<style lang="scss">
.header {
    font-family: "Jost";
    padding: 21px 0 17px;
    background: #ffffff;

    &.active {
        background: #FFFFFF;
        padding: 22px 0 34px;
        height: 15%;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        z-index: 3;
        width: 100%;
        filter: drop-shado  w(0px 4px 20px rgba(0, 0, 0, 0.25));
    }

    &-block {
        display: flex;
        align-items: center;
        gap: 50px;
    }

    &-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &-languages {
        display: flex;
        align-items: center;
        gap: 16px;
        cursor: pointer;
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

    &-flex {
        display: none;
    }

    &-wrapper {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    &-info {
        display: flex;
        align-items: center; 
    }

    &-btns {
        display: flex;
        align-items: center;
        gap: 13px;
    }

    &-logo_another {
        display: none;
    }

}

@media screen and (max-width: 780px) {
    .header {
        background: linear-gradient(134.65deg, #2CA9DF 3.4%, #5A6AF3 97.69%);

        &-btns {
            display: none;
        }

        &-wrapper {
            display: none;
        }

        &-languages {
            display: none;
        }

        &-logo {
            display: none;

        }

        &-flex {
            display: flex;
            gap: 20px;
            align-items: center;
            height: 43px;
        }

        &-logo_another {
            display: none;
        }
    }
}
</style>