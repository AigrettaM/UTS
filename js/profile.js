// function changeProfileImage() {
//     let fileInput = document.getElementById("fileInput");
//     fileInput.click();

//     fileInput.onchange = function () {
//         let file = fileInput.files[0];
//         if (file) {
//             let reader = new FileReader();
//             reader.onload = function (e) {
//                 document.getElementById("profileImage").src = e.target.result;
//             };
//             reader.readAsDataURL(file);
//         }
//     };
// }

// function editProfile() {
//     let newName = prompt("Masukkan nama baru:", document.getElementById("userName").innerText);
//     let newEmail = prompt("Masukkan email baru:", document.getElementById("userEmail").innerText);

//     if (newName) document.getElementById("userName").innerText = newName;
//     if (newEmail) document.getElementById("userEmail").innerText = newEmail;
// }
