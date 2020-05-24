<template>
    <section class="page-dialog">
        <div class="page-dialog__content">
            <div class="page-dialog__messages">
                <SectionMessages :info="messages"/>
            </div>
            <div class="page-dialog__entry">
                <SectionEntryMessage :loading="isBtnLoading" @send="sendMessage" placeholder="Введите текст"/>
            </div>
        </div>
        <transition name="fadeLoading">
            <UiLoading class="page-dialog__loading" v-if="isPageLoading"/>
        </transition>
    </section>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import SectionMessages from '@/components/sections/messages';
    import SectionEntryMessage from '@/components/sections/entryMessage';

    export default {
        components: {
            SectionMessages,
            SectionEntryMessage
        },
        data() {
            return {
                isPageLoading: false,
                isBtnLoading: false
            }
        },
        computed: {
            ...mapState('dialogs', ['messages'])
        },
        methods: {
            ...mapActions('dialogs', ['getDialogById', 'stSendMessage']),
            async sendMessage(val) {
                this.isBtnLoading = true
                await this.stSendMessage({dialogId: this.$route.params.id, info: val})
                this.isBtnLoading = false
            },
            async downloadDialog(id) {
                this.isPageLoading = true
                await this.getDialogById(id)
                this.isPageLoading = false
                return true
            }
        },
        async mounted() {
            await this.downloadDialog(this.$route.params.id)
        },
        async beforeRouteUpdate(to, from, next) {
            await this.downloadDialog(to.params.id)
            next()
        }
    }
</script>

<style lang="scss" scoped>
    .page-dialog {
        position: relative;
        display: flex;
        width: 100%;

        &__content {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        &__messages {
            display: flex;
            flex-grow: 1;
        }

        &__entry {
            position: sticky;
            right: 0;
            bottom: 0;
            min-height: 70px;
            overflow: hidden;
        }

        &__loading {
            background-color: #fff;
        }
    }
</style>
