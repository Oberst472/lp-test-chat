<template>
    <component :class="classes" :is="tag" @click="$emit('click')" class="ui-btn-send" title="Отправить">
        <span class="ui-btn-send__content">
            <component :is="`icon-${iconName}`" class="ui-btn-send__icon" v-if="!loading"></component>
            <span class="ui-btn-send__loading" v-else><span></span></span>
        </span>
    </component>
</template>

<script>
    export default {
        props: {
            theme: {
                type: String,
                default: 'primary'
            },
            href: {
                type: String,
                default: ''
            },
            to: {
                type: Object,
                default: null
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },

            iconName: {
                type: String,
                default: 'send'
            }
        },
        computed: {
            classes() {
                return {
                    [`ui-btn-send--theme-${this.theme}`]: true,
                    [`ui-btn-send--icon-${this.iconName}`]: true,
                    'ui-btn-send--icon': this.iconName,
                    'ui-btn-send--disabled': this.disabled,
                    'ui-btn-send--loading': this.loading
                }
            },
            tag() {
                if (this.href) {
                    return 'a'
                } else if (this.to) {
                    return 'router-link'
                } else {
                    return 'button'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ui-btn-send {
        border: 0;
        outline: none;
        cursor: pointer;
        text-decoration: none;

        &:active {
            opacity: 0.9;
        }

        &__content {
            position: relative;
            display: flex;
            width: 100%;
            height: 0;
            padding-bottom: 100%;
        }

        &__loading {
            position: absolute;
            top: 50%;
            left: 50%;
            display: flex;
            width: 30px;
            height: 30px;
            transform: translate(-50%, -50%);
            pointer-events: none;

            span {
                position: relative;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                border: 2px solid transparent;
                border-top-color: currentColor;
                border-bottom-color: currentColor;
                border-radius: 50%;
                animation: spin 1.5s linear infinite;

                &:before {
                    content: '';
                    display: block;
                    width: 4px;
                    height: 4px;
                    border: 2px solid currentColor;
                    border-radius: 50%;
                    animation: pulse 1s alternate ease-in-out infinite;
                }
            }
        }

        &__icon {
            position: absolute;
            top: 50%;
            left: 50%;
            display: inline-flex;
            transform: translate(-50%, -50%);
        }

        &--theme-primary {
            color: white;
            background-color: $color--primary;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: darken($color--primary, 5%);
            }
        }

        &--icon-send {
            background-repeat: no-repeat;
            background-position: center;
            background-size: 70%;

            .ui-btn-send__icon {
                transform: translate(-30%, -50%);
            }

        }

        &--disabled {
            opacity: 0.6;
            pointer-events: none;
        }

        &--loading {
            opacity: 0.6;
            pointer-events: none;
        }
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes pulse {
        from {
            transform: scale(0.5);
        }
        to {
            transform: scale(1);
        }
    }
</style>
