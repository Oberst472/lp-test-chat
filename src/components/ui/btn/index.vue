<template>
    <component
        :class="classes"
        :href="href"
        :is="tag"
        :target="href ? '_blank' : ''"
        :to="to"
        @click="$emit('click')"
        class="ui-btn"
    >
        <span class="ui-btn__loading" v-if="loading"><span></span></span>
        <span class="ui-btn__value"><slot/></span>
    </component>
</template>

<script>
    export default {
        props: {
            theme: {
                type: String,
                default: 'positive'
            },
            size: {
                type: String,
                default: 'default'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            href: {
                type: String,
                default: ''
            },
            to: {
                type: Object,
                default: null
            }
        },
        computed: {
            classes() {
                return {
                    'ui-btn--disabled': this.disabled,
                    'ui-btn--loading': this.loading,
                    [`ui-btn--size-${this.size}`]: true,
                    [`ui-btn--theme-${this.theme}`]: true
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
    .ui-btn {
        position: relative;
        z-index: 2;
        display: inline-flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        font-size: inherit;
        border: 0;
        outline: none;
        cursor: pointer;
        user-select: none;
        transition: background-color 0.3s ease;
        text-decoration: none;

        &:active {
            opacity: 0.8;
        }

        &__value {
            pointer-events: none;
        }

        &__loading {
            position: absolute;
            display: flex;
            pointer-events: none;
            width: 30px;
            height: 30px;

            span {
                display: flex;
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                justify-content: center;
                align-items: center;
                border: 2px solid transparent;
                border-top-color: currentColor;
                border-bottom-color: currentColor;
                border-radius: 50%;
                position: relative;
                animation: spin 1.5s linear infinite;

                &:before {
                    content: '';
                    display: block;
                    border-radius: 50%;
                    animation: pulse 1s alternate ease-in-out infinite;
                    width: 4px;
                    height: 4px;
                    border: 2px solid currentColor;
                }
            }
        }

        &--size {
            &-default {
                width: 100%;
                font-size: 14px;
                padding: $gutter / 3 $gutter / 2;
            }

            &-medium {
                width: auto;
                min-width: 100px;
                min-height: 40px;
                font-size: 14px;
                padding: $gutter / 3 $gutter / 2;
            }

            &-small {
                width: auto;
                min-width: 80px;
                min-height: 35px;
                font-size: 12px;
                padding: $gutter / 3 $gutter / 2;

                .ui-btn__loading {
                    transform: scale(0.7);
                }
            }
        }

        &--theme {
            &-primary {
                color: #ffffff;
                background-color: $color--primary;

                &:hover {
                    background-color: lighten($color--primary, 10%);
                }
            }

            &-accent {
                color: #ffffff;
                background-color: $color--accent;

                &:hover {
                    background-color: lighten($color--accent, 10%);
                }
            }

            &-positive {
                color: #ffffff;
                background-color: $color--positive;

                &:hover {
                    background-color: lighten($color--positive, 5%);
                }
            }

            &-negative {
                color: #ffffff;
                background-color: $color--negative;

                &:hover {
                    background-color: lighten($color--negative, 10%);
                }
            }
        }

        &--disabled {
            opacity: 0.5;
            pointer-events: none;
        }

        &--loading {
            .ui-btn__value {
                opacity: 0;
            }
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
