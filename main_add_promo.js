

export default function add_promo_on_page1(promo_data) {
    let b = document.getElementById("insert_before_me");

    let promo = document.createElement("div");
    promo.className = "h-75 p-5 bg-info"
    promo.textContent = "here will be promo(or will not)"
    insertAfter(b,promo);

}


function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

export {add_promo_on_page1}