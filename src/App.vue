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
                  console.log(88)
                  document.title = this.$route.meta.title
              }
          }
      }
}
</script>

<style lang="scss">

</style>
