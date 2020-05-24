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

<style lang="scss" scoped>
    .ui-btn {
        position: relative;
        z-index: 2;
        box-sizing: border-box;
        display: inline-flex;
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
            width: 30px;
            height: 30px;
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

        &--size {
            &-default {
                width: 100%;
                padding: $gutter / 3 $gutter / 2;
                font-size: 14px;
            }

            &-medium {
                width: auto;
                min-width: 100px;
                min-height: 40px;
                padding: $gutter / 3 $gutter / 2;
                font-size: 14px;
            }

            &-small {
                width: auto;
                min-width: 80px;
                min-height: 35px;
                padding: $gutter / 3 $gutter / 2;
                font-size: 12px;

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
