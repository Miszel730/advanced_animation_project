"use strict"

let elementToPaint;

let phoneAcc = {
    hasCardHolder: false,
    hasPopsocket: false,
    cardHolder1: false,
    cardHolder2: false,
    cardHolder3: false,
    popsocket1: false,
    popsocket2: false,
    popsocket3: false,
    keychain1: false,
    keychain2: false
}

window.addEventListener("DOMContentLoaded", init);

function init() {
  loadSVG();
}

function loadSVG() {
    console.log("loadSVG");
    fetch("svg/phone-conf-v2.svg")
      .then((response) => response.text())
      .then((phone) => {
        document.querySelector("#cover_svg").innerHTML = phone;
      })
      .then(addInteractivity)
}

function addInteractivity() {
    document.querySelectorAll(".g-interactive").forEach((phoneElement) => {
        phoneElement.addEventListener("click", clickOn);
        phoneElement.addEventListener("mouseover", mouseOver);
        phoneElement.addEventListener("mouseout", mouseOut);
    });

    document.querySelectorAll(".c-field").forEach((colorOption) => {
        colorOption.addEventListener("click", chooseColor);
    });

    document.querySelectorAll(".phoneAcc").forEach((phoneAccessory) =>
    phoneAccessory.addEventListener("click", toggleFeatures));
};

function clickOn() {
    console.log("clicked on")
    elementToPaint = this;
    this.style.fill = "grey";
}

function mouseOver() {
    this.style.stroke = "#b9faf8";
    this.style.cursor = "pointer";
}

function mouseOut() {
    this.style.stroke = "none";
}

function chooseColor() {
    if (elementToPaint != undefined) {
      elementToPaint.style.fill = this.getAttribute("fill");
    }
}

function toggleFeatures(event) {
    const target = event.currentTarget;
    const feature = target.dataset.feature;
  
    phoneAcc[feature] = !phoneAcc[feature]
  
    if (phoneAcc[feature] == true) {

        if (feature == 'Cardholder1' || feature == 'Cardholder2' || feature == 'Cardholder3') {
            hideCardHolders();
            phoneAcc.hasCardHolder = true;

            if (phoneAcc.hasPopsocket === true) {
                hidePopsockets();
            }

        } else if (feature == 'Popsocket1' || feature == 'Popsocket2' || feature == 'Popsocket3') {
            hidePopsockets();
            phoneAcc.hasPopsocket = true;
            console.log(phoneAcc.hasPopsocket)

            if (phoneAcc.hasCardHolder === true) {
                hideCardHolders();
            }
        }
        
        target.classList.add("chosen");
        document.querySelector(`#cover_svg #${feature}`).classList.remove("hide");

    } else {
      target.classList.remove("chosen");
      document.querySelector(`#cover_svg #${feature}`).classList.add("hide");
    }
}

function hidePopsockets() {
    phoneAcc.Popsocket1 = false;
    phoneAcc.Popsocket2 = false;
    phoneAcc.Popsocket3 = false;

    document.querySelector(`#cover_svg #Popsocket1`).classList.add("hide");
    document.querySelector(`#cover_svg #Popsocket2`).classList.add("hide");
    document.querySelector(`#cover_svg #Popsocket3`).classList.add("hide");
    document.querySelectorAll("#popsockets img").forEach((img) => img.classList.remove("chosen"));

    phoneAcc.hasPopsocket = false;
}

function hideCardHolders() {
    phoneAcc.cardHolder1 = false;
    phoneAcc.cardHolder2 = false;
    phoneAcc.cardHolder3 = false;

    document.querySelector(`#cover_svg #Cardholder1`).classList.add("hide");
    document.querySelector(`#cover_svg #Cardholder2`).classList.add("hide");
    document.querySelector(`#cover_svg #Cardholder3`).classList.add("hide");
    document.querySelectorAll("#card_holder img").forEach((img) => img.classList.remove("chosen"));

    phoneAcc.hasCardHolder = false;
} 

  
