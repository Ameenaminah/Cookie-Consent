// html elements
const mainBtn = document.querySelector("#main-btn");
const modal = document.querySelector("#modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.querySelector("#modal-text");
const declineBtn = document.getElementById("decline-btn");
const modalChoiceBtns = document.getElementById("modal-choice-btns");

//Event Listeners
mainBtn.addEventListener("click", mainBtnFunc);
modalCloseBtn.addEventListener("click", modalCloseBtnFunc);
consentForm.addEventListener("submit", consentFormFunc);
declineBtn.addEventListener("mouseenter", declineBtnFunc);

//EventListeners FUnctions
function mainBtnFunc(e) {
  modal.style.display = "inline";
}

function modalCloseBtnFunc(e) {
  modal.style.display = "none";
}

function consentFormFunc(e) {
  e.preventDefault();
  const consentFormData = new FormData(consentForm);
  const fullName = consentFormData.get("fullName");
  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <img src="images/loading.gif" class="loading">
    <p id="uploadText">
        Uploading your data to the web...
    </p>
  </div>
  `;
  setTimeout(() => {
    document.getElementById("uploadText").textContent = "Almost there...";
  }, 3000);

  setTimeout(() => {
    document.getElementById(
      "modal-inner"
    ).innerHTML = `<h2>Hey <span class="modal-display-name">${fullName}</span>, Loser😜! </h2>
    <p>I only took up your time. There is no such thing as free money. Do your best to work.</p>
    <div class="tongueout-gif">
        <img src="https://media0.giphy.com/media/1rL3hRI9WdY1vDxtW5/giphy.gif?cid=ecf05e47jrwp3atdumvskg55w4oe2hbzelq7u9zku07qhbym&rid=giphy.gif&ct=g">
    </div>
    `;
    modalCloseBtn.disabled = false;
  }, 6000);
}

function declineBtnFunc() {
  modalChoiceBtns.classList.toggle("modal-choice-btns-reverse");
}
