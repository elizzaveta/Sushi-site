
import add_product_details_page from "./product_detail_page.js";
import add_category_on_page from "./category_page.js";
import add_products_on_page from "./products_page.js";
import add_recommendations_on_page from "./main_add_recommendations.js";
import add_promo_on_page from "./promo_page.js";
import {products_json,categories_json, recommended_json, promo_json} from "./fetch_data.js";
import add_promo_details_page from "./promo_detail_page.js";


window.addEventListener('hashchange', hashchange);
let prev_hash = "";

function change_prev_hash(new_hash){
    prev_hash = new_hash;
}

function hashchange(){
    console.log("PREV HASH "+prev_hash);
    console.log("NOW HASH "+location.hash);
    if(location.hash !== prev_hash){
        //alert("new hash")
        let pos_of_slash = find_last(location.hash);
        if(pos_of_slash!== -1) {
            let path = location.hash.substring(pos_of_slash + 1, location.hash.length);
            manage_hash_load_page(location.hash);
        }else{
            if(location.hash==="#catalog") {
                let path = location.hash.substring(1, location.hash.length);
                add_products_on_page(categories_json.json, products_json.json);
            }
            else if(location.hash === "#main"){
                add_recommendations_on_page(recommended_json.json,products_json.json);
            }
            else if(location.hash === "#promo"){
                add_promo_on_page(promo_json.json);
            }
        }

    }
    // if(document.getElementById(prev_id))document.getElementById(prev_id).style.backgroundColor = "#ebecec";
    // let id = location.hash;
    // id = id.substr(1,id.length);
    // if(document.getElementById(id)){
    //     document.getElementById(id).style.backgroundColor = "#e0e0bf";
    //     cll(id);
    // }
    // prev_id=id;
}

function find_last(hash){
    let pos = -1;
    let return_pos = -1;
    while (((pos = hash.indexOf("/", pos + 1)) !== -1) && pos!== hash.length ) {
        return_pos = pos;
    }
    return return_pos;
}

function all_slashes(hash){
    let pos = -1;
    let return_pos = [];
    while (((pos = hash.indexOf("/", pos + 1)) !== -1) && pos!== hash.length ) {
        return_pos.push(pos);
    }
    return return_pos;

}



function manage_hash_load_page(url) {
    let slashes_pos = all_slashes(url);
    if (slashes_pos.length === 1) {
        //проверка на то, не ввели ли неправильный хеш!!

        let first = url.substring(1, slashes_pos[0]);
        let second = url.substring(slashes_pos[0] + 1, url.length);
        //alert("directory = "+first+"\npath = "+second);

        let source;

        switch (first) {
            case "products":
                source = products_json.json;
                break;
            case "catalog":
                source = categories_json.json;
                break;
            case "promo":
                source = promo_json.json;
                break;
        }

        for (let i = 0; i < source.length; i++) {
            console.log(source[i].url + " !== " + String(second))
            if (source[i].url === String(second)) {
                switch (String(first)) {
                    case "products":
                        add_product_details_page(i, products_json.json);
                        break;
                    case "catalog":
                        add_category_on_page(String(i + 1), categories_json.json, products_json.json);
                        break;
                    case "promo":
                        add_promo_details_page(i, promo_json.json);
                        break;
                }

            }
        }


    }
}

export {change_prev_hash};
    //
    // let json = localStorage.getItem(idd);
    // json = JSON.parse(json);
    //
    // let text_area = document.getElementById("note");
    // let title_area = document.getElementById("my_title");
    // let time_area = document.getElementById("note_date");
    //
    // text_area.value = json.text;
    // title_area.value = json.title;
    // let time = new Date(json.time);
    // time = time.toLocaleString();
    // time_area.textContent = time;
    //
    // location.hash = idd;



function find_id_from_url(url, first){
    let source;
    switch (first){
        case "products": source = products_json; break;
        case "catalog": source = categories_json; break;
    }

    for(let i = 0; i<source.length; i++){
        if(source[i].url === url){
            switch (first){
                case "products": add_product_details_page(i, products_json); break;
                case "catalog": add_category_on_page(i,categories_json, products_json); break;
            }

        }
    }

    //
    // let fetch_url = 'https://my-json-server.typicode.com/elizzaveta/Sushi-site/categories';
    // if(first === "products") fetch_url = 'https://my-json-server.typicode.com/elizzaveta/Sushi-site/products';
    //
    // fetch(fetch_url)
    //     .then(status)
    //     .then(json)
    //     .then(function(data) {
    //         //alert("here");
    //         display_needed(data,url,first);
    //         return 123;
    //     });

}

// function display_needed(json,url, first){
//     for(let i = 0; i<json.length; i++){
//         if(json[i].url === url){
//             switch (first){
//                 case "products": add_product_details_page(i, json); break;
//             }
//
//         }
//     }
// }



function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}
function json(response) {
    return response.json()
}