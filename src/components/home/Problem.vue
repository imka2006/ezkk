<template>
    <section class="problem">
        <div class="container">
            <h2 class="problem-title">Проблема родительского контроля </h2>
            <div class="problem-content">
                <img src="../../assets/image/problem/image.png" alt="problem-image" class="problem-img">
                <div class="problem-mesages">
                    <div class="problem-block first">Уведомления о пропуске занятий</div>
                    <div class="problem-block second">Достижения и выговоры студентов</div>
                    <div class="problem-block third">Успеваемость</div>
                </div>
            </div>
            <p class="problem-description">Электронная цифровая книга позволяет родителям держать руку на пульсе и быть в
                курсе успеваемости своих детей, их достижений, и оплаты за обучение.</p>
        </div>
    </section>
</template>

<script>
</script>

<style lang="scss">
.problem {
    font-family: 'Jost';

    &-title {
        font-weight: 700;
        font-size: 43.4917px;
        line-height: 120%;
        text-align: center;
        color: #8D64DC;
        margin-bottom: 100px;
    }

    &-content {
        display: flex;
        align-items: center;
        gap: 63px;
    }

    &-description {
        font-weight: 400;
        font-size: 16.3094px;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: #000000;
        margin: 68px auto 0;
        max-width: 951px;
    }

    &-mesages {
        display: flex;
        flex-direction: column;
        gap: 54px;
    }

    &-block {
        padding: 10px 30px;
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
            background: #5CB34E;
        }

        &.third {
            background: #E23838;
        }
    }

    &-img {
        max-width: 100%;
    }
}

@media screen and (max-width:1115px) {
    .problem {
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
    .problem {
        &-title {
            margin-bottom: 38px;
            font-size: 32px;
            line-height: 120%;
        } 

        &-block {
            font-size: 16.5783px;
            line-height: 24px;
        }
    }
}
</style>