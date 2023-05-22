

function toggle(element) {
    
    document.getElementById("frontend-container").classList.toggle("invisible")
    document.getElementById("backend-container").classList.toggle("invisible")

    document.getElementById("frontend-tab-button").classList.toggle("activated-tab")
    document.getElementById("backend-tab-button").classList.toggle("activated-tab")
}