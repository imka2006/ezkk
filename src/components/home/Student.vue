<template>
    <div class="container another">
        <section class="student">
            <div class="student-content">
                <div class="student-info">
                    <h2 class="student-title">Каждый студент и родитель могут опробовать это на себе.</h2>
                    <p class="student-description">Каждый студент, родитель и преподаватель могут опробовать это на себе и
                        узнать насколько это удобно и важно.</p>
                    <button v-show="!store.state.account" @click="store.commit('setModalActive')" class="student-btn">Регистрация</button>
                </div>
                <img src="../../assets/image/student/image.png" alt="student-image" class="student-img">
                <button v-show="!store.state.account" @click="store.commit('setModalActive')" class="student-another_btn">Регистрация</button>
            </div>
        </section>
    </div>
</template>

<script setup >
import { useStore } from "vuex";

const store = useStore()
</script>

<style lang="scss">
.student {
    background: linear-gradient(134.65deg, #5961F9 3.4%, #EE9AE5 97.69%);
    border-radius: 40.5943px;
    font-family: 'Jost';
    padding: 0 79px 0 74px;
    margin-bottom: 95px;

    &-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-title {
        font-weight: 700;
        font-size: 40.5943px;
        line-height: 120%;
        color: #FFFFFF;
    }

    &-description {
        font-weight: 400;
        font-size: 15.2229px;
        line-height: 140%;
        letter-spacing: 0.05em;
        color: rgba(255, 255, 255, 0.8);
        margin: 20px 0;
    }

    &-btn {
        font-weight: 600;
        font-size: 15.2229px;
        line-height: 22px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        padding: 14px 20px;
        background: #ED80FD;
        border-radius: 8.45714px;
    }

    &-img {
        max-width: 100%;
    }

    &-another_btn {
        display: none;
        background: linear-gradient(102.75deg, #3822C2 8.02%, #8D75F2 98.24%);
        border-radius: 8.45714px;
        font-weight: 600;
        font-size: 15.2229px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        padding: 14px 0 16px;
        width: 350px;
    }
}

@media screen and (max-width:980px) {
    .student {
        padding: 56px 19px 52px;

        &-content {
            flex-direction: column;
            text-align: center;
            justify-content: center;
        }

        &-btn {
            display: none;
        }

        &-another_btn {
            display: unset;

        }
    }
}

@media screen and (max-width:530px) {
    .student {
        margin-bottom: 0;
        &-another_btn {
            width: 100%;
        }

        &-title {
            font-size: 32px;
            line-height: 120%;
        }

        &-description {
            font-size: 12px;
            line-height: 140%;
            margin-top: 40px;
        }
    }
    .container.another {
        padding: 0;
    }
}
</style>