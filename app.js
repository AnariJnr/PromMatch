let bars = document.querySelector(".fa-bars");
let circleX = document.querySelector(".fa-circle-xmark");
let toggle = document.querySelector(".toggle");
let toggle2 = document.querySelector(".toggle2");
let navigation = document.querySelector(".navigation");
let navigation2 = document.querySelector(".navigation2");
let earlybirds = document.querySelector(".fa-earlybirds");


toggle.addEventListener("click", function () {
    circleX.classList.toggle("none");
    bars.classList.toggle("none");
    navigation.classList.toggle("showLinks1");
});

toggle2.addEventListener("click", function () {
    navigation2.classList.toggle("showLinks2");
    navigation2.classList.toggle("theOverflowY");
});

// main

let textField = document.querySelector(".textField");
let addNames = document.querySelector(".AddNames");
let matchMembers = document.querySelector(".MatchMembers");
let genderBtns = document.querySelector(".GenderBtns");
let maleGenderBtn = document.querySelector(".Male");
let femaleGenderBtn = document.querySelector(".Female");
let displayCurrentMatchUp = document.querySelector(".showStatus"); //display current matchup
let displayMatchUpHistory = document.querySelector(".navigation2"); //displayMatchUpHistory just lis
let boysList = document.querySelector(".displayBoysDiv"); // just Ps
let girlsList = document.querySelector(".displayGirlsDiv"); //just Ps
let boysLength = document.querySelector(".boysLength");
let girlsLength = document.querySelector(".girlsLength");
let showStatus = document.querySelector(".showStatus2");
let bigBubbles = document.querySelector(".bigBubbles");


const boys = ["AJ", "Inakwu", "OT Sama", "iam.ryuzaki"];

const girls = ["Hinata", "Rukia", "Rias Senpai", "Nami"];

window.addEventListener("DOMContentLoaded", function () {
    displayGirls(girls);
    displayBoys(boys);
    boysLength.innerHTML = boys.length;
    girlsLength.innerHTML = girls.length;

    // check for equality 
    if (boys.length === girls.length) {

        matchMembers.classList.add("showMatchMembers");
        addNames.classList.add("shiftAdd");
    } else {

        matchMembers.classList.remove("showMatchMembers");
        addNames.classList.remove("shiftAdd");
    }

});

// test
function timeStatus() {
    setTimeout(function () {
        showStatus.style.visibility = "visible";
    }, 0);

    setTimeout(function () {
        showStatus.style.visibility = "hidden";
    }, 3000);
};

// timeStatus();

// test end 

// display gender btns
addNames.addEventListener("click", function () {
    genderBtns.classList.toggle("showGenderBtns");
});

// boys gender btn
maleGenderBtn.addEventListener("click", function () {

    // check if field empty
    if (textField.value === "") {
        setTimeout(function () {
            showStatus.style.visibility = "visible";
            showStatus.innerHTML = "Enter a name";
        }, 0);

        setTimeout(function () {
            showStatus.style.visibility = "hidden";
        }, 3000);
        return;
    }

    boys.push(textField.value);

    displayBoys(boys);
    // console.log(boys);
    genderBtns.classList.remove("showGenderBtns");


    // check if the two arrays are equal
    if (boys.length === girls.length) {
        setTimeout(function () {
            showStatus.innerHTML = `Everyone will have a prom partner`;
            showStatus.style.visibility = "visible";
        }, 0);

        setTimeout(function () {
            showStatus.style.visibility = "hidden";
        }, 3000);

        matchMembers.classList.add("showMatchMembers");
        addNames.classList.add("shiftAdd");
        bigBubbles.classList.remove("bigBubblesMargin");
    } else {
        setTimeout(function () {
            showStatus.innerHTML = `Not everyone will have a prom partner`;
            showStatus.style.visibility = "visible";
        }, 0);

        setTimeout(function () {
            showStatus.style.visibility = "hidden";
        }, 3000);
        matchMembers.classList.remove("showMatchMembers");
        addNames.classList.remove("shiftAdd");
        bigBubbles.classList.add("bigBubblesMargin");
    }



    textField.value = "";
    textField.focus();
    boysLength.innerHTML = boys.length;
});

// girls gender btn
femaleGenderBtn.addEventListener("click", function () {

    // check if field empty
    if (textField.value === "") {
        setTimeout(function () {
            showStatus.style.visibility = "visible";
            showStatus.innerHTML = "Enter a name";
        }, 0);

        setTimeout(function () {
            showStatus.style.visibility = "hidden";
        }, 3000);
        return;
    }

    girls.push(textField.value);
    displayGirls(girls);
    // console.log(boys);
    genderBtns.classList.remove("showGenderBtns");

    // check if the two arrays are equal
    if (boys.length === girls.length) {
        setTimeout(function () {
            showStatus.innerHTML = `Everyone will have a prom partner`;
            showStatus.style.visibility = "visible";
        }, 0);

        setTimeout(function () {
            showStatus.style.visibility = "hidden";
        }, 3000);

        matchMembers.classList.add("showMatchMembers");
        addNames.classList.add("shiftAdd");
        bigBubbles.classList.remove("bigBubblesMargin");
    } else {
        setTimeout(function () {
            showStatus.innerHTML = `Not everyone will have a prom partner`;
            showStatus.style.visibility = "visible";
        }, 0);

        setTimeout(function () {
            showStatus.style.visibility = "hidden";
        }, 3000);
        matchMembers.classList.remove("showMatchMembers");
        addNames.classList.remove("shiftAdd");
        bigBubbles.classList.add("bigBubblesMargin");
    }

    textField.value = "";
    textField.focus();
    girlsLength.innerHTML = girls.length;
});





