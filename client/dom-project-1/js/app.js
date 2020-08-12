document.querySelector(".modal-close").addEventListener("click", () => {
    document.querySelector(".modal-wrap").classList.remove("modal-shown");
    document.querySelector(".modal-wrap").classList.add("modal-hidden");
});

document.querySelector(".modal-trigger").addEventListener("click", () => {
    document.querySelector(".modal-wrap").classList.remove("modal-hidden");
    document.querySelector(".modal-wrap").classList.add("modal-shown");
});

document.getElementById('egg-number').addEventListener('keyup', e => {
    // console.log(e.target.value.length);
    if (e.target.value.length === 5) {
        if (e.target.value === "39887") {
            alert("You're the winner! Report to Tim at the front desk with your code and receive the grand prize!");
        } else {
            alert("Sorry, your code is invalid.");
            e.target.value = "";
        }
    }
})