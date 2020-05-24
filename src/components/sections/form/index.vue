<template>
    <div class="section-create-dialog">
        <form @submit.prevent="send" class="section-create-dialog__form">
            <input :placeholder="placeholder" class="section-create-dialog__inp" type="text" v-model.trim="value">
            <UiBtn :disabled="!value.length" :loading="loading" class="section-create-dialog__btn" size="medium" theme="primary">
                <slot>Создать</slot>
            </UiBtn>
        </form>
    </div>
</template>

<script>
    export default {
        props: {
            loading: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: 'Введите тему диалога'
            }
        },
        data() {
            return {
                value: ''
            }
        },
        methods: {
            send() {
                if (this.value.length) {
                    this.$emit('submit', this.value)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .section-create-dialog {
        display: flex;
        justify-content: center;
        width: 100%;

        &__form {
            width: 100%;
            max-width: 400px;
            padding: $gutter;
            border-radius: 5px;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        }

        &__inp {
            box-sizing: border-box;
            display: block;
            width: 100%;
            margin-bottom: $gutter;
            padding: $gutter / 2 0 $gutter / 3 0;
            border: 0;
            border-bottom: 1px solid rgba($color--text-light, 0.4);

            &:focus {
                &::placeholder {
                    color: transparent;
                }
            }
        }

        &__btn {
            border-radius: 5px;
        }
    }
</style>
