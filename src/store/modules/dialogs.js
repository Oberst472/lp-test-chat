import {apiCreateNewDialog, apiGetAll, apiGetDialogById, apiSendMessage} from '@/api/api'

export default {
    namespaced: true,
    state: {
        dialogInfo: {
            parts: []
        },
        allDialogs: [],
        messages: []
    },
    mutations: {
        setDialogInfo(state, payload) {
            state.dialogInfo = payload
        },
        setAll(state, items) {
            state.allDialogs = items
        },
        setNewMessage(state, message) {
            state.messages.push(message)
        },
        setAllMessages(state, messages) {
            state.messages = messages
        },
        resetMessages(state) {
            state.messages = []
        }
    },
    getters: {
        getAllDialogs(state) {
            return state.allDialogs ?
                state.allDialogs.reverse() :
                []
        }
    },
    actions: {
        async stCreateNewDialog(context, value) {
            const dialog = {
                id: '',
                subject: value,
                created: '',
                parts: []
            }
            try {
                const data = await apiCreateNewDialog(dialog)
                return data ? data : false
            } catch (e) {
                console.error(e)
                return false
            }
        },
        async getDialogById({commit, dispatch}, id) {
            dispatch('resetMessages')
            try {
                const data = await apiGetDialogById(id)
                commit('setDialogInfo', data.data)
                commit('setAllMessages', data.data.parts)
                return !!data
            } catch (e) {
                console.error(e)
                return false
            }
        },
        async stSendMessage({commit}, info) {
            const message = [
                info.dialogId,
                {
                    id: '',
                    author: localStorage.getItem('name'),
                    created: '',
                    text: info.info
                }
            ]
            try {
                const data = await apiSendMessage(message)
                if (data) {
                    commit('setNewMessage', data.data)
                }
                return data ? data : false
            } catch (e) {
                console.error(e)
                return false
            }

        },
        async getAll({commit}) {
            try {
                const data = await apiGetAll()
                commit('setAll', data.data)
                return !!data
            } catch (e) {
                console.error(e)
                return false
            }
        },
        resetMessages({commit}) {
            commit('resetMessages')
        }
    }
}
