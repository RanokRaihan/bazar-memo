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
