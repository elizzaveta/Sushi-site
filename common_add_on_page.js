import {display_product_detail_data} from "./fetch.js";
import {button_add_to_cart} from "./cart.js";

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

function grid_product_elem(products, prod_id, append_to_this){

    let pr_image = document.createElement("img");
    pr_image.src = String(products[prod_id].pr_image);
    pr_image.className = "pointer w-100 ";
    pr_image.onclick = function() {display_product_detail_data(prod_id)};//string??

    let product_element = document.createElement("div");
    product_element.className = "col-lg-3 col-md-3 bg-white";

    let product_name = document.createElement("div");
    product_name.className = "pointer font-weight-light";
    product_name.style.fontSize = "20px";
    product_name.textContent=products[prod_id].product_name;
    product_name.onclick = function() {display_product_detail_data(prod_id)};//string??

    product_element.appendChild(pr_image);
    product_element.appendChild(product_name);

    let price = document.createElement("div");
    price.textContent = products[prod_id].price + " грн.";
    product_element.appendChild(price);

    let button_add = document.createElement("button");
    button_add.type = "button";
    button_add.className = "btn btn-outline-success";
    button_add.textContent = "В корзину";
    button_add.onclick = function (){ button_add_to_cart(prod_id)};

    product_element.appendChild(button_add);

    append_to_this.appendChild(product_element);
}


function clear_and_add_frame(if_row){
    document.getElementById("clear").remove();
    $('html,body').scrollTop(0);

    let b = document.getElementById("insert_before_me");

    let main = document.createElement("div");
    main.id = "clear";
    main.style.paddingLeft = "45px";
    main.style.paddingRight = "45px";
    if(if_row)  main.className = "row";
    insertAfter(b,main);
}

export {grid_product_elem, clear_and_add_frame};