<template>
    <section class="sidebar">
        <div class="sidebar-content">
            <router-link class="sidebar-link" @click="listCount = i" v-for="(item, i) in list" :key="item.id"
                :to="item.link">
                <img :src="item.img" alt="icon">
                {{ item.text }}
                <img v-show="listCount == i" src="/src/assets/icons/sidebar/arrow.svg" alt="arrow">
            </router-link>
        </div>
        <div class="sidebar-bottom">
            <div class="sidebar-info">
                <img src="/src/assets/icons/sidebar/ava.svg" alt="ava" class="sidebar-user_ava">
                <div class="sidebar-user_info">
                    <span class="sidebar-user_name">Дастан кубанов</span>
                    <p class="sidebar-user_description">БИ(б)СОП-20</p>
                </div>
            </div>
            <img src="/src/assets/icons/sidebar/bottomArrow.svg" class="sidebar-bottom_arrow" alt="bottom-Arrwo">
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue"
import icon1 from '../assets/icons/sidebar/icon-1.svg'
import icon2 from '../assets/icons/sidebar/icon-2.svg'
import icon3 from '../assets/icons/sidebar/icon-3.svg'

const listCount = ref(0)
const list = [
    {
        id: 0,
        img: icon1,
        text: "Расписание",
        img: icon1,
        link: "/schedule",
    },
    {
        id: 1,
        img: icon2,
        text: "УМК",
        link: "/",
    },
    {
        id: 2,
        img: icon3,
        text: "Регистрация на дисплины",
        link: "/",
    }
]
</script>

<style lang="scss">
.sidebar {
    background: #FFFFFF;
    box-shadow: 0px 8.20429px 49.2257px rgba(226, 236, 249, 0.5);
    border-radius: 30px;
    padding: 24px 26px 33px 20px;
    max-width: 281px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    min-height: 875px;

    &-content {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    &-link {
        background: #fff;
        border-radius: 30px;
        font-weight: 500;
        font-size: 11.486px;
        letter-spacing: -0.01em;
        color: #9197B3;
        padding: 10px 10px 10px 17px;
        display: flex;
        align-items: center;
        gap: 17px;


    }

    .router-link-active.router-link-exact-active.sidebar-link {
        background: #2895E3;
        color: #fff;
    }

    &-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-info {
        display: flex;
        align-items: center;
        gap: 13px;
    }

    &-user_info {
        display: flex;
        flex-direction: column;
    }

    &-user_name {
        font-weight: 500;
        font-size: 11.486px;
        letter-spacing: 0.01em;
        color: #000000;
    }

    &-user_deacription {
        font-weight: 400;
        font-size: 9.84515px;
        letter-spacing: 0.01em;
        color: #757575;
    }

    &-bottom_arrow {
        cursor: pointer;
    }
}
</style> 