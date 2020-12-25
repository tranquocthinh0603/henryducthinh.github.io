/**
 * Auther: Ghost Trader Index - Trần Quốc Thịnh
 * Web : henryducthinh.github.io
 * V - 0.1
 */
function reFresh() {

    window.open(location.reload(true))

}

window.setInterval("reFresh()", ((Math.random() * 9000000) + 80000));