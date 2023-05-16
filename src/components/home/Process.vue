<template>
    <section class="process">
        <div class="container">
            <h2 class="process-title">Проблема систематизации и <span>упрощения учебных процессов</span></h2>
            <div class="process-content">
                <img src="../../assets/image/process/image.png" alt="process-image" class="process-img">
                <div class="process-mesages">
                    <div class="process-block first">Видимость в режиме онлайн</div>
                    <div class="process-block second">Изменения в расписании</div>
                    <div class="process-block third">Упрощение работы на всех уроках</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style lang="scss">
.process {
    font-family: 'Jost';
    margin: 143px 0 96px;

    &-title {
        font-weight: 700;
        font-size: 34.4367px;
        line-height: 120%;
        text-align: center;
        color: #010851;
        margin: 0 auto 60px;
        max-width: 548px;

        span {
            color: #49A7EB;
        }
    }

    &-content {
        display: flex;
        align-items: center;
        gap: 57px;
        justify-content: center;
    }

    &-description {
        font-weight: 400;
        font-size: 16.3094px;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: #000000;
        margin-top: 68px;
    }

    &-mesages {
        display: flex;
        flex-direction: column;
        gap: 54px;
    }

    &-block {
        padding: 8px 25px;
        font-weight: 600;
        font-size: 21.7459px;
        line-height: 31px;
        letter-spacing: 0.05em;
        border-radius: 25.3702px;
        color: #FFFFFF;
        width: fit-content;

        &.first {
            background: #49A7EB;
        }

        &.second {
            background: #49A7EB;
        }

        &.third {
            background: #8D64DC;
        }
    }
    &-img {
        max-width: 100%;
    }
}

@media screen and (max-width:1115px) {
    .process {
        &-content {
            flex-direction: column;
            justify-content: center;
            gap: 37px;
            text-align: center;
        }

        &-mesages {
            align-items: center;
            gap: 20px;
        }

        margin-bottom: 56px;

        &-title {
            margin-bottom: 38px;
        }

        padding: 0;
    }
}

@media screen and (max-width:685px) {
    .process {
        &-title {
            margin-bottom: 38px;
            font-size: 32px;
            line-height: 120%;
        }

        &-description {
            margin-top: 37px;
            font-size: 12px;
            line-height: 17px;
        }

        &-block {
            font-size: 16.5783px;
            line-height: 24px;
        }
    }
}
</style>