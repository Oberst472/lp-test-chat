<template>
    <section class="layout-main">
        <div class="layout-main__content">
            <aside class="layout-main__aside">
                <router-view class="layout-main__aside-content" name="aside"/>
            </aside>

            <main class="layout-main__body">
                <transition appear mode="out-in" name="layout-fade">
                    <router-view class="layout-main__body-content"/>
                </transition>
            </main>
        </div>

        <transition name="translate">
            <SectionForm @submit="createUser" class="layout-main__popup-form" placeholder="Введите свое имя" v-if="!isUserAuthorized">
                Сохранить
            </SectionForm>
        </transition>
    </section>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import SectionForm from '@/components/sections/form';

    export default {
        components: {
            SectionForm
        },
        computed: {
            ...mapState(['isUserAuthorized'])
        },
        methods: {
            ...mapActions(['checkAuthorization']),
            createUser(val) {
                localStorage.setItem('name', val)
                this.checkAuthorization()
            }
        },
        mounted() {
            this.checkAuthorization()
        }
    }
</script>

<style lang="scss">
    .layout {
        &-main {
            display: flex;
            width: 100%;

            &__content {
                display: flex;
                width: 100%;
            }

            &__aside {
                flex-shrink: 0;
                width: 300px;
                background-color: $color--bg-nav;
            }

            &__body {
                position: relative;
                z-index: 2;
                display: flex;
                flex-grow: 1;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            }

            &__popup-form {
                position: fixed;
                top: 0;
                left: 50%;
                z-index: 10;
                max-width: 460px;
                background-color: #fff;
                transform: translate(-50%, 0);
            }

            .translate-enter-active, .translate-leave-active {
                transition: all 0.5s;
            }

            .translate-enter, .translate-leave-to {
                opacity: 0;
                transform: translate(-50%, -100px);
            }
        }
    }
</style>
