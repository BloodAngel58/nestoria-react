export const getIdItem = (itemData) => {
    const firstWord = "detail/";
    const lastWord = "/title";
    const startIndex = itemData.lister_url.indexOf(firstWord);
    const endIndex = itemData.lister_url.indexOf(lastWord);

    const gotId = itemData.lister_url.slice(
        startIndex + firstWord.length,
        endIndex
    );
    return gotId;
}

