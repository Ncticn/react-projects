function utilWordCounter(value: string) {
    const clearString = value.trim().replace(/[.,!?;:"()]/g, "");
    const splitString = clearString.split(/\s+/);
    const filterString = splitString.filter(item => item.trim().length > 0);
    return filterString.length.toString();
}

export default utilWordCounter;