var spData = null;

function doData(json) {
    spData = json.feed.entry;
}

function readData() {
    var data = spData;
    var strData = '';

    for (var r = 0; r < data.length; r++) {
        var cell = data[r]["gs$cell"];
        if (r >= 0 && r < 8) {
            if (cell["col"] == "1") {
                strData += '<tr class="row-sp">';
                strData += '<th class="sp-fx-tb-cl"><b>' + cell["$t"] + '</b></th>';
            } else if (cell["col"] == "2") {
                strData += '<th class="sp-fx-tb-cl"><b>' + cell["$t"] + '</b></th>';
            } else if (cell["col"] == "3") {
                strData += '<th class="sp-fx-tb-cl"><b>' + cell["$t"] + '</b></th>';
            } else if (cell["col"] == "4") {
                strData += '<th class="sp-fx-tb-cl"><b>' + cell["$t"] + '</b></th>';
            } else if (cell["col"] == "5") {
                strData += '<th class="sp-fx-tb-cl"><b>' + cell["$t"] + '</b></th>';
            } else if (cell["col"] == "6") {
                strData += '<th class="sp-fx-tb-cl"><b>' + cell["$t"] + '</b></th>';
            } else if (cell["col"] == "7") {
                strData += '<th class="sp-fx-tb-cl"><b>' + cell["$t"] + '</b></th>';
            } else if (cell["col"] == "8") {
                strData += '<th class="sp-fx-tb-cl"><b>' + cell["$t"] + '</b></th>';
                strData += '</tr>';
            }
        } else {
            if (cell["col"] == "1") {
                strData += '<tr class="row-sp">';
                strData += '<td class="sp-fx-tb-cl">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "2") {
                strData += '<td class="sp-fx-tb-cl">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "3") {
                strData += '<td class="sp-fx-tb-cl">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "4") {
                strData += '<td class="sp-fx-tb-cl">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "5") {
                strData += '<td class="sp-fx-tb-cl">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "6") {
                strData += '<td class="sp-fx-tb-cl">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "7") {
                strData += '<td class="sp-fx-tb-cl">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "8") {
                strData += '<td class="sp-fx-tb-cl">' + cell["$t"] + '</td>';
                strData += '</tr>';
            }
        }
    }
    $("#sp-week").after(strData);
}
$(document).ready(function() {
    readData();
});