// Boys display fuc

function displayBoys(array) {
    let displayTheBoys = array.map(function (item) {
        return `<div class="boysContent">
        <p><span>${item}</span> <i class="fa-solid fa-trash DeleteBtnBoys"></i></p>    
         </div>`;

    });
    displayTheBoys = displayTheBoys.join(" ");
    boysList.innerHTML = displayTheBoys;

    let deleteBoysBtns = document.querySelectorAll(".DeleteBtnBoys");

    // delete fuc
    deleteBoysBtns.forEach(function (deleteBoysBtn) {
        deleteBoysBtn.addEventListener("click", function (e) {
            let deleteItem = e.currentTarget.parentElement.parentElement.children[0].children[0].innerHTML;
            console.log(deleteItem);
            console.log(boys.indexOf(deleteItem));
            let index = boys.indexOf(deleteItem);
            boys.splice(index, 1);
            displayBoys(boys);
            boysLength.innerHTML = boys.length;

            //check for equality
            if (boys.length === girls.length) {
                setTimeout(function () {
                    showStatus.innerHTML = `Everyone will have a prom partner`;
                    showStatus.style.visibility = "visible";
                }, 0);

                setTimeout(function () {
                    showStatus.style.visibility = "hidden";
                }, 3000);
                matchMembers.classList.add("showMatchMembers");
                addNames.classList.add("shiftAdd");
                bigBubbles.classList.remove("bigBubblesMargin");
            } else {
                setTimeout(function () {
                    showStatus.innerHTML = `Not everyone will have a prom partner`;
                    showStatus.style.visibility = "visible";
                }, 0);

                setTimeout(function () {
                    showStatus.style.visibility = "hidden";
                }, 3000);
                matchMembers.classList.remove("showMatchMembers");
                addNames.classList.remove("shiftAdd");
                bigBubbles.classList.add("bigBubblesMargin");
            }

        });
    });
}

// Girls display fuc
function displayGirls(array) {
    let displayFemales = array.map(function (item) {
        return ` <div class="girlsContent">
        <p><span>${item}</span> <i class="fa-solid fa-trash DeleteGirlsBtn"></i></p>   
        </div> `;

    });
    displayFemales = displayFemales.join(" ");
    girlsList.innerHTML = displayFemales;

    let deleteGirlsBtns = document.querySelectorAll(".DeleteGirlsBtn");

    // delete fuc
    deleteGirlsBtns.forEach(function (deleteGirlsBtn) {
        deleteGirlsBtn.addEventListener("click", function (e) {
            let deleteItem = e.currentTarget.parentElement.parentElement.children[0].children[0].innerHTML;
            //console.log(boys.indexOf(deleteItem));
            let index = girls.indexOf(deleteItem);
            girls.splice(index, 1);
            displayGirls(girls);
            // update number
            girlsLength.innerHTML = girls.length;
            // check for equality 
            if (boys.length === girls.length) {
                setTimeout(function () {
                    showStatus.innerHTML = `Everyone will have a prom partner`;
                    showStatus.style.visibility = "visible";
                }, 0);

                setTimeout(function () {
                    showStatus.style.visibility = "hidden";
                }, 3000);
                matchMembers.classList.add("showMatchMembers");
                addNames.classList.add("shiftAdd");
                bigBubbles.classList.remove("bigBubblesMargin");
            } else {
                setTimeout(function () {
                    showStatus.innerHTML = `Not everyone will have a prom partner`;
                    showStatus.style.visibility = "visible";
                }, 0);

                setTimeout(function () {
                    showStatus.style.visibility = "hidden";
                }, 3000);
                matchMembers.classList.remove("showMatchMembers");
                addNames.classList.remove("shiftAdd");
                bigBubbles.classList.add("bigBubblesMargin");
            }

        });
    });
}

// random fuc
function random(array) {
    return Math.floor(Math.random() * array.length);
}

// Match Couples

let splicedArray = [];
matchMembers.addEventListener("click", function () {

    // check if array is empty
    if (boys.length === 1 && girls.length === 1) {

        matchMembers.classList.remove("showMatchMembers");
        addNames.classList.add("shiftAdd");
        addNames.classList.remove("shiftAdd");
        bigBubbles.classList.add("bigBubblesMargin");
    }

    displayCurrentMatchUp.innerHTML = `${boys.splice(random(boys), 1)} and ${girls.splice(random(girls), 1)} will go to the prom together`;
    displayCurrentMatchUp.style.color = " #141850";

    let extra = displayCurrentMatchUp.innerHTML;
    splicedArray.push(extra);

    displayHistory(splicedArray);
    displayBoys(boys);
    displayGirls(girls);
    boysLength.innerHTML = boys.length;
    girlsLength.innerHTML = girls.length;
});

// history display fuc
function displayHistory(array) {
    let history = array.map(function (item) {
        return `<li>${item}</li>`;
    });

    history = history.join(" ");
    displayMatchUpHistory.innerHTML = history;
}





