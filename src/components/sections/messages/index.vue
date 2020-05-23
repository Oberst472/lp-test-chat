<template>
    <section class="section-messages">
        <VueScroll>
            <BlockMessageItem class="block-message--right"/>
            <BlockMessageItem class="block-message--left"/>
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
            padding: 0 20px 40px 40px !important;
            box-sizing: border-box !important;
            flex-direction: column !important;
            justify-content: flex-end;
        }
    }
</style>
