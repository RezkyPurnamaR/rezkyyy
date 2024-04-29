$(document).ready(function(){
    $.ajax({
        url: 'toko_buku.json',
        dataType: 'json',
        success: function(data){
            $('#toko-info').html('<h3>Nama Toko: ' + data.nama_toko + '</h3>' +
                                '<p>Pengarang: ' + data.pengarang + '</p>' +
                                '<p>Alamat: ' + data.alamat + '</p>');

            var tableContent = '';
            $.each(data.koleksi_buku, function(index, book){
                tableContent += '<tr>' +
                                    '<td>' + book.judul + '</td>' +
                                    '<td>' + book.pengarang + '</td>' +
                                    '<td>' + book.tahun_terbit + '</td>' +
                                '</tr>';
            });
            $('#tabel-buku tbody').html(tableContent);
        }
    });
});
