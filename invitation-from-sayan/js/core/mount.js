// Page markup lives in /pages. These two helpers place it in the document.
function mountGate(html){document.body.insertAdjacentHTML("afterbegin",html)}
function mountPage(html){document.getElementById("m").insertAdjacentHTML("beforeend",html)}
