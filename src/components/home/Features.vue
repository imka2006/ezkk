<template>
    <section class="features">
        <div class="container">
            <div class="features-content">
                <div class="features-info">
                    <h1 class="features-title">Проблема карьерного <span>самоопределения</span></h1>
                    <p class="features-description">Cталкиваются ≈27% студентов</p>
                </div>
                <img class="features-img" src="../../assets/image/features/image.png" alt="features-img" />
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss">
.features {
    background: #9BD5FF;
    padding: 92px 0;

    &-title {
        font-weight: 700;
        font-size: 54.148px;
        line-height: 65px;
        color: #FFFFFF;

        span {
            color: #3763D7;
        }
    }

    &-info {
        max-width: 478px;
    }

    &-description {
        margin-top: 21px;
        font-weight: 600;
        font-size: 22.4061px;
        line-height: 32px;
        letter-spacing: 0.05em;
        color: #FFFFFF;

    }

    &-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-img {
        max-width: 100%;
    }
}

@media screen and (max-width:950px) {
    .features {
        &-content {
            flex-direction: column;
            gap: 57px;
        }

        &-info {
            text-align: center;
        }

    }
}

@media screen and (max-width:530px) {
    .features {
        padding: 58px 0 30px;
        &-title {
            font-size: 32px;
            line-height: 120%;
        }

        &-description {
            font-size: 18px;
            line-height: 26px;
        }



    }
}
</style>