// Find all our website elements

const envelope = document.getElementById("envelope");
const untie = document.getElementById("untie");

const openEnvelope = document.getElementById("open-envelope");
const laceCard = document.getElementById("lace-card");

const titleSection = document.getElementById("title-section");
const stationery = document.getElementById("stationery");


// Prevent the animation from running twice

let hasOpened = false;


// Check accessibility preferences

const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


// Helper function for animation timing

function wait(milliseconds) {

    return new Promise(resolve => {

        setTimeout(
            resolve,
            reduceMotion ? 0 : milliseconds
        );

    });

}


// Main envelope opening animation

async function openInvitation() {

    if (hasOpened) return;

    hasOpened = true;

    envelope.disabled = true;
    untie.disabled = true;


    // STEP 1: Hide the instruction

    untie.classList.add("disappear");


    // STEP 2: Transition to the open envelope

    openEnvelope.classList.add("visible");
    envelope.classList.add("disappear");

    await wait(850);

    envelope.hidden = true;
    untie.hidden = true;


    // STEP 3: Slide the lace invitation out

    laceCard.classList.add("emerging");

    await wait(1400);


    // STEP 4: Arrange the stationery

    openEnvelope.classList.add("settled");
    laceCard.classList.add("settled");

    stationery.classList.add("finished");


    // STEP 5: Reveal the holiday title

    await wait(300);

    titleSection.classList.add("visible");


    // STEP 6: Enable the invitation controls

    await wait(1200);

    laceCard.removeAttribute("inert");
    laceCard.setAttribute("aria-hidden", "false");

}

// Listen for clicks

envelope.addEventListener("click", openInvitation);

untie.addEventListener("click", openInvitation);
