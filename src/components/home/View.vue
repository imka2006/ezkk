<template>
    <section id="view" class="view">
        <div class="container">
            <div class="view-content">
                <img src="../../assets/image/view/image.png" class="view-img" alt="view-img">
                <div class="veiw-info">
                    <h2 class="view-title">Как мы это видим?</h2>
                    <div class="view-wrapper">
                        <div class="view-flex">
                            <div class="view-block">
                                1.Студент принимает участие в мероприятиях
                            </div>
                            <div class="view-block">
                                2.Система формирует сетку навыков
                            </div>
                        </div>
                        <div class="view-flex">
                            <div class="view-block">
                                3.Алгоритм предлагает персонализированную подборку вакансий
                            </div>
                            <div class="view-block">
                                4.Платформа помогает создать резюме под конкретную должность
                            </div>
                        </div>
                        <div class="view-flex">
                            <div class="view-block">
                                5.Для повышения квалификация платформа предлагает актуальные стажировки
                            </div>
                            <div class="view-block">
                                6.Студент-активист получает гораздо больше шансов быть приглашенным на собеседование
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style lang="scss">
.view {
    background: linear-gradient(134.65deg, #507AE4 0%, #FF7070 97.69%);
    border-radius: 37.3895px 37.3895px 37.3895px 233.684px;
    padding: 56px 66px 67px 113px;
    font-family: 'Jost';
    max-width: 1184px;
    margin: 48px auto 49px;

    &-content {
        display: flex;

    }

    &-title {
        font-weight: 700;
        font-size: 31.8391px;
        line-height: 120%;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 85px;
    }

    &-wrapper {
        display: flex;
        flex-direction: column;
        gap: 36px;
    }

    &-flex {
        display: flex;
        align-items: center;
        gap: 60px;
    }

    &-block {
        background: rgba(255, 255, 255, 0.15);
        border-radius: 15.5543px;
        font-weight: 600;
        font-size: 13.3322px;
        line-height: 19px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        padding: 10px 11px 11px 19px;
        max-width: 254.42px;
    }

    &-img {
        max-width: 100%;
    }

}

@media screen and (max-width:990px) {
    .view {
        &-content {
            flex-wrap: wrap-reverse;
            justify-content: center;
            gap: 30px;
        }
    }
}

@media screen and (max-width:660px) {
    .view {
        padding: 41px 20px 99px;
        margin: -20px 0 39px;
        border-radius: 37.3895px 37.3895px 233.684px 37.3895px;

        &-flex {
            flex-direction: column;
            gap: 30px;
        }

        &-title {
            margin-bottom: 44px;
            font-size: 31.8391px;
            line-height: 120%;
        }
    }
}
</style>