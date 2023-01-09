let bars = document.querySelector(".fa-bars");
let circleX = document.querySelector(".fa-circle-xmark");
let toggle = document.querySelector(".toggle");
let toggle2 = document.querySelector(".toggle2");
let navigation = document.querySelector(".navigation");
let navigation2 = document.querySelector(".navigation2");
let earlybirds = document.querySelector(".fa-earlybirds");
let navigation1 = document.querySelector(".navigation1");

// navs
toggle.addEventListener("click", function () {
    circleX.classList.toggle("none");
    bars.classList.toggle("none");
    navigation.classList.toggle("showLinks1");
});

toggle2.addEventListener("click", function () {
    navigation1.classList.toggle("showLinks2");
    navigation1.classList.toggle("theOverflowY");
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
let girlsClear = document.querySelector(".clearGenderGirls");
let boysClear = document.querySelector(".clearGenderBoys");
let historyClear = document.querySelector(".clearHistory");



window.addEventListener("DOMContentLoaded", function () {
    displayHistory(getLocalStorageHistory());
    displayGirls(getLocalStorageGirls());
    displayBoys(getLocalStorageBoys());

    if(getLocalStorageBoys().length>0 && getLocalStorageBoys().length <9){   
        boysLength.innerHTML = "0"+ getLocalStorageBoys().length;
    }else{
        boysLength.innerHTML = getLocalStorageBoys().length;
    }

    if(getLocalStorageGirls().length>0 && getLocalStorageGirls().length <9){
        girlsLength.innerHTML = "0" + getLocalStorageGirls().length;
    }else{
        girlsLength.innerHTML = getLocalStorageGirls().length;
    }

    // check for equality 2
    checkForEquality2(getLocalStorageBoys().length,getLocalStorageGirls().length);

    visibility(getLocalStorageBoys(),boysClear);
    visibility(getLocalStorageGirls(),girlsClear);
    visibility(getLocalStorageHistory(),historyClear);

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

//  ******* Gender Btns funcs *********

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

    // check if name exist
    if (getLocalStorageBoys().includes(caps(textField.value))) {
        setTimeout(function () {
            showStatus.style.visibility = "visible";
            showStatus.innerHTML = "Name Exist";
        }, 0);

        setTimeout(function () {
            showStatus.style.visibility = "hidden";
        }, 3000);
        return;

    };

    addToLocalStorageBoys(caps(textField.value));

    displayBoys(getLocalStorageBoys());
    // console.log(boys);
    genderBtns.classList.remove("showGenderBtns");
    visibility(getLocalStorageBoys(),boysClear);

    // check if the two arrays are equal
    checkForEquality(getLocalStorageBoys().length,getLocalStorageGirls().length);

    textField.value = "";
    textField.focus();

    if(getLocalStorageBoys().length>0 && getLocalStorageBoys().length <9){   
        boysLength.innerHTML = "0"+ getLocalStorageBoys().length;
    }else{
        boysLength.innerHTML = getLocalStorageBoys().length;
    }
    
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


    // check if name exist
    if (getLocalStorageGirls().includes(caps(textField.value))) {
        setTimeout(function () {
            showStatus.style.visibility = "visible";
            showStatus.innerHTML = "Name Exist";
        }, 0);

        setTimeout(function () {
            showStatus.style.visibility = "hidden";
        }, 3000);
        return;

    };

    
    addToLocalStorageGirls(caps(textField.value));
    displayGirls(getLocalStorageGirls());
    // console.log(boys);
    genderBtns.classList.remove("showGenderBtns");
    visibility(getLocalStorageGirls(),girlsClear);

    // check if the two arrays are equal
    checkForEquality(getLocalStorageBoys().length,getLocalStorageGirls().length);

    textField.value = "";
    textField.focus();

    if(getLocalStorageGirls().length>0 && getLocalStorageGirls().length <9){
        girlsLength.innerHTML = "0" + getLocalStorageGirls().length;
    }else{
        girlsLength.innerHTML = getLocalStorageGirls().length;
    }
// practicing tenary operator
// getLocalStorageGirls().length <9? girlsLength.innerHTML = "0" + getLocalStorageGirls().length:girlsLength.innerHTML = getLocalStorageGirls().length;
   
});



// **** display functions and Match Fucns*****

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
    deleteBoysBtns.forEach(function(deleteBoysBtn){
        deleteBoysBtn.addEventListener("click",function(e){
            // console.log(e.currentTarget);
            let deleteItem = e.currentTarget.parentElement.parentElement.children[0].children[0].innerHTML;
            let item = getLocalStorageBoys();
            
            item.splice(item.indexOf(deleteItem),1);
            localStorage.setItem("boys",JSON.stringify(item));
            displayBoys(item);
       

        //  check for equality
        checkForEquality(getLocalStorageBoys().length,getLocalStorageGirls().length);

        if(item.length>0 && item.length <9){   
            boysLength.innerHTML = "0"+ item.length;
        }else{
            boysLength.innerHTML = item.length;
        }

       
        visibility(item,boysClear);
});
});
        
    };

 

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
    deleteGirlsBtns.forEach(function(deleteGirlsBtn){
        deleteGirlsBtn.addEventListener("click",function(e){
            // console.log(e.currentTarget);
            let deleteItem = e.currentTarget.parentElement.parentElement.children[0].children[0].innerHTML;
            let item2 = getLocalStorageGirls(); 
            
            item2.splice(item2.indexOf(deleteItem),1);
            localStorage.setItem("girls",JSON.stringify(item2));
            displayGirls(item2);

           //  check for equality 
           checkForEquality(getLocalStorageBoys().length,getLocalStorageGirls().length);

            if(item2.length>0 && item2.length <9){   
                girlsLength.innerHTML = "0"+ item2.length;
            }else{
                girlsLength.innerHTML = item2.length;
            }

             
            visibility(item2,girlsClear);
 });
      
    });
}



