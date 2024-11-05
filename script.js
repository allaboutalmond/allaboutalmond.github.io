// nav bar
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 120);
});
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.remove.toggle("bx-x");
  navlist.remove.toggle("active");
};

// เปิดลิ้งค์
function openVideo(url) {
  window.open(url, "_blank");
}

// เอาไว้แก้ navbar กับ footer จะได้ไม่ต้องแก้ทีละไฟล์
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  });


// popup
let currentMediaIndex = 0;
let mediaArray = [];

function openPopup(media) {
    mediaArray = media; // Store the array of media
    currentMediaIndex = 0; // Reset the index
    showMedia(currentMediaIndex);
    document.getElementById("popup").style.display = "flex"; // Open the popup
}

function showMedia(index) {
    const imgElement = document.getElementById("popup-img");
    const videoElement = document.getElementById("popup-video");
    const videoSource = document.getElementById("video-source");
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    // Pause the video if it is playing
    videoElement.pause(); 
    videoElement.currentTime = 0; // Reset video time to start

    // Check if the current media is an image or a video
    if (mediaArray[index].endsWith('.mp4')) {
        imgElement.style.display = "none"; // Hide image
        videoElement.style.display = "block"; // Show video
        videoSource.src = mediaArray[index];
        videoElement.load(); // Load the video
        videoElement.play(); // Automatically play video if desired
    } else {
        imgElement.style.display = "block"; // Show image
        videoElement.style.display = "none"; // Hide video
        imgElement.src = mediaArray[index];
    }

    // Show or hide navigation buttons based on media count and current index
    prevButton.style.display = index === 0 ? "none" : "block"; // Hide previous button for the first media
    nextButton.style.display = index === mediaArray.length - 1 ? "none" : "block"; // Hide next button for the last media
}

function closePopup() {
    const videoElement = document.getElementById("popup-video");
    videoElement.pause(); // Pause the video if playing
    videoElement.currentTime = 0; // Reset video time to start
    document.getElementById("popup").style.display = "none"; // Close the popup
}

function prevMedia() {
    if (currentMediaIndex > 0) {
        currentMediaIndex--;
        showMedia(currentMediaIndex);
    }
}

function nextMedia() {
    if (currentMediaIndex < mediaArray.length - 1) {
        currentMediaIndex++;
        showMedia(currentMediaIndex);
    }
}
