<template>
    <component :is="tag" class="ui-btn-send" :class="classes" @click="$emit('click')" title="Отправить">
        <span class="ui-btn-send__content">
            <component class="ui-btn-send__icon" :is="`icon-${iconName}`"></component>
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
                    'ui-btn-send--disabled': this.disabled
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

<style scoped lang="scss">
    .ui-btn-send {
        border: 0;
        outline: none;
        text-decoration: none;
        cursor: pointer;

        &:active {
            opacity: 0.9;
        }

        &__content {
            height: 0;
            width: 100%;
            padding-bottom: 100%;
            position: relative;
            display: flex;
        }

        &__icon {
            position: absolute;
            top: 50%;
            left: 50%;
            display: inline-flex;
            transform: translate(-50%, -50%);
        }

        &--theme-primary {
            background-color: $color--primary;
            color: white;
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
            pointer-events: none;
            opacity: 0.6;

        }
    }
</style>
