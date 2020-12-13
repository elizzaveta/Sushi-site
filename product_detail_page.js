import {change_prev_hash} from "./hash_change.js";
import {button_add_to_cart} from "./cart.js";

export default function add_product_details_page(id, products){
    $('html,body').scrollTop(0);
    document.getElementById("clear").remove();

    let b = document.getElementById("insert_before_me");
    let main = document.createElement("div");
    main.id = "clear";
    main.style.paddingLeft = "45px";
    main.style.paddingRight = "45px";
    insertAfter(b,main);

    let product_element = document.createElement("div");
    product_element.className = "row bg-light";
    product_element.style.padding = "30px";

    let left_part = document.createElement("div");
    left_part.className = "col-5"

    let pr_image = document.createElement("img");
    pr_image.src = String(products[id].pr_image);
    pr_image.className = "w-75";
    left_part.appendChild(pr_image);

    let right_part = document.createElement("div");
    right_part.className = "col-6"

    let name = document.createElement("h3");
    name.textContent = products[id].product_name;
    right_part.appendChild(name);

    let weight = document.createElement("p");
    weight.textContent = "Вес: "+products[id].weight;
    right_part.appendChild(weight);

    let composition = document.createElement("p");
    composition.textContent = products[id].product_description;
    right_part.appendChild(composition);

    let price = document.createElement("p");
    price.textContent = "Цена: "+products[id].price;
    right_part.appendChild(price);

    let button_add = document.createElement("button");
    button_add.type = "button";
    button_add.className = "btn btn-outline-success";
    button_add.textContent = "В корзину";
    right_part.appendChild(button_add);
    button_add.onclick = function (){ button_add_to_cart(id)};

    product_element.appendChild(left_part);
    product_element.appendChild(right_part);

    main.appendChild(product_element);


    change_prev_hash("#products/"+products[id].url)
    location.hash = "products/"+products[id].url;
}


function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

export {add_product_details_page}