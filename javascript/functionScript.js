export {getFileArray, getFileData, deAccent};

function getFileArray(fileData, fileType) {
    let fileTitle = fileData.split('|')[0];
    let fileContent = fileData.split('|')[1];

    let fileParent = fileTitle.replaceAll('<br>', ' ')
        .split('\n').filter(item => item);

    let fileChild = [];
    for (let i = 0; i < fileParent.length; i++) {
        let startIndex = fileContent.indexOf(fileParent[i]) + fileParent[i].length;
        let endIndex = i === fileParent.length - 1
            ? fileContent.length
            : fileContent.indexOf(fileParent[i + 1]);
        let array = fileContent.substring(startIndex, endIndex)
            .split('\n').filter(item => item);
        fileChild.push(array);
    }

    return fileType === 0
        ? fileParent
        : fileChild;
}

function deAccent(string) {
    let normalization = string.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return normalization.replace(/ \D/g, function (match) {
        return match.toUpperCase().replaceAll(' ', '');
    });
}

function getFileData(url) {
    let request = new XMLHttpRequest();
    request.open('get', url, false);
    request.send(null);
    return request.responseText
        .replaceAll('\t', '')
        .replaceAll('\r\n', '\n');
}