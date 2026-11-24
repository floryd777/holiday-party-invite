// Find the elements from our HTML

const envelope = document.getElementById("envelope");
const untie = document.getElementById("untie");

const openingScreen = document.getElementById("opening-screen");
const invitationScreen = document.getElementById("invitation-screen");


// Function that opens the invitation

function openInvitation() {

    // Prevent multiple clicks
    envelope.disabled = true;
    untie.disabled = true;

    // Fade out the opening screen
    openingScreen.classList.add("fade-out");

    // Check the visitor's motion preference
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // Wait for the fade-out to finish
    setTimeout(function () {

        // Hide the opening screen
        openingScreen.hidden = true;

        // Show the invitation
        invitationScreen.hidden = false;

        // Fade in the invitation
        invitationScreen.classList.add("fade-in");

    }, reduceMotion ? 0 : 800);
}


// Listen for clicks

envelope.addEventListener("click", openInvitation);
untie.addEventListener("click", openInvitation);
