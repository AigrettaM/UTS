function handleRegister(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value.trim();
    let nik = document.getElementById("nik").value.trim();
    let golonganDarah = document.getElementById("golongan-darah").value;
    let gender = document.getElementById("gender").value;
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (nama && nik && golonganDarah && gender && username && password) {
        alert(`Pendaftaran berhasil!\nNama: ${nama}\nUsername: ${username}\nNIK: ${nik}\nGolongan Darah: ${golonganDarah}\nJenis Kelamin: ${gender}`);
        window.location.href = "donasi.html";
    } else {
        alert("Harap isi semua kolom!");
    }
}
