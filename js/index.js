document.addEventListener("DOMContentLoaded", function() {
    let stokDarah = {
        A: 45,
        B: 30,
        O: 10,
        AB: 25
    };

    let maxStok = 50;
    let chartHeight = 200;

    function setBarHeight(id, value, delay) {
        setTimeout(() => {
            document.getElementById(id).style.height = (value / maxStok) * chartHeight + "px";
        }, delay);
    }

    setBarHeight("barA", stokDarah.A, 500);
    setBarHeight("barB", stokDarah.B, 1000);
    setBarHeight("barO", stokDarah.O, 1500);
    setBarHeight("barAB", stokDarah.AB, 2000);
});
