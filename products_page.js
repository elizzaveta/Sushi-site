import {display_category_data, display_product_detail_data} from "./fetch.js";
import {change_prev_hash} from "./hash_change.js";

export default function add_products_on_page(categories, products){
    document.getElementById("clear").remove();

    let b = document.getElementById("insert_before_me");
    let main = document.createElement("div");
    main.id = "clear";
    main.style.paddingLeft = "45px";
    main.style.paddingRight = "45px";
    main.className = "row";
    insertAfter(b,main);


    let left_part = document.createElement("div");
    left_part.className = "col-2"

    let menu = document.createElement("div");
    menu.className = "stickyMenu d-flex bg-light flex-column align-content-around sticky-top";
    left_part.appendChild(menu);

    let menu_name = document.createElement("div");
    menu_name.style.marginTop = "50px";
    menu_name.textContent = "Меню";
    menu_name.className = "p-4";
    menu.appendChild(menu_name);


    let right_part = document.createElement("div");
    right_part.className = "col-9"


    main.appendChild(left_part);
    main.appendChild(right_part);

    let cat_id_names = [];
    for(let i = 0; i<categories.length; i++){
        let cat_block = document.createElement("div");
        right_part.appendChild(cat_block);

        let cat_name = document.createElement("h3");
        cat_name.className = "shadow-none p-3 text-uppercase mb-5 bg-light rounded font-weight-lighter text-center";
        cat_name.id = String(i);
        cat_name.onclick = function() {display_category_data(String(i+1))};
        cat_name.textContent = categories[i].name;

        cat_block.appendChild(cat_name);

        let prod_grid = document.createElement("div");
        prod_grid.className = "row";
        prod_grid.id = "category"+(i+1);
        cat_id_names.push("category"+(i+1));

        cat_block.appendChild(prod_grid);

        let cat_menu = document.createElement("div");
        cat_menu.textContent = categories[i].name;
        cat_menu.onclick = function() {display_category_data(String(i+1))};
        cat_menu.className = "p-4";
        menu.appendChild(cat_menu);


    }
    for(let i = 0; i<products.length; i++){
        let category_numb = products[i].category_id;
        let parent_block = document.getElementById(cat_id_names[Number(category_numb)-1]);

        let pr_image = document.createElement("img");
        pr_image.src = String(products[i].pr_image);
        pr_image.className = "w-75";

        let product_element = document.createElement("div");
        product_element.className = "col-3";
        product_element.onclick = function() {display_product_detail_data(i)};


        let product_name = document.createElement("div");
        product_name.className = "bg-info"
        product_name.textContent=products[i].product_name;

        product_element.appendChild(pr_image);
        product_element.appendChild(product_name);


        let button_add = document.createElement("button");
        button_add.type = "button";
        button_add.className = "btn btn-outline-success";
        button_add.textContent = "В корзину";
        product_element.appendChild(button_add);

        parent_block.appendChild(product_element);
    }

    change_prev_hash("#catalog")
    location.hash = "catalog";
}


function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

export {add_products_on_page}