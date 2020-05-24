<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        components: {},
        watch: {
            $route: {
                handler() {
                    document.title = this.$route.meta.title
                }
            }
        }
    }
</script>

<style lang="scss">

</style>
