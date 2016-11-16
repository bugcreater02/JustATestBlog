var postBtn = document.querySelector('#postBtn'),
    form = document.querySelector('[action="upload"]')

function checkArticle() {
    var tags = document.querySelector('#tags').value,
        content = document.querySelector('#content').value,
        title = document.querySelector('#title').value
    if (content === '' || title === '') {
        alert('标题或正文不能为空')
    }
    tags.replace(/，/g, ',')
    tags = tags.split(',')
    tags.splice(5, tags.length)
    for (let i = 0; i < tags.length; ++i) {
        if (tags[i].length > 5) {
            tags.splice(i, 1)
            --i
        }
    }

}
postBtn.addEventListener('click',checkArticle)