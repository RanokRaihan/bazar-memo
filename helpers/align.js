if (!localStorage.getItem("align")) {
    localStorage.setItem("align", "left");
}

if (localStorage.getItem("align") === "right") {
    console.log("enterd");
    $(".add-button").style.left = "initial";
    $(".add-button").style.right = "30px";
    $(".memo-option").style.left = "initial";
    $(".memo-option").style.right = "30px";
    $(".input-box").style.left = "initial";
    $(".input-box").style.right = "30px";
}
