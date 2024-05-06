<script>
// Memanggil data dari server menggunakan AJAX
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        // Lakukan sesuatu dengan data yang diterima
        console.log(data);
    }
};
xhr.open("GET", "file_php_yang_anda_buat.php", true);
xhr.send();
</script>
