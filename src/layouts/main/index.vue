<template>
    <section class="layout-main">
        <div class="layout-main__content">
            <aside class="layout-main__aside">
                <router-view name="aside" class="layout-main__aside-content"/>
            </aside>
            <main class="layout-main__body">
                <transition name="layout-fade" mode="out-in" appear>
                    <router-view class="layout-main__body-content"/>
                </transition>
            </main>
        </div>
        <transition name="translate">
            <SectionForm class="layout-main__popup-form" v-if="isFormActive" placeholder="Введите свое имя" @submit="createUser">Сохранить</SectionForm>
        </transition>
    </section>
</template>

<script>
    import SectionForm from '@/components/sections/form';
export default {
    components: {
        SectionForm
    },
    data() {
        return {
            isFormActive: false
        }
    },
    methods: {
      createUser(val) {
          localStorage.setItem('name', val)
          this.isFormActive = false
      }
    },
    mounted() {
        !localStorage.getItem('name') ? this.isFormActive = true : false
    }
}
</script>

<style lang="scss">
.layout {
    &-main {
        display: flex;
        width: 100%;
        &__content {
            width: 100%;
            display: flex;
        }
        &__aside {
            background-color: $color--bg-nav;
            width: 300px;
            flex-shrink: 0;
        }
        &__body {
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
            flex-grow: 1;
            display: flex;
            position: relative;
            z-index: 2;
        }
        &__popup-form {
            position: fixed;
            top: 0;
            left: 50%;
            transform: translate(-50%, 0);
            background-color: #fff;
            max-width: 460px;
            z-index: 10;
        }
        .translate-enter-active, .translate-leave-active {
            transition: all 0.5s;
        }
        .translate-enter, .translate-leave-to /* .list-leave-active до версии 2.1.8 */ {
            opacity: 0;
            transform: translate(-50%, -100px);
        }
    }
}
</style>
