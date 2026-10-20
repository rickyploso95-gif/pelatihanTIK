// Menunggu dokumen selesai dimuat sebelum menjalankan skrip
document.addEventListener("DOMContentLoaded", function () {
    
    // Mengambil elemen tombol dan tempat teks berdasarkan ID
    const sapaButton = document.getElementById("sapaButton");
    const pesanOutput = document.getElementById("pesanOutput");

    // Menambahkan aksi ketika tombol diklik
    sapaButton.addEventListener("click", function () {
        // Mengubah teks di dalam elemen pesanOutput
        pesanOutput.textContent = "Halo! Terima kasih sudah mengunjungi halaman pelatihan TIK ini.";
    });

});
