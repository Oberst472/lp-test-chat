<template>
    <component
        class="block-short"
        :href="href"
        :is="tag"
        :target="href ? '_blank' : ''"
        :to="to"
    >
        <div class="block-short__content">
            <div class="block-short__info">
                <div class="block-short__info-theme">{{ title | croppedTitle }}</div>
                <div class="block-short__info-date">12 мая 2023</div>
            </div>
            <div class="block-short__text">{{ text | croppedMessage }}</div>
        </div>
    </component>
</template>

<script>
    export default {
        filters: {
            croppedTitle(value) {
                return value.length > 20 ? value.substring(0, 20) + ' ...' : value
            },
            croppedMessage(value) {
                return value.length > 80 ? value.substring(0, 80) + ' ...' : value
            }
        },
        props: {
            to: {
                type: Object,
                default: null
            },
            href: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: 'Lorem ipsum dolor sit amet, consecte'
            },
            text: {
                type: String,
                default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid asperiores assumenda corporis error omnis perspiciatis quas ratione sit veniam.'
            }
        },
        computed: {
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
    .block-short {
        background-color: transparent;
        border: 0;
        border-bottom: 1px solid #E9EDF2;
        padding: 22px 20px;
        box-sizing: border-box;

        &__content {
            text-align: left;
            max-width: 100%;
        }

        &__info {
            max-width: 100%;
            display: flex;
            justify-content: space-between;

            &-theme {
                flex-shrink: 0;
                font-size: 14px;
                line-height: 20px;
                color: $color--text-dark;
                font-weight: $weight--bold;

            }

            &-date {
                flex-shrink: 0;
                font-size: 10px;
                line-height: 20px;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                color: $color--text-light;

            }
        }

        &__text {
            font-size: 13px;
            line-height: 18px;
            color: $color--text-light;

        }
    }
</style>
