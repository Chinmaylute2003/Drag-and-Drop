
const notification = document.querySelector('.success');
const imageBoxes = document.querySelectorAll(".imgBox");
const rightBox = document.querySelectorAll('.second-container .col');
const rightContainer = document.querySelector(".second-container");
const btn = document.querySelector('.reset-btn');

let selected = '';


btn.addEventListener("click", () => {
    location.reload();
})


rightContainer.addEventListener("dragover", () => {
    rightContainer.style.background = "lightgrey";
})


imageBoxes.forEach((image) => {
    image.addEventListener('dragstart', (e) => {
        selected = e.target;
        console.log(selected);

        e.target.classList += " hold";
        setTimeout(() => {
            e.target.classList += ' hide';
            console.log('trigged')
        }, 0);


    });

    // To remove all conditional classes as soon as dragging is complete.
    image.addEventListener('dragend', (e) => {
        e.target.classList.remove("hide");
        e.target.classList.remove("hold");
        rightContainer.style.background = "#D4ADFC";
    });
});

rightBox.forEach((box) => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
        console.log("dragover has been triggered");
    });



    box.addEventListener("drop", (e) => {
        if (box.hasChildNodes()) return;
        selected.className = "imgBox";
        e.target.append(selected);
        selected = null;

        notification.classList += " show";
        setTimeout(() => {
            notification.className = "success";
        }, 1000);

    })
});
