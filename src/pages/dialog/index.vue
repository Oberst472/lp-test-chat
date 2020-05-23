<template>
    <section class="page-dialog">
        <div class="page-dialog__content">
            <div class="page-dialog__messages">
                <SectionMessages :info="messages"/>
            </div>
            <div class="page-dialog__entry">
                <SectionEntryMessage placeholder="Введите текст" @send="sendMessage" :loading="isBtnLoading"/>
            </div>
        </div>
        <transition name="fadeLoading">
            <UiLoading class="page-dialog__loading" v-if="isPageLoading"/>
        </transition>
    </section>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
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
              const response = await this.stSendMessage({dialogId: this.$route.params.id, info: val})
                this.isBtnLoading = false
                console.log(response)
            }
        },
        async mounted() {
            this.isPageLoading = true
            await this.getDialogById(this.$route.params.id)
            this.isPageLoading = false
        }
    }
</script>

<style scoped lang="scss">
    .page-dialog {
        width: 100%;
        display: flex;
        position: relative;

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
        &__loading {
            background-color: #fff;
        }
    }
</style>
