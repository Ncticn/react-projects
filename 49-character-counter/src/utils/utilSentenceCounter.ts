function utilSentenceCounter(value: string) {
    
    const clearString = value.trim();
    const splitString = clearString.split(/[.?!]+/);
    const filterString = splitString.filter(item => item.trim().length > 0);

    return filterString.length.toString();
}

export default utilSentenceCounter;