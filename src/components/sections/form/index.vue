<template>
    <div class="section-create-dialog">
        <form class="section-create-dialog__form" @submit.prevent="$emit('submit', value)">
            <input class="section-create-dialog__inp" type="text" :placeholder="placeholder" v-model.trim="value">
            <UiBtn class="section-create-dialog__btn" theme="primary" size="medium" :disabled="!value.length" :loading="loading">
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
        }
    }
</script>

<style scoped lang="scss">
    .section-create-dialog {
        display: flex;
        width: 100%;
        justify-content: center;

        &__form {
            border-radius: 5px;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
            padding: $gutter;
            width: 100%;
            max-width: 400px;
        }

        &__inp {
            margin-bottom: $gutter;
            display: block;
            width: 100%;
            padding: $gutter / 2 0 $gutter / 3 0;
            box-sizing: border-box;
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
