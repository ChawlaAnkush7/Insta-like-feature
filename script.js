let instaStory = document.querySelector(".insta-story-card")
let likeIcon = document.querySelector(".like-btn")
let count = document.querySelector(".count")
let likeValue = 0;
likeValue = localStorage.getItem("data");

count.innerText = likeValue;

instaStory.addEventListener("dblclick", () => {
    likeIcon.style.transform = "translate(-50%, -50%) scale(1.3)"
    likeIcon.style.opacity = "1"
    likeValue++;
    count.innerText = likeValue;

    setTimeout(() => {
        likeIcon.style.transform = "translate(-50%, -50%) scale(0.4)"

        likeIcon.style.opacity = "0"

    }, 1000)
    localStorage.setItem("data", likeValue);

})
