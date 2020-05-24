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
                <div class="block-short__info-theme">{{ info.subject | croppedTitle }}</div>
                <div class="block-short__info-date">{{ info.created | formatDate }}</div>
            </div>
            <div class="block-short__text" v-if="info.parts[0]">{{ info.parts[0].text | croppedMessage }}</div>
            <div class="block-short__text" v-else>Нет сообщений</div>
        </div>
    </component>
</template>

<script>
    import {convertDate} from '@/utils/formatDate'

    export default {
        filters: {
            croppedTitle(value) {
                return value.length > 20 ? value.substring(0, 20) + ' ...' : value
            },
            croppedMessage(value) {
                return value.length > 80 ? value.substring(0, 80) + ' ...' : value
            },
            formatDate(val) {
                return convertDate(val)
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
            info: {
                type: Object,
                default: null
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
        position: relative;
        box-sizing: border-box;
        display: block;
        padding: 22px 20px;
        border: 0;
        background-color: transparent;
        overflow: hidden;
        transition: background-color 0.3s ease;
        text-decoration: none;

        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background-color: #E9EDF2;

        }

        &:before {
            transition-duration: 0.3s;
            content: '';
            position: absolute;
            left: -2px;
            top: 0;
            width: 2px;
            height: 100%;
            display: block;
            background-color: $color--primary;

        }

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
