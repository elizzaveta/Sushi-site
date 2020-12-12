let products_data3;

fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/products')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        products_data3=data;
        console.log(products_data3);

    });

console.log(products_data3);