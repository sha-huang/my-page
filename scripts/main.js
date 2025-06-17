const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc == "images/per1.png") {
        myImage.setAttribute("src", "images/NUS.jpg");
    } else {
        myImage.setAttribute("src", "images/per1.png");
    }
});