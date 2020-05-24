<template>
    <div class="page-main">
        <div class="page-main__content">
            {{ message }}
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        computed: {
            ...mapState('dialogs', ['allDialogs']),
            message() {
                return this.allDialogs.length ? 'Кликните на диалог слева чтобы загрузить сообщения' : 'Создайте первый диалог кликнув по кнопке в левом углу'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page-main {
        display: flex;
        width: 100%;

        &__content {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
    }
</style>
