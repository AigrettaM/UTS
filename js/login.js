function handleLogin(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) {
        alert("Login berhasil!");
        window.location.href = "donasi.html";
    } else {
        alert("Harap isi semua kolom!");
    }
}
