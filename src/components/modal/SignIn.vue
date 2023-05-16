<template>
  <div v-show="store.state.signipModel">
    <div @click="store.state.signipModel = !store.state.signipModel" class="sign-wrapper"></div>
    <div class="signin sign">
      <Close class="sign-close" @click="store.state.signipModel = !store.state.signipModel" />
      <div class="signup-head">
        <img src="../../assets/icons/modal/Logo.svg" alt="logo">
        <img src="../../assets/icons/modal/Close.svg" @click="store.state.signipModel = !store.state.signipModel"
          style="cursor:pointer;" alt="logo">
      </div>
      <div class="signin-content">
        <form class="signin-info">
          <div class="signin-head">
            <img src="../../assets/icons/modal/Logo.svg" alt="logo">
            <img src="../../assets/icons/modal/Close.svg" @click="store.state.signipModel = !store.state.signipModel"
              alt="logo">
          </div>
          <h2 class="signin-title">Регистрация</h2>
          <div class="signin-wrapper">
            <div class="signin-items">
              <label class="signin-label">
                Имя
                <input type="text" placeholder="Введите ваше имя" required class="signin-input">
                <svg class="signin-svg" width="12" height="12" viewBox="0 0 12 12" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.21625 5.77978C6.16938 5.7751 6.11314 5.7751 6.06158 5.77978C4.94604 5.74229 4.06018 4.8283 4.06018 3.70339C4.06018 2.55505 4.98823 1.62231 6.14126 1.62231C7.2896 1.62231 8.22234 2.55505 8.22234 3.70339C8.21765 4.8283 7.33179 5.74229 6.21625 5.77978Z"
                    stroke="#AAAAAA" stroke-width="0.66171" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M3.87268 7.50927C2.7384 8.26859 2.7384 9.50598 3.87268 10.2606C5.16164 11.123 7.27553 11.123 8.56448 10.2606C9.69876 9.5013 9.69876 8.2639 8.56448 7.50927C7.28021 6.65153 5.16633 6.65153 3.87268 7.50927Z"
                    stroke="#AAAAAA" stroke-width="0.66171" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </label>
              <label class="signin-label">
                Фамилия
                <input type="text" placeholder="Фамилия" required class="signin-input">
                <svg class="signin-svg" width="12" height="12" viewBox="0 0 12 12" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.81914 6.30933C7.81914 7.23738 7.0692 7.98732 6.14115 7.98732C5.2131 7.98732 4.46317 7.23738 4.46317 6.30933C4.46317 5.38129 5.2131 4.63135 6.14115 4.63135C7.0692 4.63135 7.81914 5.38129 7.81914 6.30933Z"
                    stroke="#AAAAAA" stroke-width="0.66171" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M6.14109 10.1856C7.79564 10.1856 9.3377 9.21072 10.411 7.52336C10.8329 6.86248 10.8329 5.75163 10.411 5.09075C9.3377 3.40339 7.79564 2.42847 6.14109 2.42847C4.48654 2.42847 2.94448 3.40339 1.87113 5.09075C1.44929 5.75163 1.44929 6.86248 1.87113 7.52336C2.94448 9.21072 4.48654 10.1856 6.14109 10.1856Z"
                    stroke="#AAAAAA" stroke-width="0.66171" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </label>
            </div>
            <div class="signin-items">
              <label class="signin-label">
                Дата рождения
                <input type="number" placeholder="Введите вашу дату рождения" required class="signin-input">
                <svg class="signin-svg" width="12" height="12" viewBox="0 0 12 12" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.4541 4.669C1.4541 3.02851 2.39152 2.32544 3.79766 2.32544H8.48477C9.8909 2.32544 10.8283 3.02851 10.8283 4.669V7.94997C10.8283 9.59046 9.8909 10.2935 8.48477 10.2935H3.79766"
                    stroke="#AAAAAA" stroke-width="0.66171" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M8.48484 4.90332L7.01777 6.0751C6.535 6.45944 5.74288 6.45944 5.26011 6.0751L3.79773 4.90332"
                    stroke="#AAAAAA" stroke-width="0.66171" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M1.4541 8.41846H4.26637" stroke="#AAAAAA" stroke-width="0.66171" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1.4541 6.5437H2.86024" stroke="#AAAAAA" stroke-width="0.66171" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </label>
              <label class="signin-label">
                Email почта
                <input type="email" placeholder="Введите вашу почту" required class="signin-input">
                <svg class="signin-svg" width="12" height="12" viewBox="0 0 12 12" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.4541 4.669C1.4541 3.02851 2.39152 2.32544 3.79766 2.32544H8.48477C9.8909 2.32544 10.8283 3.02851 10.8283 4.669V7.94997C10.8283 9.59046 9.8909 10.2935 8.48477 10.2935H3.79766"
                    stroke="#AAAAAA" stroke-width="0.66171" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M8.48484 4.90332L7.01777 6.0751C6.535 6.45944 5.74288 6.45944 5.26011 6.0751L3.79773 4.90332"
                    stroke="#AAAAAA" stroke-width="0.66171" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M1.4541 8.41846H4.26637" stroke="#AAAAAA" stroke-width="0.66171" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1.4541 6.5437H2.86024" stroke="#AAAAAA" stroke-width="0.66171" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </label>
            </div>
            <div class="signin-items">
              <label class="signin-label">
                Пароль
                <input type="password" placeholder="Введите ваш пароль" required class="signin-input">
                <svg class="signin-svg" width="12" height="12" viewBox="0 0 12 12" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.21625 5.77978C6.16938 5.7751 6.11314 5.7751 6.06158 5.77978C4.94604 5.74229 4.06018 4.8283 4.06018 3.70339C4.06018 2.55505 4.98823 1.62231 6.14126 1.62231C7.2896 1.62231 8.22234 2.55505 8.22234 3.70339C8.21765 4.8283 7.33179 5.74229 6.21625 5.77978Z"
                    stroke="#AAAAAA" stroke-width="0.66171" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M3.87268 7.50927C2.7384 8.26859 2.7384 9.50598 3.87268 10.2606C5.16164 11.123 7.27553 11.123 8.56448 10.2606C9.69876 9.5013 9.69876 8.2639 8.56448 7.50927C7.28021 6.65153 5.16633 6.65153 3.87268 7.50927Z"
                    stroke="#AAAAAA" stroke-width="0.66171" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </label>
              <label class="signin-label">
                Повторите пароль
                <input type="password" placeholder="Повторите пароль" required class="signin-input">
                <svg class="signin-svg" width="12" height="12" viewBox="0 0 12 12" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.81914 6.30933C7.81914 7.23738 7.0692 7.98732 6.14115 7.98732C5.2131 7.98732 4.46317 7.23738 4.46317 6.30933C4.46317 5.38129 5.2131 4.63135 6.14115 4.63135C7.0692 4.63135 7.81914 5.38129 7.81914 6.30933Z"
                    stroke="#AAAAAA" stroke-width="0.66171" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M6.14109 10.1856C7.79564 10.1856 9.3377 9.21072 10.411 7.52336C10.8329 6.86248 10.8329 5.75163 10.411 5.09075C9.3377 3.40339 7.79564 2.42847 6.14109 2.42847C4.48654 2.42847 2.94448 3.40339 1.87113 5.09075C1.44929 5.75163 1.44929 6.86248 1.87113 7.52336C2.94448 9.21072 4.48654 10.1856 6.14109 10.1856Z"
                    stroke="#AAAAAA" stroke-width="0.66171" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </label>
            </div>
          </div>
          <span class="signin-forgot">Забыли пароль?</span>
          <button class="signin-btn">Зарегестрироваться</button>
          <p class="signin-description">У вас есть аккаунт? <span>Войти</span></p>
        </form>
        <img :src="imageSignin" class="signin-img" alt="imageSignin">
      </div>
    </div>
  </div>
