// ELEMENTS SELECTION
const tableBody = document.querySelector("tbody");
const form = document.querySelector("form");
const id = document.querySelector("#id");
const itemName = document.querySelector("#name");
const price = document.querySelector("#price");
const allFields = document.querySelectorAll(".field");
const formButton = document.querySelector(".submit");
const errorText = document.querySelector(".full");
let itemData = [];
let buttonState = false;

// FUNCTIONS
//////////////////////////////////////////////////////////////

// Reset form field
const reset = function () {
  id.value = itemName.value = price.value = "";
};

// Saving to localStorage
const setLocalStorage = function () {
  localStorage.setItem("itemData", JSON.stringify(itemData));
};

// Display data to table
const renderData = function () {
  // Remove existing data
  tableBody.innerHTML = "";

  // Format data as html elements
  const html = itemData
    .map((item) => {
      return ` <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.price}</td>
        </tr>`;
    })
    .join("");

  // Add data to table
  tableBody.insertAdjacentHTML("beforeend", html);
};

// retrieving from localStorage
const getLocalStorage = function () {
  const data = JSON.parse(localStorage.getItem("itemData"));
  if (!data) return;

  itemData = data;

  // Render the data
  renderData();
};

// Element classes
const classes = function (el, classname, state) {
  if (state) el.classList.add(classname);
  else el.classList.remove(classname);
};

// Add item to table
const addItem = function (e) {
  // Prevent browser reloading
  e.preventDefault();
  if (buttonState) {
    if (id.value && itemName.value && price.value) {
      // Add form data to array
      itemData.push({
        id: id.value.trim(),
        name: itemName.value.trim(),
        price: price.value.trim(),
      });

      // Show data
      renderData();

      // Save to localStorage
      setLocalStorage();

      // Reset form
      reset();

      // hide error messages and prompt
      classes(errorText, "hidden", true);

      // disable button
      classes(formButton, "invalid", true);
      buttonState = false;
    } else {
      // show error message
      classes(errorText, "hidden", false);
    }
  }
};

const eventCheck = function () {
  // enable and disable button
  if (id.value && itemName.value && price.value) {
    classes(formButton, "invalid", false);
    buttonState = true;
  } else {
    classes(formButton, "invalid", true);
    buttonState = false;
  }
};

// IMPLEMENTATION
//////////////////////////////////////////////////////

// Call on load
getLocalStorage();
formButton.addEventListener("click", (e) => addItem(e));
form.addEventListener("submit", (e) => addItem(e));

// Check for keypad clicks
document.querySelector("body").addEventListener("keyup", function (e) {
  eventCheck();
});
