export const sortMessage = (messageList) => {
    let x = [...messageList];
    return x.sort((a, b) => {
        return a.time - b.time;
    });
}