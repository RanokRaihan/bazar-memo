renderAllItem(); //helper.js
const alignButton = document.querySelectorAll(".align-button");
const buttonSelector = () => {
  const currentButton = localStorage.getItem("align");
  if (currentButton === "left") {
    $(".left-button").classList.add("active");
    $(".right-button").classList.remove("active");
  } else {
    $(".left-button").classList.remove("active");
    $(".right-button").classList.add("active");
  }
};

buttonSelector();
alignButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    localStorage.setItem("align", e.target.dataset.align);
    buttonSelector();
  });
});

const deleteItem = (event) => {
  event.stopPropagation();
  const oldItems = fetchLocal("all-item");
  const index = oldItems.indexOf(event.target.dataset.itemname);
  oldItems.splice(index, 1);

  setLocal("all-item", oldItems);
  renderAllItem();
};

$(".reset-list").addEventListener("click", () => {
  const items = [
    "আলু",
    "মরিচ",
    "পেয়াজ",
    "রসুন",
    "আদা",
    "ফুলকপি",
    "পাতাকপি",
    "শিম",
    "টমেটো",
    "বেগুন",
    "লালশাক",
    "পালংশাক",
    "মিষ্টি কুমড়া",
    "লাউ",
    "কলা",
    "লেবু",
    "শশা",
    "মাছ",
    "মুরগি",
    "গরুর মাংস",
  ];
  setLocal("all-item", items);
  renderAllItem();
});
$(".clear-list").addEventListener("click", () => {
  setLocal("all-item", []);
  renderAllItem();
});

$(".add-new-button").addEventListener("click", () => {
  const newItem = $(".add-input").value;
  updateLocal("all-item", newItem);
  $(".add-input").value = "";
  $(".add-input").focus();
  renderAllItem();
});

$(".home").addEventListener("click", () => {
  window.location.href = "/";
});
