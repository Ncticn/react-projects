function utilCharactersCounter(value: string, excludeSpaces: boolean) {
    if (!excludeSpaces) {
        const clearString = value.trim().replaceAll(" ", "");
        return clearString.length.toString();
    } else {
        return value.length.toString();
    }
}
export default utilCharactersCounter;