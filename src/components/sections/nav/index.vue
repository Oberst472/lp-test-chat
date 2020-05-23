<template>
    <section class="section-aside">
        <div class="section-aside__content">
            <div class="section-aside__stat">Диалоги <span class="section-aside__stat-count">154</span></div>
            <div class="section-aside__items">
                <VueScroll>
                    <BlockNavShortItem v-for="item in 3" :key="item"/>
                </VueScroll>
            </div>
            <div class="section-aside__add-chat">Добавить новый чат</div>
        </div>
    </section>
</template>

<script>
    import VueScroll from 'vuescroll';
    import BlockNavShortItem from '@/components/blocks/navShortItem'

    export default {
        components: {
            VueScroll,
            BlockNavShortItem
        }
    }
</script>

<style lang="scss" scoped>
    .section-aside {
        &__content {}

        &__stat {
            height: 60px;
            border-bottom: 1px solid #E9EDF2;
            display: flex;
            align-items: center;
            padding: 22px 20px;
            box-sizing: border-box;
            font-size: 14px;
            line-height: 20px;
            color: $color--text-dark;

            &-count {
                color: $color--text-light;
                font-weight: $weight--bold;
                margin-left: 10px;
            }

        }

        &__items {
            height: calc(100vh - 120px);
        }

        &__add-chat {
            background-color: $color--positive;
            height: 60px;
            box-sizing: border-box;
            padding: 22px 20px;
        }
    }
</style>
