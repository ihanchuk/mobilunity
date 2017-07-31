const uniqueTags = (data) => {
    let result = [];
    result.push('All Tags');
    data.forEach((element) => {
        element.tags.forEach((item) => {
            if (result.indexOf(item) === -1) result.push(item);
        });
    });
    return result;
}

export { uniqueTags }