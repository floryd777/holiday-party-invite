
// Find our website elements

const envelope = document.getElementById("envelope");
const untie = document.getElementById("untie");

const openEnvelope = document.getElementById("open-envelope");
const envelopePocket = document.getElementById("envelope-pocket");
const laceCard = document.getElementById("lace-card");

const titleSection = document.getElementById("title-section");
const stationery = document.getElementById("stationery");

let hasOpened = false;


// Accessibility preference

const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


// Animation timing helper

function wait(milliseconds) {
    return new Promise(resolve => {
        setTimeout(
            resolve,
            reduceMotion ? 0 : milliseconds
        );
    });
}


// Main opening animation

async function openInvitation() {

    if (hasOpened) return;

    hasOpened = true;

    envelope.disabled = true;
    untie.disabled = true;


    // Hide the opening instruction

    untie.classList.add("disappear");


    // Reveal the open envelope and front pocket

    openEnvelope.classList.add("visible");
    envelopePocket.classList.add("visible");

    envelope.classList.add("disappear");

    await wait(850);

    envelope.hidden = true;
    untie.hidden = true;


    // Slide the invitation between the two layers

    laceCard.classList.add("emerging");

    await wait(1800);


    // Remove the duplicate front pocket

    envelopePocket.hidden = true;


    // Settle into our final arrangement

    openEnvelope.classList.add("settled");
    laceCard.classList.add("settled");

    stationery.classList.add("finished");


    // Reveal our beautiful holiday title

    await wait(300);

    titleSection.classList.add("visible");


    // Enable invitation controls

    await wait(1500);

    laceCard.removeAttribute("inert");
    laceCard.setAttribute("aria-hidden", "false");

}


// Listen for clicks

envelope.addEventListener("click", openInvitation);
untie.addEventListener("click", openInvitation);
