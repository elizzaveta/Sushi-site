import {display_product_detail_data} from "./fetch.js";
import {change_prev_hash} from "./hash_change.js";

export default function add_recommendations_on_page(recommended_data, products_data){
    document.getElementById("clear").remove();

    let b = document.getElementById("insert_before_me");

    let main = document.createElement("div");
    main.id = "clear";
    main.style.paddingLeft = "45px";
    main.style.paddingRight = "45px";
    insertAfter(b,main);

    let promo = document.createElement("div");
    promo.className = "p-5 d-flex justify-content-center";
    promo.style.background = "#b1d9df";
    promo.style.height = "400px";
    main.appendChild(promo);


    let pr_image = document.createElement("img");
    pr_image.src = "img_promo\\pri-opozdanii-podarok.jpg";
    pr_image.className = "w-75 img-thumbnail";
    promo.appendChild(pr_image);


    let text = document.createElement("div");
    text.textContent = "Рекомендованное:";
    //text.className = "display-4";
    text.style.fontSize = "30px";
    main.appendChild(text);

    let grid_block = document.createElement("div");
    grid_block.className = "row";
    main.appendChild(grid_block);


    for(let i = 0; i<recommended_data.length;i++){
        console.log("---");

        let chosen_product = Number(recommended_data[i]);
        console.log("chosen_product(category id) "+chosen_product);

        let pr_image = document.createElement("img");
        pr_image.src = String(products_data[chosen_product].pr_image);
        pr_image.className = "w-75 ";

        let product_element = document.createElement("div");
        product_element.className = "col-3";
        product_element.onclick = function() {display_product_detail_data(recommended_data[i])};



        let product_name = document.createElement("div");
        product_name.className = "bg-info"
        product_name.textContent=products_data[chosen_product].product_name;

        product_element.appendChild(pr_image);
        product_element.appendChild(product_name);


        let button_add = document.createElement("button");
        button_add.type = "button";
        button_add.className = "btn btn-outline-success";
        button_add.textContent = "В корзину";
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