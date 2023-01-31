import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", throttle(onFormInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

localStorageSaveData();

function localStorageSaveData() {
  let savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    email.value = savedData.email;
    message.value = savedData.message;
    }
}

function getStorageData() {
    const data = localStorage.getItem(STORAGE_KEY);
    const savedData = JSON.parse(data);
    if (savedData) {
 savedData.email ? email.value = savedData.email : email.value = ''
 savedData.message ? message.value = savedData.message : message.value = ''
}; 
};

getStorageData();