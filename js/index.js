let navDoc = document.getElementById('nav')


// 切换li active 
function liDocActive(Doc) {
    navDoc.getElementsByClassName('active')[0].classList.remove('active')
    Doc.setAttribute('class', 'active')
}


navDoc.addEventListener('click', function (e) {
    if (e.target == this) {
        return
    } else if (e.target.localName == 'a') {
        liDocActive(e.target.parentNode)
    } else {
        let liItem = e.target
        liDocActive(liItem)
    }
})




