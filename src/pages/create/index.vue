<template>
    <div class="page-create">
        <div class="page-create__content">
            <SectionCreateDialogForm @submit="create" :loading="isLoading"/>
        </div>
    </div>
</template>

<script>
    import SectionCreateDialogForm from '@/components/sections/form';
    import {mapActions} from 'vuex';
    export default {
        components: {
            SectionCreateDialogForm
        },
        data() {
            return {
                isLoading: false
            }
        },
        methods: {
            ...mapActions('dialogs', ['stCreateNewDialog', 'getAll']),
            async create(value) {
                this.isLoading = true
                const response = await this.stCreateNewDialog(value)
                if (response) {
                    this.$router.push({name: 'dialog', params: {id: response.dialogId}})
                    this.getAll()
                }
                else {
                    this.isLoading = false
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.page-create {
    display: flex;
    width: 100%;
    &__content {
        display: flex;
        width: 100%;
        justify-content: center;
        align-self: center;
    }

}
</style>
