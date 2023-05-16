<template>
    <section class="auth">
        <div class="container">
            <div class="auth-content">
                <div class="auth-wrapper">
                    <img class="auth-img" src="../../assets/image/auth/image.png" alt="auth-img" />
                    <PurpleBtnLink class="auth-btn_another" text="Подать заявку" style="padding: 17px 27px;" link="https://sino0on.pythonanywhere.com/send_application" />
                </div>
                <div class="auth-info">
                    <h1 class="auth-title">Более <span>800 000+</span> Студентов</h1>
                    <p class="auth-description"> В единой зачетной книжки зарегистрировано более +800.000 студентов по всему
                        КР</p>
                    <PurpleBtnLink class="auth-btn" text="Подать заявку" style="padding: 17px 27px;" link="https://sino0on.pythonanywhere.com/send_application"  />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import PurpleBtnLink from "../../components/btns/PurpleBtnLink.vue"
</script>

<style lang="scss">
.auth {
    font-family: "Jost";

    &-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-info {
        max-width: 502px;
    }


    &-title {
        font-weight: 700;
        font-size: 45.5385px;
        line-height: 55px;
        color: #010851;

        span {
            color: #8D64DC;
        }
    }

    &-description {
        font-style: normal;
        font-weight: 400;
        font-size: 17.0769px;
        line-height: 24px;
        color: #454868;
        margin: 23px 0 15px;
    }

    &-btns {
        display: flex;
        align-items: center;
        gap: 18px;
    }

    &-btn_another {
        display: none;
    }

    &-img {
        max-width: 100%;
    }

    &-wrapper {
        display: flex;
        flex-direction: column;

    }
}

@media screen and (max-width:1070px) {
    .auth {
        padding: 84px 0 54px;

        &-content {
            flex-wrap: wrap-reverse;
            justify-content: center;
        }

        &-info {
            text-align: center;
        }

        &-btn {
            display: none;
        }

        &-btn_another {
            display: unset;
        }
    }
}

@media screen and (max-width:450px) {
    .auth {
        &-title {
            font-size: 34px;
            line-height: 120%;
        }

        &-description {
            font-weight: 400;
            font-size: 12px;
            line-height: 140%;
            color: #454868;
            margin: 0px;
            margin-top: 28px;
        }

    }
}
</style>