
import {change_prev_hash} from "./hash_change.js";
import {button_remove_from_cart} from "./cart.js";

function display_cart_page(products){

    document.getElementById("clear").remove();
    $('html,body').scrollTop(0);

    let b = document.getElementById("insert_before_me");
    let main = document.createElement("div");
    main.id = "clear";
    main.style.paddingLeft = "45px";
    main.style.paddingRight = "45px";
    insertAfter(b,main);

    let head = document.createElement("h2");
    head.textContent = "Корзина";
    head.className = "font-weight-light";

    main.appendChild(head);


    let get_cart_array = localStorage.getItem("cart");
    get_cart_array = JSON.parse(get_cart_array);


    if(get_cart_array !== null && get_cart_array.length!==0){
        display_cart_products(get_cart_array, products);
    }else{
        let massage = document.createElement("h4");
        massage.className = "font-weight-light";
        massage.textContent = "Корзина пока пуста. Здесь отобразятся продукты, которые вы добавите в нее.";
        main.appendChild(massage);
    }


}

function display_cart_products(prod_array, products){

    let main = document.getElementById("clear");


    for(let i = 0; i< prod_array.length;i++){
        let elem = document.createElement("div");
        elem.className = "row bg-white";
        elem.id = "elem_cart"+prod_array[i].id;
        elem.style.marginTop = "55px";


        let left_part = document.createElement("div");
        left_part.className = "col-3";

        let name = document.createElement("p");
        name.className = "font-weight-light";
        name.style.fontSize = "20px";
        name.textContent = products[Number(prod_array[i].id)].product_name;
        left_part.appendChild(name);


        let pr_image = document.createElement("img");
        pr_image.src = String(products[Number(prod_array[i].id)].pr_image);
        pr_image.className = "w-75";//100?
        left_part.appendChild(pr_image);

        let right_part = document.createElement("div");

        let count = document.createElement("div");
        count.textContent = "Количество: "+prod_array[i].count;
        right_part.appendChild(count);

        let button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn-outline-danger";
        button.textContent = "Удалить";
        right_part.appendChild(button);
        button.onclick = function (){ button_remove_from_cart(prod_array[i].id)};


        elem.appendChild(left_part);
        elem.appendChild(right_part);


        main.appendChild(elem);

    }
    change_prev_hash("#cart");
    location.hash = "cart";

}


function remove_from_cart_list(idd){

}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

export {display_cart_page};