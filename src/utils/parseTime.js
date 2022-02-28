export const parseTime = (time) => {
    const h = new Date(time).getHours();
    const m = new Date(time).getMinutes();
    return ("0" + h).slice(-2) + ':' + ("0" + m).slice(-2);
}