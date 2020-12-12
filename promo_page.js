import {display_category_data, display_product_detail_data} from "./fetch.js";
import {change_prev_hash} from "./hash_change.js";
import add_promo_details_page from "./promo_detail_page.js";
//import {promo_json} from "./fetch_data.js";

export default function add_promo_on_page(promo){
    document.getElementById("clear").remove();

    let b = document.getElementById("insert_before_me");
    let main = document.createElement("div");
    main.id = "clear";
    main.style.paddingLeft = "45px";
    main.style.paddingRight = "45px";
    main.className = "row";
    insertAfter(b,main);

    let promo_grid = document.createElement("div");
    promo_grid.className = "col";

    main.appendChild(promo_grid);



    for(let i = 0; i< promo.length; i++){


        let elem = document.createElement("div");
        elem.id = String(i);
        elem.onclick = function() {add_promo_details_page(i, promo)};
        elem.className = "row";

        let left_part = document.createElement("div");
        left_part.className = "col-4 hidden_promo"



        let pr_image = document.createElement("img");
        //pr_image.src = "img_promo\\pri-opozdanii-podarok.jpg";
        pr_image.className = "promo_image";
        pr_image.src = String(promo[i].pr_image);
        left_part.appendChild(pr_image);


        let right_part = document.createElement("div");
        right_part.className = "col-8"

        let name = document.createElement("p");
        name.textContent = promo[i].name;
        name.className = "font-weight-lighter"
        name.style.fontSize = "30px";
        right_part.appendChild(name);

        let descr = document.createElement("p");
        descr.textContent =  promo[i].details;
        right_part.appendChild(descr);


        elem.appendChild(left_part);
        elem.appendChild(right_part);
        promo_grid.appendChild(elem);

    }


    change_prev_hash("#promo");
    location.hash = "promo";
}


function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}


export {add_promo_on_page};