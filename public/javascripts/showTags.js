
var $tagsL = $('#tags')

$(document).ready(function () {
    $.get('/getTags', function (data) {
        var tags = data.split(',')
        tags.forEach(function (tag) {
            var $li = $('<li>')
            var $link = $('<a href="/?tag=' + tag + '\">')
            $link.html(tag)
            $li.append($link)
            $tagsL.after($li)
        })
    })
})