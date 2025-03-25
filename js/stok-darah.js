document.addEventListener("DOMContentLoaded", function () {
    const stockData = [
        { lokasi: "PMI Jakarta", golA: 20, golB: 18, golAB: 15, golO: 25 },
        { lokasi: "PMI Surabaya", golA: 17, golB: 12, golAB: 14, golO: 22 },
        { lokasi: "PMI Bandung", golA: 13, golB: 10, golAB: 9, golO: 18 },
        { lokasi: "PMI Medan", golA: 15, golB: 14, golAB: 12, golO: 20 },
        { lokasi: "PMI Semarang", golA: 14, golB: 11, golAB: 10, golO: 19 },
        { lokasi: "PMI Makassar", golA: 12, golB: 9, golAB: 8, golO: 16 },
        { lokasi: "PMI Palembang", golA: 11, golB: 10, golAB: 7, golO: 14 },
        { lokasi: "PMI Balikpapan", golA: 10, golB: 8, golAB: 6, golO: 13 },
        { lokasi: "PMI Yogyakarta", golA: 13, golB: 12, golAB: 10, golO: 18 },
        { lokasi: "PMI Denpasar", golA: 9, golB: 7, golAB: 6, golO: 12 },
        { lokasi: "PMI Banjarmasin", golA: 8, golB: 6, golAB: 5, golO: 10 },
        { lokasi: "PMI Pekanbaru", golA: 12, golB: 11, golAB: 9, golO: 15 },
        { lokasi: "PMI Manado", golA: 10, golB: 9, golAB: 7, golO: 13 },
        { lokasi: "PMI Pontianak", golA: 11, golB: 10, golAB: 8, golO: 14 },
        { lokasi: "PMI Malang", golA: 15, golB: 13, golAB: 11, golO: 17 }
    ];

    let tableBody = document.getElementById("stockTableBody");

    stockData.forEach(item => {
        let row = `<tr>
            <td>${item.lokasi}</td>
            <td>${item.golA}</td>
            <td>${item.golB}</td>
            <td>${item.golAB}</td>
            <td>${item.golO}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
});
