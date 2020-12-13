import {display_product_detail_data} from "./fetch.js";
import {change_prev_hash} from "./hash_change.js";
import {button_add_to_cart} from "./cart.js";
import {grid_product_elem, clear_and_add_frame} from "./common_add_on_page.js";

export default function add_recommendations_on_page(recommended_data, products_data){
    clear_and_add_frame(false);

    let main = document.getElementById("clear");

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
    text.style.fontSize = "30px";
    main.appendChild(text);

    let grid_block = document.createElement("div");
    grid_block.className = "row";
    grid_block.style.padding = "20px"
    main.appendChild(grid_block);


    for(let i = 0; i<recommended_data.length;i++){
        grid_product_elem(products_data, Number(recommended_data[i]), grid_block );
    }

    change_prev_hash("#main")
    location.hash = "main";
}



export {add_recommendations_on_page};