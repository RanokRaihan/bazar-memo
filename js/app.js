//init localStrorage
if (!localStorage.getItem("memo")) {
    localStorage.setItem("memo", "[]");
}
// initial render of list
renderMemo();

//import dom
const numKey = document.querySelectorAll(".num");
const display = $(".display");
const inputBox = $(".input-box");
const addButton = $(".add-button");
const memoItems = $(".memo-items");

// init of list object
let singleItem = {
    title: "",
    price: "",
};
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
numKey.forEach((key) => {
    key.addEventListener("click", (e) => {
        const num = e.target.innerText;
        display.value = $(".display").value + num.trim();
    });
});

// $(".dot").addEventListener("click", (e) => {
//     if (display.value.indexOf(".") === -1) {
//         if (display.value === "") {
//             display.value = "0.";
//         } else {
//             display.value = display.value + ".";
//         }
//     } else {
//         return false;
//     }
// });

// window.addEventListener("click", (e) => {
//     console.log(e.target);
//     if (!inputBox.contains(e.target)) {
//         if (!$(".memo-option").contains(e.target)) {
//             inputBox.style.display = "none";
//             $(".add-button").style.display = "block";
//         }
//     }
//     if (!$(".memo-option").contains(e.target)) {
//         if (!addButton.contains(e.target)) {
//             $(".memo-option").style.display = "none";
//             $(".add-button").style.display = "block";
//         }
//     }
// });

//hide content
$(".container").addEventListener("click", (e) => {
    if (e.target.classList[0] === "container") {
        inputBox.style.display = "none";
        $(".memo-option").style.display = "none";
        $(".add-button").style.display = "block";
    }
});
$(".add-button").addEventListener("click", (event) => {
    addButton.style.display = "none";
    memoItems.innerHTML = "";
    items.forEach((item) => {
        const LI = document.createElement("LI");
        LI.setAttribute("class", "memo-item");
        LI.setAttribute("onclick", "selectItem(event)");
        LI.textContent = item;
        memoItems.appendChild(LI);
    });
    $(".memo-option").style.display = "block";
});

//select item functionality
const selectItem = (e) => {
    const selectedItem = e.target.innerText;
    singleItem.title = selectedItem;
    $(".memo-option").style.display = "none";
    // addButton.style.display = "none";
    display.setAttribute("placeHolder", "Enter Price");
    inputBox.style.display = "flex";
};

//clear button functionality
// $(".clear").addEventListener("click", () => {
//     display.value = "";
// });

//delete button functionality
$(".delete").addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

// submit button functiionality
$(".submit").addEventListener("click", () => {
    let price = display.value;
    switch (price) {
        case "":
        case ".":
            price = "00";
            break;
        default:
            price;
    }
    singleItem.price = price;
    updateLocal("memo", singleItem);
    singleItem = {
        title: "",
        price: "",
    };
    renderMemo();
    display.value = "";
    inputBox.style.display = "none";
    addButton.style.display = "block";
});

//clear memo button
$(".clear-memo").addEventListener("click", () => {
    localStorage.setItem("memo", "[]");
    renderMemo();
});
