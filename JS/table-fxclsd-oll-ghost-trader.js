/**
 * Chiến lược marketing online
 * Auther : Ghost Trader Index
 */

var spData = null;

function doData(json) {
    spData = json.feed.entry;
    //nếu cần kiểm tra thì thử console.log phát xem dữ liệu đang có dạng như nào nhé
}

function readData() {
    var data = spData;
    var strData = '';
    for (var r = 0; r < data.length; r++) {
        var cell = data[r]["gs$cell"]; //gán nội dung cần lấy - gs$cell vào biến để xử lý
        if (r >= 0 && r < 4) { // từ ô đầu tiên tới số thứ 4 xử lý riêng vì là hàng lưu tên trường dữ liệu, nếu không thích có thể bỏ qua việc ghi tên cột lên hàng 1, hoặc bỏ qua xử lý đoạn này. 
            if (cell["col"] == "1") { //cột đầu tiên mình lưu ID
                strData += '<tr class="row">';
                strData += '<th class="col-md-1"><b>' + cell["$t"] + '</b></th>'; //nội dung nằm trong gs$cell->$t
            } else if (cell["col"] == "2") { //cột thứ 2 mình lưu title
                strData += '<th class="col-md-1"><b>' + cell["$t"] + '</b></th>';
            } else if (cell["col"] == "3") { //cột thứ3 mình lưu link ảnh, với th thì vẫn in bình thường, nhưng xuống tới dưới sẽ in thành hình ảnh nhé
                strData += '<th class="col-md-1"><b>' + cell["$t"] + '</b></th>';
            } else if (cell["col"] == "4") { //cột cuối lưu mô tả ngắn cho bài
                strData += '<th class="col-md-2"><b>' + cell["$t"] + '</b></th>';
                strData += '</tr>';
            }
        } else { //xử lý các bản ghi dữ liệu bình thường
            if (cell["col"] == "1") {
                strData += '<tr class="row">';
                strData += '<td class="col-md-1">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "2") {
                strData += '<td class="col-md-1">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "3") {
                strData += '<td class="col-md-1">' + cell["$t"] + '></td>';
            } else if (cell["col"] == "4") {
                strData += '<td class="col-md-2">' + cell["$t"] + '</td>';
                strData += '</tr>';
            }
        }
    }
    $('#datafx').after(strData);
}
$(document).ready(function() {
    readData();
});