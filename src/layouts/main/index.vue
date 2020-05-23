<template>
    <section class="layout-main">
        <aside class="layout-main__aside">
            <router-view name="nav" class="layout-main__aside-content"/>
        </aside>
        <main class="layout-main__body">
            <router-view class="layout-main__body-content"/>
        </main>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.layout {
    &-main {
        width: 100%;
    }
}
</style>