// Match Couples

matchMembers.addEventListener("click", function () {


    let item = getLocalStorageBoys();
    let item2 = getLocalStorageGirls();

    // chitem
    if (item.length === 1 && item2.length === 1) {

        matchMembers.classList.remove("showMatchMembers");
        addNames.classList.add("shiftAdd");
        addNames.classList.remove("shiftAdd");
        bigBubbles.classList.add("bigBubblesMargin");
    }

   
    displayCurrentMatchUp.innerHTML = `${item.splice(random(item), 1)} and ${item2.splice(random(item2), 1)} will go to the prom together`;
   
    displayCurrentMatchUp.style.color = " #141850";
   
    let extra = displayCurrentMatchUp.innerHTML;
    addToLocalStorageHistory(extra);
   
    displayHistory(getLocalStorageHistory());
    displayBoys(item);
    displayGirls(item2);
    if(item.length>0 && item.length <9){   
        boysLength.innerHTML = "0"+ item.length;
    }else{
        boysLength.innerHTML = item.length;
    }
    
    if(item2.length>0 && item2.length <9){   
        girlsLength.innerHTML = "0"+ item2.length;
    }else{
        girlsLength.innerHTML = item2.length;
    }
    localStorage.setItem("boys",JSON.stringify(item));
    localStorage.setItem("girls",JSON.stringify(item2));
    visibility(getLocalStorageHistory(),historyClear);
    visibility(getLocalStorageGirls(),girlsClear);
    visibility(getLocalStorageBoys(),boysClear);
   
});

// history display fuc
function displayHistory(array) {
    let history = array.map(function (item) {
        return `<li>${item}</li>`;
    });

    history = history.join(" ");
    displayMatchUpHistory.innerHTML = history;
}



// ****** Local Storage  ********

// storage fucs

// add to local storage boys

function addToLocalStorageBoys(value){
    const boysList = value;
    let items = getLocalStorageBoys();
    items.push(boysList);
    localStorage.setItem("boys",JSON.stringify(items));
}

function removeFromLocalStorageBoys(value){
   
}

function getLocalStorageBoys(){
     if(localStorage.getItem("boys")){
        return JSON.parse(localStorage.getItem("boys"));
    }else{
        return [];
    }
    
}

// add to local storage girls

function addToLocalStorageGirls(value){
    const girlsList = value;
    let items = getLocalStorageGirls(); 
    items.push(girlsList);
    localStorage.setItem("girls",JSON.stringify(items));
}

function getLocalStorageGirls(){
    if(localStorage.getItem("girls")){
        return JSON.parse(localStorage.getItem("girls"));
    }else{
        return [];
    }
}

// add to local storage history

function addToLocalStorageHistory(value){
    let historyList = value;
    let item = getLocalStorageHistory();
    item.push(historyList);
    localStorage.setItem("history",JSON.stringify(item));
}


function getLocalStorageHistory(){
    if(localStorage.getItem("history")){
        return JSON.parse(localStorage.getItem("history"));
    }else{
        return [];
    }

}





// ****Event Listeners******

// events for btns

boysClear.addEventListener("click",function(){
    localStorage.removeItem("boys");
    displayBoys(getLocalStorageBoys());
    boysLength.innerHTML = getLocalStorageBoys().length;
    checkForEquality(getLocalStorageBoys().length,getLocalStorageGirls().length);
    boysClear.style.visibility = "hidden";

});

girlsClear.addEventListener("click",function(){
    localStorage.removeItem("girls");
    displayGirls(getLocalStorageGirls());
    girlsLength.innerHTML = getLocalStorageGirls().length;
    checkForEquality(getLocalStorageBoys().length,getLocalStorageGirls().length);
    girlsClear.style.visibility = "hidden";
});

historyClear.addEventListener("click",function(){
    localStorage.removeItem("history");
    displayHistory(getLocalStorageHistory());
    historyClear.style.visibility = "hidden";
});

// ***** Functions *******

// random fuc
function random(array) {
    return Math.floor(Math.random() * array.length);
}

//function to change string to caps

function caps(string) {
    // var string = "quincy";
    return string[0].toUpperCase() + string.slice(1);
}

caps("eel");

// visibility for btns
function visibility(value,btn){
    if(value.length > 0){
        btn.style.visibility = "visible";
    }else{
        btn.style.visibility = "hidden";
    } 
}

// check for equality func
function checkForEquality(value1,value2){
    //  check for equality
    if (value1 === value2 && value1 > 0 && value2) {
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
}

// check for equality func 2
function checkForEquality2(value1,value2){
    if (value1 === value2 && value1 > 0 && value2) {

        matchMembers.classList.add("showMatchMembers");
        addNames.classList.add("shiftAdd");
    } else {

        matchMembers.classList.remove("showMatchMembers");
        addNames.classList.remove("shiftAdd");
    }
}