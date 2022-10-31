function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "ghost.trader.index@gmail.com",
        Password: "vriyiwlfhsievdhq",
        To: "ghost.trader.index@gmail.com",
        From: "ghost.trader.index@gmail.com",
        Subject: "Thông tin đăng kí hỗ trợ mới từ DICH VU TAI CHINH",
        Body: "Tên: " + document.getElementById("name-tl").value + "   " + "Số điện thoại: " + document.getElementById("phone-tl").value + "    " + "Nội dung: " + document.getElementById("nd-flt").value,
    }).then(function(message) {
        alert("Đã gửi thành công!")
    });
}