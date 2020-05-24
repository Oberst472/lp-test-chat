<template>
    <div class="page-create">
        <div class="page-create__content">
            <SectionCreateDialogForm :loading="isLoading" @submit="create"/>
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
                    this.getAll()
                    this.$router.push({name: 'dialog', params: {id: response.dialogId}})
                } else {
                    this.isLoading = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page-create {
        display: flex;
        width: 100%;

        &__content {
            display: flex;
            justify-content: center;
            align-self: center;
            width: 100%;
        }

    }
</style>
