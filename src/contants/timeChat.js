export const convertTime = (date) => {
    const time = new Date(date)
    const year = time.getFullYear()
    const month = time.getMonth()
    const day = time.getDate()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    return `${hours}:${minutes} ${day}/${month + 1}/${year}`
}