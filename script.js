
function clear_page(){
    let start = document.getElementById("insert_after_me");
    let end = document.getElementById("insert_before_me");
}


// export default function add_recommendations_on_page(recommended_data, products_data){
//     let b = document.getElementById("insert_before_me");
//
//     let promo = document.createElement("div");
//     promo.className = "h-75 p-5 bg-info"
//     promo.textContent = "here will be promo(or will not)"
//     insertAfter(b,promo);
//
//     let grid_block = document.createElement("div");
//     grid_block.className = "row";
//     insertAfter(b,grid_block);
//
//
//     for(let i = 0; i<recommended_data.length;i++){
//         console.log("---");
//
//         let chosen_product = Number(recommended_data[i]);
//         console.log("chosen_product(category id) "+chosen_product);
//
//         let pr_image = document.createElement("img");
//         pr_image.src = String(products_data[chosen_product].pr_image);
//         pr_image.className = "w-75";
//
//         let product_element = document.createElement("div");
//         product_element.className = "col-3";
//
//
//
//         let product_name = document.createElement("div");
//         product_name.className = "bg-info"
//         product_name.textContent=products_data[chosen_product].product_name;
//
//         product_element.appendChild(pr_image);
//         product_element.appendChild(product_name);
//
//
//         let button_add = document.createElement("button");
//         button_add.type = "button";
//         button_add.className = "btn btn-outline-success";
//         button_add.textContent = "В корзину";
//         product_element.appendChild(button_add);
//
//         grid_block.appendChild(product_element);
//
//         console.log("product name "+products_data[chosen_product].product_name);
//         console.log("path "+String(products_data[chosen_product].pr_image));
//     }
// }
//
// function insertAfter(referenceNode, newNode) {
//     referenceNode.parentNode.insertBefore(newNode, referenceNode);
// }
//
//
// export {add_recommendations_on_page};

// //export const prod_exp = products_data;
//
// let promo_data;
// // let categories_data;
// //  let products_data;
// // let recomended_data;
// //
// // import prod_info from "./fetch_info";
// // import {fetch_data} from "./fetch";
// //
// // console.log(prod_info.data);
// //
// // let prod_from_fetch_data_func_test = fetch_data('https://my-json-server.typicode.com/elizzaveta/Sushi-site/products');
// // console.log("prod_from_fetch_data_func_test");
// // console.log(prod_from_fetch_data_func_test);
// // console.log("prod_from_fetch_data_func_test");
// //
// //
// // fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/categories')
// //     .then((response) => {
// //         return response.json();
// //     })
// //     .then((data) => {
// //         categories_data=data;
// //         console.log(categories_data);
// //     });
// //
// //
// //
// // fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/recomendations')
// //     .then((response) => {
// //         return response.json();
// //     })
// //     .then((data) => {
// //         recomended_data=data;
// //         console.log(recomended_data);
// //     });
// //
// // fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/products')
// //     .then((response) => {
// //         return response.json();
// //     })
// //     .then((data) => {
// //         products_data=data;
// //         console.log(products_data);
// //
// //     });
// //
// //
// // let j = products_data[0];
// //
// // setTimeout(add_on_page,1000);
// //
// //