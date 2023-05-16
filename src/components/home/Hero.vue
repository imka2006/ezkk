<template> 
    <section class="hero" :style="style">
        <div class="container">
            <div class="hero-content">
                <div class="hero-info">
                    <h1 class="hero-title">Добро пожаловать в ЕЗК!</h1>
                    <p class="hero-description"> Приложение ЕДИНАЯ ЦИФРОВАЯ ЗАЧЕТНАЯ КНИЖКА это доступ в режиме онлайн к
                        любой учебной информации, предоставленный преподавателям, родителям и студентам.</p>
                    <div v-if="!store.state.account" class="hero-btns">
                        <button class="hero-signin" @click="store.state.signupModel = !store.state.signupModel">Войти</button>
                        <button class="hero-signup" @click="store.state.signipModel = !store.state.signipModel">Регистрация</button>
                    </div>
                    <div v-else class="hero-another_btns-another">
                        <router-link   to="/schedule" class="hero-signin">
                        Войти в личный кабинет  
                        </router-link>
                    </div>
                </div>
                <img class="hero-img" src="../../assets/image/hero/image.png" alt="hero-img" />
                <div v-if="!store.state.account" class="hero-another_btns">
                    <button class="hero-signin" @click="store.state.signupModel = !store.state.signupModel">Войти</button>
                    <button class="hero-signup" @click="store.state.signipModel = !store.state.signipModel">Регистрация</button>
                </div>
                <div v-else class="hero-another_btnss">
                        <router-link   to="/schedule" class="hero-signin">
                        Войти в личный кабинет  
                        </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup> 
import { useStore } from "vuex" 
defineProps("style")    
const store = useStore() 

</script>

<style lang="scss"> .hero {
     font-family: "Jost";
     padding-bottom: 50px;

     &-content {
         display: flex;
         align-items: center;
         justify-content: space-between;
         gap: 13px;
     }

     &-info {
         width: 560px;
     }


     &-title {
         font-weight: 700;
         font-size: 55.0341px;
         line-height: 72px;
         letter-spacing: 0.05em;
         color: #FFFFFF;
     }

     &-description {
         font-weight: 400;
         font-size: 14.0211px;
         line-height: 18px;
         letter-spacing: 0.05em;
         color: #FFFFFF;
         margin: 45px 0;
     }

     &-btns {
         display: flex;
         align-items: center;
         gap: 18px;
     }
     &-another_btnss { 
        display: none;
        margin-top: 30px;
     }

     &-another_btns {
         display: none;
         align-items: center;
         gap: 18px;
         justify-content: center;
         margin-top: 54px;
     }

     &-signin {
         background: #49A7EB;
         border-radius: 7.78947px;
         font-weight: 600;
         font-size: 14px;
         letter-spacing: 0.05em;
         color: #FFFFFF;
         padding: 15px 24px;
     }

     &-signup {
         background: rgba(0, 0, 0, 0);
         border: 1.55789px solid rgba(255, 255, 255, 0.5);
         border-radius: 7.78947px;
         font-weight: 600;
         font-size: 14px;
         letter-spacing: 0.05em;
         color: #FFFFFF;
         padding: 14px 30px;
     }

     &-img {
         max-width: 50%;
     }

 }

 @media screen and (max-width:1175px) {
     .hero {
         &-title {
             font-size: 38.0341px;
             line-height: 50px;
         }
     }
 }

 @media screen and (max-width:875px) {
     .hero {
         padding: 30px 0 50px;

         &-content {
             flex-wrap: wrap;
             justify-content: center;
             flex-direction: column;
         }

         &-btns {
             display: none;

         }

         &-another_btns {
             display: flex;
         }
         &-another_btnss {
             display: flex;
         }
         &-another_btns-another {
            display: none;
         }

         &-description {
             text-align: center;
             margin: 23px 0;
         }

         &-info {
             max-width: 560px;
             width: unset;
         }

         &-title {
             text-align: center;
         }
     }
 }

 @media screen and (max-width:420px) {
     .hero {
         &-title {
             font-size: 34px;
             line-height: 130%;
         }

         &-description {
             font-size: 12px;
             line-height: 130%;
         }

     }
 }
</style>