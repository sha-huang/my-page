const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc == "images/per1.png") {
        myImage.setAttribute("src", "images/NUS.jpg");
    } else {
        myImage.setAttribute("src", "images/per1.png");
    }
});

document.addEventListener("mousemove", evt => {
    let x = evt.x / innerWidth;
    let y = evt.y / innerHeight;
    let root = document.documentElement;
    root.style.setProperty("--mouse-x", x);
    root.style.setProperty("--mouse-y", y);
});