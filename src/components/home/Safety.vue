<template>
    <section id="safety" class="safety">
        <div class="container">
            <div class="safety-content">
                <div class="safety-info">
                    <h1 class="safety-title"><span>Безопасность</span> Время обезопасить себя и свои данные </h1>
                    <p class="safety-description">On the other hand ,we denounce with righteous indignation and dislike men
                        who are so beguiled and demoralized.</p>
                    <PurpleBtn class="safety-btn" text="Подробнее" style="padding:17px 39px;" link="/" />
                </div>
                <img class="safety-img" src="../../assets/image/safety/image.png"  alt="safety-img" />
            </div>
        </div>
    </section>
</template>

<script setup>
import PurpleBtn from "../../components/btns/PurpleBtn.vue" 
</script>

<style lang="scss">
.safety {
    font-family: "Jost";

    &-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 13px;
    }

    &-info {
        max-width: 442px;
    }


    &-title {
        font-weight: 700;
        font-size: 44.5741px;
        line-height: 53px;
        color: #8D64DC;

        span {
            color: #010851;
        }
    }

    &-description {
        font-weight: 400;
        font-size: 16.7153px;
        line-height: 23px;
        color: #454868;
        margin: 38px 0 19px;
    }

    &-btns {
        display: flex;
        align-items: center;
        gap: 18px;
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

@media screen and (max-width:950px) {
    .safety {
        &-content {
            flex-wrap: wrap;
            justify-content: center;
            text-align: center;
        }

        &-btn {
            display: none;
        }
    }
}

@media screen and (max-width:580px) {
    .safety {
        &-title {
            font-size: 32px;
            line-height: 120%;
        }

        &-description {
            text-align: left;
            font-size: 12px;
            line-height: 140%;
        }
    }
}
@media screen and (max-width:580px) {
    .safety {
        &-title {
            font-size: 28px;
            line-height: 80%;
        } 
    }
}
</style>