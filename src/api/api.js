import customFetch from './fetch'

const baseUrl = process.env.NODE_ENV === 'development' ? `http://localhost:3000` : `https://frozen-brushlands-83726.herokuapp.com`

//искусственная задержка
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//создать новый диалог
export const apiCreateNewDialog = async function(subject) {
    await timeout(1000)
    const [data] = await Promise.all([customFetch('post', `${baseUrl}/api/create-dialog/`, subject)])
    return data
}
//получить диалог по id
export const apiGetDialogById = async function(id) {
    await timeout(1000)
    const [data] = await Promise.all([customFetch('get', `${baseUrl}/api/${id}/`)])
    return data
}
//получить все диалоги
export const apiGetAll = async function() {
    await timeout(1000)
    const [data] = await Promise.all([customFetch('get', `${baseUrl}/api/all/`)])
    return data
}
//отправить сообщение
export const apiSendMessage = async function(info) {
    console.log(info)
    await timeout(1000)
    const [data] = await Promise.all([customFetch('post', `${baseUrl}/api/create-message/`, info)])
    return data
}
