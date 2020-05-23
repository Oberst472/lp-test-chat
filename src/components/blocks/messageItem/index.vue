<template>
    <article class="block-message">
        <div class="block-message__content">
            <p class="block-message__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
                voluptatum.
            </p>
            <div class="block-message__info">
                <span class="block-message__info-author">Вася Пупкин</span>
                <span class="block-message__info-date">15.12.2018 13:29</span>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        props: {
            info: {
                type: Object,
                default: null
            }
        }
    }
</script>

<style scoped lang="scss">
    .block-message {
        max-width: 380px;
        display: flex;
        width: 100%;
        margin-top: 20px;

        &__content {
        }

        &__text {
            padding: 20px;
            box-sizing: border-box;
            font-size: 14px;
            line-height: 20px;
            color: $color--text;
            border-radius: 8px;
            text-align: left;
            margin: 0;
        }

        &__info {
            margin-top: 10px;
            display: flex;
            align-items: flex-end;

            &-author {
                font-size: 13px;
                line-height: 18px;
                margin-right: 12px;
                color: $color--dark;
                font-weight: 700;

            }

            &-date {
                font-size: 10px;
                line-height: 18px;
                color: $color--text-light
            }
        }

        &--right {
            align-self: flex-end;
            .block-message__text {
                background-color: $color--bg--message-one;
                border-bottom-right-radius: 0;
            }

            .block-message__info {
                justify-content: flex-end;
            }
        }
        &--left {
            align-self: flex-start;
            .block-message__text {
                background-color: $color--bg--message-two;
                border-bottom-left-radius: 0;
            }

            .block-message__info {
                justify-content: flex-start;
            }
        }
    }
</style>
