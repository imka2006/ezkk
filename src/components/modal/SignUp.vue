<template>
        <div v-show="store.state.signupModel">
            <div @click="store.state.signupModel = !store.state.signupModel" class="sign-wrapper"></div>
            <div class="signup sign">
                <Close class="sign-close" @click="store.state.signupModel = !store.state.signupModel" />
                <div class="signup-head">
                    <img src="../../assets/icons/modal/Logo.svg" alt="logo">
                    <img src="../../assets/icons/modal/Close.svg"
                        @click="store.state.signupModel = !store.state.signupModel" style="cursor:pointer;" alt="logo">
                </div>      
                <div class="signup-content">
                    <form @submit.prevent="login({ userName, password })" class="signup-info">

                        <h2 class="signup-title">Авторизация</h2>
                        <div class="signup-wrapper">
                            <label class="signup-label">
                                имя
                                <input type="text" placeholder="Имя" v-model="userName" required class="signup-input">
                                <svg class="signup-svg" width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.21625 5.77978C6.16938 5.7751 6.11314 5.7751 6.06158 5.77978C4.94604 5.74229 4.06018 4.8283 4.06018 3.70339C4.06018 2.55505 4.98823 1.62231 6.14126 1.62231C7.2896 1.62231 8.22234 2.55505 8.22234 3.70339C8.21765 4.8283 7.33179 5.74229 6.21625 5.77978Z"
                                        stroke="#AAAAAA" stroke-width="0.66171" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M3.87268 7.50927C2.7384 8.26859 2.7384 9.50598 3.87268 10.2606C5.16164 11.123 7.27553 11.123 8.56448 10.2606C9.69876 9.5013 9.69876 8.2639 8.56448 7.50927C7.28021 6.65153 5.16633 6.65153 3.87268 7.50927Z"
                                        stroke="#AAAAAA" stroke-width="0.66171" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </label>
                            <label class="signup-label">
                                Пароль
                                <input type="password" placeholder="Введите ваш пароль" v-model="password" required
                                    class="signup-input">
                                <svg class="signup-svg" width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.81914 6.30933C7.81914 7.23738 7.0692 7.98732 6.14115 7.98732C5.2131 7.98732 4.46317 7.23738 4.46317 6.30933C4.46317 5.38129 5.2131 4.63135 6.14115 4.63135C7.0692 4.63135 7.81914 5.38129 7.81914 6.30933Z"
                                        stroke="#AAAAAA" stroke-width="0.66171" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M6.14109 10.1856C7.79564 10.1856 9.3377 9.21072 10.411 7.52336C10.8329 6.86248 10.8329 5.75163 10.411 5.09075C9.3377 3.40339 7.79564 2.42847 6.14109 2.42847C4.48654 2.42847 2.94448 3.40339 1.87113 5.09075C1.44929 5.75163 1.44929 6.86248 1.87113 7.52336C2.94448 9.21072 4.48654 10.1856 6.14109 10.1856Z"
                                        stroke="#AAAAAA" stroke-width="0.66171" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                            </label>
                        </div>
                        <span class="signup-forgot">Забыли пароль?</span>
                        <LoadingBtn />
                        <p class="signup-description">У вас нет аккаунта? <span>Регестрация</span></p>
                    </form>
                    <img :src="imageSignup" class="signup-img" alt="imageSignup">
                </div>
            </div>
        </div> 
</template>

<script setup>
import Close from '../../assets/icons/modal/Close.vue';
import imageSignup from "../../assets/image/model/imageSignup.png"
import { ref } from "vue"
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import LoadingBtn from '../loading/LoadingBtn.vue'; 
const store = useStore()
const userName = ref("")
const password = ref("")
const router = useRouter()


const login = async (item) => {
    await store.dispatch("getPost", item)
    if (store.state.success) router.push('/schedule')
}




</script>

<style lang="scss">
.sign {
    background: #F0F2F5;
    border-radius: 20px;
    max-width: 1076px;
    margin: 0 auto;
    box-sizing: border-box;

    &-wrapper {
        background: rgba(0, 0, 0, 0.6);
        height: 100vh;
        width: 100vw;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
    }

    &-close {
        position: absolute;
        top: 20px;
        right: 27px;
        cursor: pointer;
    }

}

.signup {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    padding: 90px 125px 92px 200px;

    &-forgot {
        font-weight: 400;
        font-size: 7.94052px;
        text-align: right;
        color: #FF6584;
        cursor: pointer;

    }

    &-content {
        display: flex;
        align-items: center;
        gap: 103px;
    }

    &-info {
        max-width: 280px;
        display: flex;
        flex-direction: column;
    }

    &-title {
        font-weight: 700;
        font-size: 32.3113px;
        line-height: 47px;
        text-align: center;
        color: #3F3D56;
        margin-bottom: 37px;
    }

    &-label {
        font-weight: 400;
        font-size: 7.94052px;
        color: #838AA3;
        display: flex;
        flex-direction: column;
        gap: 4px;
        position: relative;

        &:not(:last-child) {
            margin-bottom: 21px;
        }

        &:last-child {
            margin-bottom: 13px;
        }
    }

    &-input {
        background: #FCFCFC;
        border: 0.66171px solid #F3F3F3;
        border-radius: 5.29368px;
        padding: 16px 40px 16px 13px;
        width: 280px;
        box-sizing: border-box;

        &::placeholder {
            font-weight: 400;
            font-size: 9.26394px;
            color: #838AA3;
        }

        outline: none;
    }

    &-svg {
        position: absolute;
        right: 15px;
        bottom: 20px;
        z-index: 1;
        cursor: pointer;
    }

    &-btn {
        margin: 22px 0 13px;
        background: #1EA9B9;
        border-radius: 5.29368px;
        font-weight: 700;
        font-size: 9.26394px;
        letter-spacing: 0.198513px;
        color: #FFFFFF;
        padding: 13px 0;
    }

    &-description {
        font-weight: 400;
        font-size: 10.5874px;
        text-align: center;
        color: #333745;

        span {
            color: #1EA9B9;
            cursor: pointer;
        }
    }

    &-head {
        display: none;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25));
        background: white;
        top: 0;
        width: 100%;
        left: 0;
        padding: 24px 20px 32px;
        height: 15%;
        box-sizing: border-box;
    }
}

@media screen and (max-width:1040px) {
    .signup {
        padding: 90px 125px 90px 125px;

        &-img {
            display: none;
        }
    }
}

@media screen and (max-width:781px) {
    .signup {
        width: 100%;
        height: 100%;
        justify-content: center;
        display: flex;
        align-items: center;
        padding: 0;
        border-radius: unset;

        overflow: auto;
        padding: 31px 0 56px;

        &-items {
            flex-direction: column;
            gap: 0px;
        }

        &-title {
            margin-top: 20px;
            margin-bottom: 20px;
        }

        &-head {
            display: flex;
        }
    }

    .sign-wrapper {
        display: none;
    }
}

@media screen and (max-width:500px) {
    .signup {}
}
</style>