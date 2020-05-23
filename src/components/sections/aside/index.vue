<template>
    <section class="section-aside">
        <div class="section-aside__content">
            <div class="section-aside__stat">Диалоги <span class="section-aside__stat-count">154</span></div>
            <div class="section-aside__items">
                <VueScroll>
                    <BlockAsideShortItem v-for="item in 18" :key="item" :to="{name: 'dialog', params: {id: 'lol'} }"/>
                </VueScroll>
            </div>
            <div class="section-aside__add-chat">
                <UiBtn theme="info">Создать новый диалог</UiBtn>
            </div>
        </div>
    </section>
</template>

<script>
    import VueScroll from 'vuescroll';
    import BlockAsideShortItem from '@/components/blocks/asideShortItem'

    export default {
        components: {
            VueScroll,
            BlockAsideShortItem
        }
    }
</script>

<style lang="scss" scoped>
    .section-aside {
        &__content {
        }

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
            display: flex;
            height: 60px;
            box-sizing: border-box;
        }
    }
</style>
