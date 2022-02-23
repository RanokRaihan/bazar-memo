const renderMemo = () => {
    const memos = fetchLocal("memo");
    if (memos.length) {
        // show memo
        $(".memo").style.display = "block";
        // remove previous
        $(".table-body").innerHTML = "";
        //render memo
        memos.forEach((memoItem) => {
            const TR = document.createElement("TR");
            TR.innerHTML = `<td>${memoItem.title}</td>
                        <td> -- </td>
                        <td>${memoItem.price}</td>`;
            $(".table-body").appendChild(TR);
        });
    } else {
        $(".memo").style.display = "none";
    }
};

const renderAllItem = () => {
    const allItem = fetchLocal("all-item");
    $(".all-list-items").innerHTML = "";
    allItem.forEach((item) => {
        // const DIV = document.createElement("DIV")
        // const P = document.createElement("p")
        // const BUTTON = document.createElement("BUTTON")

        const singleItem = `
        <div class="single-list-item">
                    <p class="list-item">${item}</p>
                    <button class="delete-item" data-itemName="${item}" onclick="deleteItem(event)">
                     <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
        
        `;
        $(".all-list-items").innerHTML += singleItem;
    });
};
