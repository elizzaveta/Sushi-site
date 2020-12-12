let categories_data;
let products_data;
let recomended_data;

//import {fetch_data} from "./fetch";
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

function fetch_data(url){
    let return_data;
    fetch(url)
        .then(status)
        .then(json)
        .then(function(data) {
            console.log("-------prod_from_fetch_data_func_test");
            console.log(data);
            console.log("----------prod_from_fetch_data_func_test");
            return data;
        })
}

// console.log(prod_info.data);

let prod_from_fetch_data_func_test = fetch_data('https://my-json-server.typicode.com/elizzaveta/Sushi-site/products');
console.log("prod_from_fetch_data_func_test");
console.log(prod_from_fetch_data_func_test);
console.log("prod_from_fetch_data_func_test");

// console.log(prod_info.data);
//
// let prod_from_fetch_data_func_test = fetch_data('https://my-json-server.typicode.com/elizzaveta/Sushi-site/products');
// console.log("prod_from_fetch_data_func_test");
// console.log(prod_from_fetch_data_func_test);
// console.log("prod_from_fetch_data_func_test");

//
//
// function fuck_this_fetch(url){
//     fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/categories')
//         .then((response) => {
//         return response.json();
//     });
//
// }
//
//
// let fuck_categories = fuck_this_fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/categories');
//
//
//
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 300);
// });
//
//
// promise1.then((value) => {
//     console.log("fuck "+fuck_categories);
// });
//
// //
//
// fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/categories')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         categories_data=data;
//         console.log(categories_data);
//     });
//
//
//
// fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/recomendations')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         recomended_data=data;
//         console.log(recomended_data);
//     });
//
// fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/products')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         products_data=data;
//         console.log(products_data);
//
//     });
//
//
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 300);
// });
//
//
// promise1.then((value) => {
//     const products_data1 = products_data;
//     const categories_data1 = categories_data;
//     const recomended_data1 = recomended_data;
//
//     console.log("before export "+products_data);
//
//
//     export {products_data,categories_data,recomended_data};
// });
//
//
//
//
