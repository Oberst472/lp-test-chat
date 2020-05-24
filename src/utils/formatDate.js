// конвертировать дату из милисекунд в формат 1 мая 1970
const months = 'января, феврфля, марта, апреля, мая, июня, июля, августа, сентября, октября, ноября, декабря'.split(',')
export function convertDate(milliseconds) {
    const date = new Date(Number(milliseconds))
    const day = date.getUTCDate()
    const month = months[date.getMonth()]
    const year = date.getUTCFullYear()
    return `${day} ${month} ${year}`
}
// конвертировать дату из милисекунд в формат 01.01.2020 13:56
export function convertDateTime(milliseconds) {
    const date = new Date(Number(milliseconds))
    return date.toLocaleString().substring(0, 17).split(',').join(' ')
}
