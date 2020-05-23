import customFetch from './fetch'

const baseUrl = process.env.NODE_ENV === 'development' ? `http://localhost:3000` : `https://frozen-brushlands-83726.herokuapp.com`

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const apiAllTodo = async function() {
    await timeout(1000)
    const [data] = await Promise.all([customFetch('get', `${baseUrl}/api/allTodo/`, null)])
    return data
}

// eslint-disable-next-line no-unused-vars
export const apiCreateNewDialog = async function(subject) {
    await timeout(1000)
    const [data] = await Promise.all([customFetch('post', `${baseUrl}/api/create-dialog/`, subject)])
    return data
}
export const apiGetDialogById = async function(id) {
    await timeout(1000)
    const [data] = await Promise.all([customFetch('get', `${baseUrl}/api/${id}/`)])
    return data
}
export const apiGetAll = async function() {
    await timeout(1000)
    const [data] = await Promise.all([customFetch('get', `${baseUrl}/api/all/`)])
    return data
}
export const apiSendMessage = async function(info) {
    console.log(info)
    await timeout(1000)
    const [data] = await Promise.all([customFetch('post', `${baseUrl}/api/create-message/`, info)])
    return data
}

// export const apiEditTodo = async function(info) {
//     await timeout(1000)
//     const [data] = await Promise.all([customFetch('patch', `${baseUrl}/api/${info.id}`, info)])
//     return data
// }
//
// export const apiDeleteTodo = async function(id) {
//     await timeout(1000)
//     const [data] = await Promise.all([customFetch('delete', `${baseUrl}/api/${id}`, null)])
//     return data
// }
//
// export const stApiGetTodoById = async function(id) {
//     await timeout(1000)
//     const [data] = await Promise.all([customFetch('get', `${baseUrl}/api/${id}`, null)])
//     return data
// }