</template>

<script setup>
import Close from '../../assets/icons/modal/Close.vue';
import imageSignin from "../../assets/image/model/imageSignin.png"
import { ref } from "vue"
import { useStore } from 'vuex';
const isActive = ref(false)
const store = useStore()
const URL = "http://192.168.0.191:9999/"
</script>

<style lang="scss"> .signin {
   position: fixed;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   z-index: 4;
   padding: 46px 127px 78px 93px;
   max-width: 100%;

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
     gap: 96px;
   }

   &-info {
     max-width: 459px;
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

   &-items {
     display: flex;
     gap: 17px;
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
     width: 220.57px;
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
     bottom: 26px;
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
   .signin {
     &-img {
       display: none;
     }
   }
 }

 @media screen and (max-width:781px) {
   .signin {
     width: 100%;
     height: 100%;
     justify-content: center;
     display: flex;
     align-items: center;
     padding: 0;
     border-radius: unset;

     overflow: auto;
     padding: 31px 0 56px;

     

     &-title {
       margin-top: 80px;
       margin-bottom: 20px;
     }

     &-head {
       display: flex;
     }
   }
 }

 @media screen and (max-width:695px) {
   .signin {
     width: 100%;
     height: 100%;
     justify-content: center;
     display: flex;
     align-items: center;
     padding: 0;
     border-radius: unset;

   }

   .sign-wrapper {
    display: none;
   }
 }

 @media screen and (max-width:500px) {
   .signin {
     overflow: auto;
     padding: 31px 0 56px;

     &-items {
       flex-direction: column;
       gap: 0px;
     }

     &-title {
       margin-top: 300px;
       margin-bottom: 20px;
     }

     &-head {
       display: flex;
     }
   }
 }</style>