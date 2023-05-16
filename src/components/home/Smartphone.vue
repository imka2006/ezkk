<template>
    <section id="smartphone" class="smartphone" :style="style">
        <div class="container">
            <div class="smartphone-content">
                <img class="smartphone-img" src="../../assets/image/smartphone/image.png" alt="smartphone-img" />
                <div class="smartphone-info">
                    <p class="smartphone-description">Приложение ЕДИНАЯ ЦИФРОВАЯ ЗАЧЕТНАЯ КНИЖКА это доступ в режиме онлайн
                        к любой учебной информации, предоставленный преподавателям, родителям и студентам.</p>
                    <p class="smartphone-description">Мы предлагаем интегрировать цифровую систему в образование, благодаря
                        чему будет реализовано информирование по всем учебным процессам, университетской жизни студента,
                        изменениями расписания и ведомость в режиме онлайн.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script >
</script>

<style lang="scss">
.smartphone {
    font-family: "Jost";
    padding: 41px 0 68px;
    margin: 175px 0 135px;
    background: #DFF1FF;

    &-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 782px;
        margin: 0 auto;
    }

    &-description {
        max-width: 381.76px;
        font-weight: 600;
        font-size: 19.2888px;
        letter-spacing: 0.05em;
        color: #010851;
    }

    &-info {
        display: flex;
        flex-direction: column;
        gap: 73px;
    }

    &-img {
        max-width: 100%;
    }

}

@media screen and (max-width:695px) {
    .smartphone {
        &-content {
            flex-wrap: wrap;
            gap: 47px;
            justify-content: center;
            text-align: center;
        }

        margin: 67px 0 39px;
        background: #fff;

    }
}

@media screen and (max-width:420px) {
    .smartphone {
        &-description {
            font-size: 12px;
            line-height: 17px;
        }
    }
}
</style>