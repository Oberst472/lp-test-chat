<template>
    <div class="block-entry-message" :class="classes">
        <div class="block-entry-message__scroll-box">
            <VueScroll>
                <div class="block-entry-message__inp" contenteditable="true" @input="oninput" ref="textInp"></div>
            </VueScroll>
        </div>
        <UiBtnSend class="block-entry-message__btn" :disabled="!value.length" :loading="loading" @click="$emit('send', value)"/>
    </div>
</template>

<script>
    import VueScroll from 'vuescroll';
    export default {
        components: {
            VueScroll
        },
        props: {
            loading: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                value: ''
            }
        },
        computed: {
            classes() {
                return {
                    'block-entry-message--active': this.value.length,
                    'block-entry-message--disabled': this.loading
                }
            }
        },
        methods: {
            oninput(e) {
                this.value = e.target.textContent
            }
        },
        watch: {
            loading(val) {
                if (!val) {
                   this.value = ''
                       this.$refs.textInp.textContent = ''
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .block-entry-message {
        width: 100%;
        overflow: hidden;
        display: flex;
        height: inherit;
        &__scroll-box {
            border-top: 1px solid #E9EDF2;
            width: 100%;
            height: 80px;
            overflow: hidden;
            box-sizing: border-box;
        }
        /deep/ .__view {
            display: flex;
            width: 100%;
        }

        &__inp {
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
        &--disabled {
            opacity: 0.6;
            pointer-events: none;
        }

        &__btn {
            flex-shrink: 0;
            width: 80px;
        }
    }
</style>
