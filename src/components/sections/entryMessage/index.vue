<template>
    <div class="block-entry-message" :class="classes">
        <div class="block-entry-message__inp" contenteditable="true" @input="sav"></div>
        <UiBtnSend class="block-entry-message__btn" :disabled="!value.length"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: ''
            }
        },
        computed: {
            classes() {
                return {
                    'block-entry-message--active': this.value.length
                }
            }
        },
        methods: {
            sav(e) {
                this.value = e.target.textContent
            }
        }
    }
</script>

<style scoped lang="scss">
    .block-entry-message {
        width: 100%;
        overflow: hidden;
        display: flex;

        &__inp {
            border-top: 1px solid #E9EDF2;
            flex-shrink: 0;
            padding: 30px;
            text-align: left;
            width: calc(100% - 80px);
            font-size: 14px;
            line-height: 1.2;
            color: #7D8790;
            transition-duration: 0.3s;
            box-sizing: border-box;
            outline: 0;
            position: relative;

            &:focus {
                &:before {
                    opacity: 0;
                    visibility: hidden;
                    position: absolute;
                    transform: scaleX(0);
                }
            }

            &:before {
                pointer-events: none;
                transition-duration: 0.3s;
                content: 'Введите сообщение';
                display: inline-block;
                width: 100%;

            }
        }

        &--active {
            .block-entry-message__inp:before {
                display: none !important;
            }
        }

        &__btn {
            flex-shrink: 0;
            width: 80px;
        }
    }
</style>
