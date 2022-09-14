const post = document.getElementById("dd1");
const reels = document.getElementById("dd2");
const video = document.getElementById("dd3");
const tagged = document.getElementById("dd4");

const headTags = document.querySelectorAll(".c-line");

const searchClear = document.querySelector(".c-button");
const searchInput = document.querySelector(".s-input");



searchClear.addEventListener('click', () => {
    searchInput.value = "";
})

searchInput.addEventListener('focus', () => {
    searchClear.style.display = "flex"
})

searchInput.addEventListener('focusout', () => {
    setTimeout(() => {
        searchClear.style.display = "none"
    },10)
})



post.addEventListener('change', () => {
    if (post.checked = true) {
        headTags[0].classList.add("checked")
        headTags[1].classList.remove("checked")
        headTags[2].classList.remove("checked")
        headTags[3].classList.remove("checked")
    }

})
reels.addEventListener('change', () => {
    if (reels.checked = true) {
        headTags[1].classList.add("checked")
        headTags[0].classList.remove("checked")
        headTags[2].classList.remove("checked")
        headTags[3].classList.remove("checked")
    }

})
video.addEventListener('change', () => {
    if (video.checked = true) {
        headTags[2].classList.add("checked")
        headTags[0].classList.remove("checked")
        headTags[1].classList.remove("checked")
        headTags[3].classList.remove("checked")
    }

})
tagged.addEventListener('change', () => {
    if (tagged.checked = true) {
        headTags[3].classList.add("checked")
        headTags[0].classList.remove("checked")
        headTags[1].classList.remove("checked")
        headTags[2].classList.remove("checked")
    }

})
