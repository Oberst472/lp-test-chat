import { apiCreateNewDialog, apiGetDialogById, apiGetAll, apiSendMessage } from '@/api/api'

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
            console.log(state.messages)
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
        //создать новый диалог
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
        //получить диалог по id
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
                console.log(message)
                const data = await apiSendMessage(message)
                console.log(data)
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
