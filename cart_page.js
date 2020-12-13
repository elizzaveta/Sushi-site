
import {change_prev_hash} from "./hash_change.js";
import {button_remove_from_cart} from "./cart.js";
import {display_order_page} from "./order_page.js";

function display_cart_page(products){

    document.getElementById("clear").remove();
    $('html,body').scrollTop(0);

    let b = document.getElementById("insert_before_me");
    let main = document.createElement("div");
    main.className = "bg-light";
    main.id = "clear";
    main.style.padding = "45px";
    insertAfter(b,main);

    let head = document.createElement("h2");
    head.textContent = "Корзина";
    head.style.textAlign="center";
    head.className = "font-weight-light";

    main.appendChild(head);


    let get_cart_array = localStorage.getItem("cart");
    get_cart_array = JSON.parse(get_cart_array);


    if(get_cart_array !== null && get_cart_array.length!==0){
        display_cart_products(get_cart_array, products);

        let order_button = document.createElement("button")
        order_button.type = "button";
        order_button.id = "make_order";
        order_button.className = "btn btn-success btn-block";
        order_button.textContent = "Оформить заказ";
        order_button.onclick = function (){  display_order_page()  };
        main.appendChild(order_button);


    }else{
        let massage = document.createElement("h4");
        massage.className = "font-weight-light text-center";
        massage.textContent = "Вы еще ничего не добавили.";
        main.appendChild(massage);
    }


}

function display_cart_products(prod_array, products){

    let main = document.getElementById("clear");


    for(let i = 0; i< prod_array.length;i++){
        let elem = document.createElement("div");
        elem.className = "row bg-white";
        elem.id = "elem_cart"+prod_array[i].id;
        elem.style.margin = "35px";


        let left_part = document.createElement("div");
        left_part.className = "col-3";



        let pr_image = document.createElement("img");
        pr_image.src = String(products[Number(prod_array[i].id)].pr_image);
        pr_image.className = "w-75";//100?
        left_part.appendChild(pr_image);

        let right_part = document.createElement("div");

        let name = document.createElement("p");
        name.className = "font-weight-light";
        name.style.fontSize = "20px";
        name.textContent = products[Number(prod_array[i].id)].product_name;
        right_part.appendChild(name);

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