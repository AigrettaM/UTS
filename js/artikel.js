const articles = [
    {
        title: "Donor Darah Massal",
        image: "https://img.antaranews.com/cache/1200x800/2025/02/17/RAPP.jpg.webp",
        description: "Kegiatan donor darah diadakan untuk membantu sesama.",
        date: "10 Maret 2025",
        link: "#"
    },
    {
        title: "Pelatihan Relawan",
        image: "https://www.pmimalangkota.or.id/wp-content/uploads/elementor/thumbs/first-aid-diklat-PMI-PMR-KSR-relawan-Kota-Malang-korps-Red-Cross-Indonesia-website-qchqw1gmqhu7wdy6rfn52g6r1ccycma3vcrbfy7ijm.jpg",
        description: "Relawan PMI mengikuti pelatihan tanggap darurat.",
        date: "5 Maret 2025",
        link: "#"
    },
    {
        title: "Edukasi Kesehatan",
        image: "https://cdn.antaranews.com/cache/1200x800/2021/09/01/pmi-cilegon-promkes.jpg",
        description: "PMI mengadakan seminar tentang pentingnya kesehatan.",
        date: "1 Maret 2025",
        date: "27 Februari 2025",
        link: "#"
    },
    {
        title: "Manfaat Donor Darah bagi Kesehatan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMc4KtufGpf2_VW1eGWFMc3KA1GobgAuJqQ&s",
        description: "Donor darah tidak hanya menyelamatkan nyawa, tetapi juga memberikan manfaat kesehatan bagi pendonornya.",
        date: "17 Februari 2025",
        link: "#"
    },
    {
        title: "Langkah-langkah Menjadi Relawan PMI",
        image: "https://img2.beritasatu.com/cache/beritasatu/910x580-w/2023/08/1693388127-1102x620.webp",
        description: "Ingin bergabung sebagai relawan PMI? Simak panduan lengkapnya di sini!",
        date: "6 Februari 2025",
        link: "#"
    },
    {
        title: "Cara Menolong Korban Kecelakaan dengan Pertolongan Pertama",
        image: "https://www.hseprime.com/wp-content/uploads/2022/06/2018-10-first-aid-660x405-1.jpeg",
        description: "Pertolongan pertama yang tepat bisa menyelamatkan nyawa. Pelajari teknik dasarnya!",
        date: "28 Januari 2025",
        link: "#"
    },
    {
        title: "Mitos dan Fakta Tentang Donor Darah",
        image: "https://cdn.antaranews.com/cache/1200x800/2022/06/14/blood-doination-okkkkk.jpg",
        description: "Banyak mitos yang beredar tentang donor darah. Yuk, cari tahu kebenarannya!",
        date: "13 Januari 2025",
        link: "#"
    },
    {
        title: "Edukasi Cuci Tangan: Langkah Kecil, Dampak Besar",
        image: "https://drpm.umsida.ac.id/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-06-at-12.15.11_2b221fbb.jpg",
        description: "Mencuci tangan dengan benar dapat mencegah berbagai penyakit. Begini caranya!",
        date: "2 Januari 2025",
        link: "#"
    },
    {
        title: "PMI dan Kampanye Donor Plasma Konvalesen",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMIa1nQNEMDJFiaq-uQKHdpSBzAcyyVeelMg&s",
        description: "Donor plasma konvalesen menjadi harapan bagi pasien COVID-19. Bagaimana prosesnya?",
        date: "30 Desember 2024",
        link: "#"
    },
    {
        title: "Pentingnya Stok Darah di Masa Darurat",
        image: "https://cdn.antaranews.com/cache/1200x800/2014/03/20140320stok-darah-menipis.jpg",
        description: "Ketersediaan darah sangat penting dalam situasi darurat. Bagaimana PMI mengelolanya?",
        date: "22 Desember 2024",
        link: "#"
    }
];

function displayArticles(filteredArticles) {
    const articlesContainer = document.getElementById("articles");
    articlesContainer.innerHTML = "";
    filteredArticles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article-card");
        articleElement.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
             <p><strong>${article.date}</strong></p>
            <p>${article.description}</p>
            <a href="${article.link}">Baca Selengkapnya</a>
        `;
        articlesContainer.appendChild(articleElement);
    });
}

function displayHighlightArticle() {
    const highlightContainer = document.getElementById("highlight");
    const latestArticle = articles[0];
    highlightContainer.innerHTML = `
    <h2 class="highlight-title">Artikel Terbaru</h2>    
    <div class="highlight-card">
            <img src="${latestArticle.image}" alt="${latestArticle.title}">
            <div class="highlight-content">
                <p class="article-date">${latestArticle.date}</p>
                <h2>${latestArticle.title}</h2>
                <p>${latestArticle.description}</p>
                <a href="${latestArticle.link}" class="read-more">Baca Selengkapnya</a>
            </div>
        </div>
    `;
}

function searchArticles() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query)
    );
    displayArticles(filteredArticles);
}

document.addEventListener("DOMContentLoaded", function () {
    displayHighlightArticle();
});

document.addEventListener("DOMContentLoaded", function () {
    displayArticles(articles);
});
