
var popup = document.querySelector(".popup");
var dismiss = document.querySelector(".popup_dismis");
var shop = document.querySelector(".popup_shop");

setTimeout(function () {
    popup.classList.add("popup--show")
}, 3000)

dismiss.addEventListener("click", function () {
    console.log("Click dismis")
    popup.classList.remove("popup--show");
    popup.classList.add("popup--close");
})
shop.addEventListener("click", function () {
    console.log("Click Shopp")
    popup.classList.remove("popup--show");
    popup.classList.add("popup--close");
    alert("Selamat Anda dapat diskon 50%, selamat belajar")
})
var durasi = 31
function main(durasi1, durasi2, durasi3, skip) {

    setTimeout(function () {
        document.getElementById('judul').innerHTML = "PROMO"
    }, durasi1)
    setTimeout(function () {
        document.getElementById('isi').innerHTML = "Anak Muda Jago Ngoding"
        skip()
    }, durasi2)
    setTimeout(function () {
        document.getElementById('promo').innerHTML = "Disini Tempatnya"
    }, durasi3)

}
function showSkip() {
    document.querySelector(".skip-ads").style.opacity = "1";
}
main(3000, 4000, 5000, showSkip)