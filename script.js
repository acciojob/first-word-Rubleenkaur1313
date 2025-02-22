function firstWord(str) {
    // Check if the string is empty
    if (str.length === 0) {
        return '';
    }

    // Find the index of the first space
    const spaceIndex = str.indexOf(' ');

    // If there is no space, return the entire string
    if (spaceIndex === -1) {
        return str;
    }

    // Return the substring from the start to the first space
    return str.substring(0, spaceIndex);
}
