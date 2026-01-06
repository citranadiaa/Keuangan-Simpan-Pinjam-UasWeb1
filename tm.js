
const halaman = window.location.pathname;

// HALAMAN LOGIN
if (halaman.includes("masuk.html")) {
    function login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "" || password === "") {
            alert("Username dan Password wajib diisi!");
            return;
        }

        localStorage.setItem("isLogin", "true");
        localStorage.setItem("username", username);

        alert("Login berhasil!");
        window.location.href = "transaksi.html";
    }
}

// HALAMAN TRANSAKSI
if (halaman.includes("transaksi.html")) {

    if (!localStorage.getItem("isLogin")) {
        alert("Silakan login terlebih dahulu!");
        window.location.href = "masuk.html";
    }

    let no = 1;

    function simpanTransaksi() {
        const tanggal = document.getElementById("tanggal").value;
        const jenis = document.getElementById("jenis").value;
        const keterangan = document.getElementById("keterangan").value;
        const jumlah = document.getElementById("jumlah").value;

        if (!tanggal || !jenis || !keterangan || !jumlah) {
            alert("Harap lengkapi semua data transaksi!");
            return;
        }

        const tabel = document.getElementById("tabelTransaksi");
        const row = tabel.insertRow();

        row.innerHTML = `
            <td>${no++}</td>
            <td>${tanggal}</td>
            <td>${jenis}</td>
            <td>${keterangan}</td>
            <td>Rp ${Number(jumlah).toLocaleString()}</td>
        `;

        // Reset form
        document.getElementById("tanggal").value = "";
        document.getElementById("jenis").value = "";
        document.getElementById("keterangan").value = "";
        document.getElementById("jumlah").value = "";
    }

    function logout() {
        localStorage.clear();
        alert("Anda berhasil logout");
        window.location.href = "masuk.html";
    }
}
