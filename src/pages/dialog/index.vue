<template>
    <section class="page-dialog">
        <div class="page-dialog__content">
            <div class="page-dialog__messages">
                <SectionMessages/>
            </div>
            <div class="page-dialog__entry">
                <SectionEntryMessage placeholder="Введите текст"/>
            </div>
        </div>
    </section>
</template>

<script>
    import SectionMessages from '@/components/sections/messages';
    import SectionEntryMessage from '@/components/sections/entryMessage';

    export default {
        components: {
            SectionMessages,
            SectionEntryMessage
        }
    }
</script>

<style scoped lang="scss">
    .page-dialog {
        width: 100%;
        display: flex;

        &__content {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        &__messages {
            flex-grow: 1;
            display: flex;
        }

        &__entry {
            min-height: 70px;
        }
    }

</style>
