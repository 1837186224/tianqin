
function getAjax(url) {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.send()

    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304) {
                    resolve(xhr.responseText)
                } else {
                    reject('error')
                }
            }
        };
    })

}

