export const getIdItem = lister_url => {
    const result = lister_url.match(/\d/g);
    return Number(result.join(""));
} 