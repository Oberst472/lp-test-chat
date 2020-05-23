<template>
    <section class="layout-main">
        <div class="layout-main__content">
            <aside class="layout-main__aside">
                <router-view name="nav" class="layout-main__aside-content"/>
            </aside>
            <main class="layout-main__body">
                <router-view class="layout-main__body-content"/>
            </main>
        </div>
    </section>
</template>

<script>
export default {

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
        }
        &__body {
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
            flex-grow: 1;
        }
    }
}
</style>
