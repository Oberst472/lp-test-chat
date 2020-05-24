<template>
    <section class="section-aside">
        <div class="section-aside__content">
            <div class="section-aside__stat">Диалоги <span class="section-aside__stat-count">{{ dialogsLength }}</span></div>
            <div class="section-aside__items">
                <VueScroll>
                    <BlockAsideShortItem class="section-aside__item" v-for="item in getAllDialogs" :key="item.id" :info="item" :to="{name: 'dialog', params: {id: item.id} }"/>
                </VueScroll>
            </div>
            <div class="section-aside__add-chat">
                <UiBtn class="section-aside__add-chat-btn" theme="primary" :to="{name: 'create'}" :disabled="!isUserAuthorized">Создать новый диалог</UiBtn>
            </div>
        </div>
        <transition name="fadeLoading">
            <UiLoading class="section-aside__loading" v-if="isLoading"/>
        </transition>
    </section>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex';
    import VueScroll from 'vuescroll';
    import BlockAsideShortItem from '@/components/blocks/asideShortItem'


    export default {
        components: {
            VueScroll,
            BlockAsideShortItem
        },
        data() {
            return {
                isLoading: false
            }
        },
        computed: {
            ...mapState(['isUserAuthorized']),
            ...mapGetters('dialogs', ['getAllDialogs']),
          // ...mapState('dialogs', ['allDialogs']),
            dialogsLength() {
                return this.getAllDialogs.length ? this.getAllDialogs.length : 'Нет'
            }
        },
        methods: {
            ...mapActions('dialogs', ['getAll'])
        },
        async mounted() {
            this.isLoading = true
            await this.getAll()
            this.isLoading = false
        }
    }
</script>

<style lang="scss" scoped>
    .section-aside {
        position: relative;
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
            &-btn.router-link-active {
                pointer-events: none;
                opacity: 0.6;
            }
        }
        &__loading {
            background-color: $color--bg-nav;
            z-index: 10;
        }
        &__item {
            &:hover {
                background-color: #fff;
                &:before {
                    left: 0;
                }
            }
            &.router-link-active {
                pointer-events: none;
                background-color: #fff;
                &:before {
                    left: 0;
                }
            }
        }
    }
</style>
