// конвертировать дату из милисекунд в dd.mm.yyyy
const months = 'января, феврфля, марта, апреля, мая, июня, июля, августа, сентября, октября, ноября, декабря'.split(',')
export function convertDate(milliseconds) {
    const date = new Date(Number(milliseconds))
    const day = date.getUTCDate()
    const month = months[date.getMonth()]
    const year = date.getUTCFullYear()
    return `${day} ${month} ${year}`
    // return new Date(Number(milliseconds)).toLocaleDateString()
}
