function IEMode() {
    var ua = navigator.userAgent.toLowerCase();
    var re_trident = /\btrident\/([0-9.]+)/;
    var re_msie = /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/;
    var version;

    if (!re_msie.test(ua)) { return false; }

    var m = re_trident.exec(ua);
    if (m) {
        version = m[1].split(".");
        version[0] = parseInt(version[0], 10) + 4;
        version = version.join(".");
    } else {
        m = re_msie.exec(ua);
        version = m[1];
    }
    return parseFloat(version);
}


var ie = IEMode();
var isEdge = navigator.userAgent.indexOf("Edge") !== -1;
if ((ie && ie < 8) || isEdge) {
    if (!document.cookie.match('checkBrower=checked')) {
        document.cookie = 'checkBrower=' + escape('checked')
        alert('使用非现代浏览器浏览本博客可能会导致排版出错，建议更换chrome或firefox')
    }
}