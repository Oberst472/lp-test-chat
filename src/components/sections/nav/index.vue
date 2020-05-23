<template>
    <section class="section-aside">
        <div class="section-aside__content">
            <div class="section-aside__stat">Сообщений: 151</div>
            <div class="section-aside__items">
                <BlockNavShortItem v-for="item in 20" :key="item"/>
            </div>
            <div class="section-aside__add-chat">Добавить новый чат</div>
        </div>
    </section>
</template>

<script>
    import BlockNavShortItem from '@/components/blocks/navShortItem'
export default {
    components: {
        BlockNavShortItem
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

    }
    &__items {
        height: calc(100vh - 120px);
        overflow: scroll;
    }
    &__add-chat {
        background-color: $color--positive;
        height: 60px;
        box-sizing: border-box;
        padding: 22px 20px;
    }
}
</style>
