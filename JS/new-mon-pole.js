function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "ghost.trader.index@gmail.com",
        Password: "eekvaiszketbnojw",
        To: "ghost.trader.index@gmail.com",
        From: "ghost.trader.index@gmail.com",
        Subject: "Thông tin đăng kí hỗ trợ mới từ DICH VU TAI CHINH",
        Body: "Nội dung yêu cầu: " + document.getElementById("nd").value + "Địa chỉ email: " + document.getElementById("email-li").value,
    }).then(
        message => alert("Đã gửi!!")
    );
}