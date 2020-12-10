/**
 * Chiến lược marketing online
 * Auther : Ghost Trader Index
 */

var spData = null;

function doData(json) {
    spData = json.feed.entry;
    //nếu cần kiểm tra thì thử console.log phát xem dữ liệu đang có dạng như nào nhé
    console.log(spData);
}

function readData() {
    var data = spData;
    var strData = '';
    $('#data-fx').after(strData);
}
$(document).ready(function() {
    readData();
});