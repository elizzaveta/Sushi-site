

function button_add_to_cart(idd){

    let display_number = document.getElementById("cart");
    display_number.textContent = Number(display_number.textContent)+1;


    let get_cart_array = localStorage.getItem("cart");
    get_cart_array = JSON.parse(get_cart_array);

    let if_new = true;

    if(get_cart_array !== null && get_cart_array.length!==0){
        for(let i = 0; i<get_cart_array.length;i++){
            if(idd === get_cart_array[i].id){
                get_cart_array[i].count = Number(get_cart_array[i].count) +1;
                if_new = false;
                break;
            }
        }
    }else{
        get_cart_array = [];
    }
    if(if_new){
        let item  = {
            id: idd,
            count: 1,
        };
        get_cart_array.push(item);
    }


    let json = JSON.stringify(get_cart_array);

    localStorage.setItem("cart",json);

}

function button_remove_from_cart(idd){
    let get_cart_array = localStorage.getItem("cart");
    get_cart_array = JSON.parse(get_cart_array);

    let result_array =[];


    for(let i = 0;i<get_cart_array.length;i++){
        if(idd !== get_cart_array[i].id){
            result_array.push(get_cart_array[i]);
        }else{
            let numb = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent =Number(numb)-get_cart_array[i].count;
        }
    }

    let json = JSON.stringify(result_array);

    localStorage.setItem("cart",json);

    document.getElementById("elem_cart"+idd).remove();
    if(result_array.length===0){
        document.getElementById("make_order").remove();
        let massage = document.createElement("h4");
        massage.className = "font-weight-light text-center";
        massage.textContent = "Вы ничего не добавили.";
        document.getElementById("clear").appendChild(massage);
    }


}


export {button_add_to_cart, button_remove_from_cart};