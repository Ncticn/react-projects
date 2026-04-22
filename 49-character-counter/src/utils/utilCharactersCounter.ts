function utilCharactersCounter(value: string, excludeSpaces: boolean) {
    if (excludeSpaces) {
        return value.length.toString();
    } else {
        const clearString = value.trim().replaceAll(" ", "");
        return clearString.length.toString();
    }
}
export default utilCharactersCounter;