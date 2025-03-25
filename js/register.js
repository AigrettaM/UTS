function handleRegister(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let nik = document.getElementById("nik").value;
    let golonganDarah = document.getElementById("golongan-darah").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (nama && nik && golonganDarah && gender && username && password) {
        alert(`Pendaftaran berhasil!\nNama: ${nama}\nUsername: ${username}\nNIK: ${nik}\nGolongan Darah: ${golonganDarah}\nJenis Kelamin: ${gender.value}`);
        window.location.href = "login.html";
    } else {
        alert("Harap isi semua kolom!");
    }
}
