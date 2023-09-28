let title = document.getElementById("title");
let note = document.getElementById("note");
let saveBtn = document.getElementById("save-btn");
let noteContainer = document.getElementById("noteContainer");
let editBtn = document.querySelector(".editBtn");
let deleteBtn = document.querySelectorAll(".removeBtn");

// Function to generate card HTML
function createCardHTML(title, note) {
  return `
    <div class="card mx-2 text-center mb-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${note}</p>
    <div class="d-flex flex-wrap flex-container">
    <button type="button" class="btn btn-outline-warning flex-item editBtn" onclick="editIt(this)"> Edit</button>
      <button type="button" class="btn btn-outline-danger flex-item mx-4 removeBtn" onclick="deleteIt(this)">
        Remove
      </button>
  </div>
  </div>
</div>

  `;
}

// Function to populate notes from local storage
function populateNotesFromLocalStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    let title = localStorage.key(i);
    let note = localStorage.getItem(title);
    noteContainer.innerHTML += createCardHTML(title, note);
  }
}

// Event listener for the save button
saveBtn.addEventListener("click", () => {
  let tText = title.value;
  let nText = note.value;

  if (tText !== "" && nText !== "") {
    localStorage.setItem(tText, nText);
    noteContainer.innerHTML += createCardHTML(tText, nText);
  } else {
    alert("Please fill out the boxes");
  }
});

//Removing the todo
function deleteIt(button) {
  let card = button.closest(".card");
  let titleElement = card.querySelector(".card-title");
  let title = titleElement.textContent;
  localStorage.removeItem(title);
  card.remove();
}

function editIt(button) {
  let card = button.closest(".card");
  let titleElement = card.querySelector(".card-title");
  let textElement = card.querySelector(".card-text");

  let currentTitle = titleElement.textContent;
  let currentText = textElement.textContent;

  let titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.className = "form-control";
  titleInput.value = currentTitle;

  let textInput = document.createElement("input");
  textInput.type = "text";
  textInput.className = "form-control";
  textInput.value = currentText;

  titleElement.innerHTML = "";
  titleElement.appendChild(titleInput);

  textElement.innerHTML = "";
  textElement.appendChild(textInput);

  if (button.classList.contains("editBtn")) {
    button.className = "btn btn-outline-success flex-item saveBtn";
    button.textContent = "Save";
  }

  // Remove the existing event listener
  button.removeEventListener("click", editIt);

  button.addEventListener("click", function () {
    let updatedTitle = titleInput.value;
    let updatedText = textInput.value;

    if (updatedTitle.trim() !== "" && updatedText.trim() !== "") {
      localStorage.removeItem(currentTitle);
      localStorage.setItem(updatedTitle, updatedText);

      titleElement.textContent = updatedTitle;
      textElement.textContent = updatedText;

      button.className = "btn btn-outline-warning flex-item editBtn";
      button.textContent = "Edit";

      // Re-attach the event listener
      button.addEventListener("click", function () {
        editIt(button);
      });
    }
  });
}

// Load existing notes from local storage on page load
populateNotesFromLocalStorage();
