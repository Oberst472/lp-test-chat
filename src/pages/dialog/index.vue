<template>
    <section class="page-chatroom">
        <div class="page-chatroom__content">
            <div class="page-chatroom__messages">
                <SectionMessages></SectionMessages>
            </div>
            <div class="page-chatroom__entry">
                <SectionEntryMessage></SectionEntryMessage>
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

</style>
