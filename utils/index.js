export function setTime() {
    const date = new Date();
    return `${ date.getFullYear() }年${ date.getMonth() }月${ date.getDay() }日`
}