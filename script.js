const imagePaths = [
    "https://github.com/Abenyon/abenyon.github.io/blob/main/alex_benyon_a_striking_image_related_to_arts_and_culture_that_be09daf1-e8ef-4780-a86e-10a61f9e9a30_0.png",
    "https://raw.githubusercontent.com/username/repository-name/main/path-to-image/image2.jpg",
    "https://raw.githubusercontent.com/username/repository-name/main/path-to-image/image3.jpg",
    "https://raw.githubusercontent.com/username/repository-name/main/path-to-image/image4.jpg",
    "https://raw.githubusercontent.com/username/repository-name/main/path-to-image/image5.jpg"
];

function setImage(circleId) {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    const randomImagePath = imagePaths[randomIndex];
    document.getElementById(circleId).style.backgroundImage = `url(${randomImagePath})`;
}

function rotateImages() {
    setInterval(() => {
        setImage('circle1');
        setImage('circle2');
        setImage('circle3');
        setImage('circle4');
        setImage('circle5');
    }, 2000);
}

rotateImages();
