function removePunctuation(userQuery) {
    const str = userQuery;

    const newUserQuery = str.replace(/[^a-zA-Z ]/g, " ");

    const newUserQueryTrim = newUserQuery.replace(/^\s+|\s+$/gm,'');

    return newUserQueryTrim
}

module.exports = removePunctuation;