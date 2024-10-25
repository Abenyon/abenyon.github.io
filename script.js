const imagePaths = [
    "alex_benyon_A_striking_image_related_to_astronomy_that_could__55b329d9-3450-4716-8ee4-a2beaf4ef6a5_3.png",
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
