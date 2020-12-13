import {display_product_detail_data} from "./fetch.js";
import {change_prev_hash} from "./hash_change.js";
import {button_add_to_cart} from "./cart.js";

export default function add_recommendations_on_page(recommended_data, products_data){
    document.getElementById("clear").remove();
    $('html,body').scrollTop(0);

    let b = document.getElementById("insert_before_me");

    let main = document.createElement("div");
    main.id = "clear";
    main.style.paddingLeft = "45px";
    main.style.paddingRight = "45px";
    insertAfter(b,main);

    let promo = document.createElement("div");
    promo.className = "p-5 d-flex justify-content-center";
    promo.style.background = "rgb(228, 242, 244)";
    promo.style.height = "400px";
    main.appendChild(promo);


    let pr_image = document.createElement("img");
    pr_image.src = "img_promo\\pri-opozdanii-podarok.jpg";
    pr_image.className = "img-thumbnail";
    promo.appendChild(pr_image);


    let text = document.createElement("div");
    text.textContent = "Рекомендованное:";
    //text.className = "display-4";
    text.style.fontSize = "30px";
    main.appendChild(text);

    let grid_block = document.createElement("div");
    grid_block.className = "row";
    grid_block.style.padding = "20px"
    main.appendChild(grid_block);


    for(let i = 0; i<recommended_data.length;i++){
        console.log("---");

        let chosen_product = Number(recommended_data[i]);
        console.log("chosen_product(category id) "+chosen_product);

        let pr_image = document.createElement("img");
        pr_image.src = String(products_data[chosen_product].pr_image);
        pr_image.className = "pointer w-100 ";
        pr_image.onclick = function() {display_product_detail_data(recommended_data[i])};

        let product_element = document.createElement("div");
        product_element.className = "col-lg-3 col-md-3 bg-white";



        let product_name = document.createElement("div");
        product_name.className = "pointer font-weight-light";
        product_name.style.fontSize = "20px";
        product_name.textContent=products_data[chosen_product].product_name;
        product_name.onclick = function() {display_product_detail_data(recommended_data[i])};

        product_element.appendChild(pr_image);
        product_element.appendChild(product_name);

        let price = document.createElement("div");
        price.textContent = products_data[chosen_product].price + " грн.";
        product_element.appendChild(price);

        let button_add = document.createElement("button");
        button_add.type = "button";
        button_add.className = "btn btn-outline-success";
        button_add.textContent = "В корзину";
        button_add.onclick = function (){ button_add_to_cart(recommended_data[i])};

        product_element.appendChild(button_add);


        grid_block.appendChild(product_element);

        console.log("product name "+products_data[chosen_product].product_name);
        console.log("path "+String(products_data[chosen_product].pr_image));
    }
    change_prev_hash("#main")
    location.hash = "main";
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}


export {add_recommendations_on_page};