<template>
    <section class="section-messages">
        <VueScroll>
            <transition-group appear name="list" tag="div" class="section-messages__items">
                <BlockMessageItem class="section-messages__item" :class="messageClass(item.author)" v-for="item in info" :key="item.id" :info="info.length ? item : null"/>
            </transition-group>
            <span class="section-messages__mock-text" v-if="!info.length">В этом диалоге еще нет сообщений :(</span>
        </VueScroll>
    </section>
</template>

<script>
    import VueScroll from 'vuescroll';
    import BlockMessageItem from '@/components/blocks/messageItem';

    export default {
        components: {
            BlockMessageItem,
            VueScroll
        },
        props: {
            info: {
                type: Array,
                default: () => {
                }
            }
        },
        data() {
            return {
                lol: 1,
                name: localStorage.getItem('name')
            }
        },
        methods: {
            messageClass(author) {
                return this.name === author ? 'block-message--right' : 'block-message--left'
            }
        }
    }
</script>

<style scoped lang="scss">
    .section-messages {
        display: flex;
        width: 100%;
        padding: 0;
        box-sizing: border-box;
        flex-direction: column;
        overflow: hidden;
        height: calc(100vh - 80px);

        /deep/ .__view {
            display: flex;
            width: 100%;
        }

        &__items {
            width: 100%;
            display: flex;
            padding: 0 20px 40px 40px !important;
            box-sizing: border-box !important;
            flex-direction: column !important;
        }

        &__item {
            transition: all 1s;

            &:first-of-type {
                margin-top: auto;
            }
        }

        &__mock-text {
            margin-top: auto;
            margin-bottom: auto;
        }
    }

    .list-item {
        transition: all 1s;
        display: block;
        margin-right: 10px;
    }

    .list-enter, .list-leave-to
        /* .list-complete-leave-active до версии 2.1.8 */
    {
        opacity: 0;
        transform: translateY(30px);
    }

    .list-leave-active {
        position: absolute;
    }
</style>
