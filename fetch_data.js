import {main_page} from "./fetch.js";

let products_json;
let categories_json;
let promo_json;
let recommended_json;

class Categories{
    constructor(data){
        this.json = data;
    }
}
class Products{
    constructor(data){
        this.json = data;
    }
}
class Promo{
    constructor(data){
        this.json = data;
    }
}
class Recommendations{
    constructor(data){
        this.json = data;
    }
}

function get_products(){
    fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/products')
        .then(status)
        .then(json)
        .then(function(data) {
            products_json = new Products(data);
        })
        .then(function (){
        get_categories();
    });
}
function get_categories(){
    fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/categories')
        .then(status)
        .then(json)
        .then(function(data) {
            categories_json = new Categories(data);
        })
        .then(function (){
            get_promo();
        });
}
function get_promo(){
    fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/promo')
        .then(status)
        .then(json)
        .then(function(data) {
            promo_json = new Promo(data);
        })
        .then(function (){
            get_recommended();
        });

}
function get_recommended(){
        fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/recomendations')
            .then(status)
            .then(json)
            .then(function(data) {
                recommended_json = new Recommendations(data);
            })
             .then(function (){
                 main_page();
             });
}

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

get_products();








//
// function all(){
//     get_categories();
//     get_promo();
//     get_recommended();
//
// }
//
// const promise1 =  new Promise(
//     function(resolve, reject) {
//
//         all();
//         resolve();
//
//     });
//
//
// promise1.then(() => {
//
// });




//     new Promise((resolve, reject) => {
//
//         alert("promise")
//         get_products();
//         get_categories();
//         get_promo();
//         get_recommended();
//
//     resolve();
// });


export {products_json, categories_json, promo_json, recommended_json};