import {change_prev_hash} from "./hash_change.js";

export default function add_promo_details_page(id, promo){
    document.getElementById("clear").remove();

    let b = document.getElementById("insert_before_me");
    let main = document.createElement("div");
    main.id = "clear";
    main.style.paddingLeft = "45px";
    main.style.paddingRight = "45px";
    insertAfter(b,main);

    let name = document.createElement("h3");
    name.textContent = promo[id].name;
    name.className = "font-weight-lighter"
    main.appendChild(name);

    let pr_image = document.createElement("img");
    pr_image.src = String(promo[id].pr_image);
    pr_image.className = "w-75";
    main.appendChild(pr_image);


    let details = document.createElement("p");
    details.textContent = promo[id].more_details;
    main.appendChild(details);

    change_prev_hash("#promo/"+promo[id].url);
    location.hash = "promo/"+promo[id].url;
}


function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

export {add_promo_details_page}