//your code here
const images = document.querySelectorAll("img");
const reset = document.getElementById("reset");
const verify = document.getElementById("verify");
const para = document.getElementById("para");

let selectedImages = [];

// Create five unique images and one duplicate
let imageClasses = [
    "img1",
    "img2",
    "img3",
    "img4",
    "img5"
];

let duplicate = imageClasses[
    Math.floor(Math.random() * imageClasses.length)
];

imageClasses.push(duplicate);

// Shuffle images randomly
imageClasses.sort(() => Math.random() - 0.5);

// Assign shuffled classes
images.forEach((img, index) => {
    img.className = imageClasses[index];
});

// Image click event
images.forEach((img) => {
    img.addEventListener("click", () => {

        // Don't allow more than two selections
        if (selectedImages.length >= 2) {
            return;
        }

        // Don't allow clicking the same image twice
        if (selectedImages.includes(img)) {
            return;
        }

        selectedImages.push(img);

        img.classList.add("selected");

        // Show reset button
        reset.style.display = "inline-block";

        // Show verify button only after two selections
        if (selectedImages.length === 2) {
            verify.style.display = "inline-block";
        }
    });
});

// Reset button
reset.addEventListener("click", () => {

    selectedImages.forEach((img) => {
        img.classList.remove("selected");
    });

    selectedImages = [];

    reset.style.display = "none";
    verify.style.display = "none";

    para.innerText = "";
});

// Verify button
verify.addEventListener("click", () => {

    if (
        selectedImages[0].classList[0] ===
        selectedImages[1].classList[0]
    ) {
        para.innerText = "You are a human. Congratulations!";
    } else {
        para.innerText = "We can't verify you as a human. You selected the non-identical tiles.";
    }

    verify.style.display = "none";
});