<?php
// Koneksi ke database
$koneksi = mysqli_connect("localhost", "username", "password", "nama_database");

// Periksa koneksi
if (mysqli_connect_errno()) {
    echo "Koneksi database gagal: " . mysqli_connect_error();
    exit();
}

// Query untuk mendapatkan data login
$query = "SELECT * FROM tabel_login";
$result = mysqli_query($koneksi, $query);

// Simpan data dalam array
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// Tampilkan data dalam format JSON
echo json_encode($data);

// Tutup koneksi
mysqli_close($koneksi);

// Koneksi ke database
$koneksi = mysqli_connect("localhost", "username", "password", "nama_database");

// Periksa koneksi
if (mysqli_connect_errno()) {
    echo "Koneksi database gagal: " . mysqli_connect_error();
    exit();
}

// Ambil ID yang akan dihapus dari URL
$id = $_GET['id'];

// Query untuk menghapus data
$query = "DELETE FROM tabel_login WHERE id = '$id'";
mysqli_query($koneksi, $query);

// Tutup koneksi
mysqli_close($koneksi);

?>
