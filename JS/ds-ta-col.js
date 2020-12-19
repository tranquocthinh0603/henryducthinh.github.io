function sendForm() {
    let data = $('#form-lt-mc').serialize();

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwUqK9yC5ZjejlWdKndHlSoTiczucsy_O9EfchkdAeaa8MiMO4R/exec",
        method: "GET",
        dataType: "json",
        data: data,
        success: function(responseData, textStatus, jqXHR) {},
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });

    window.jQuery(this).trigger("reset");
    alert("Đăng kí thành công!");

    return true;
};