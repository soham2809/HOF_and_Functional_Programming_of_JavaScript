const cart =[
    {
        "Name": "I-phone",
        "USD-price": 1000
    },
    {
        "Name": "Samsung",
        "USD-price": 700
    },
    {
        "Name": "Xiaomi",
        "USD-price": 200
    },
    {
        "Name": "Huawei",
        "USD-price": 300
    },
    {
        "Name": "Nokia",
        "USD-price": 400
    }
]

const converter = (products)=>{
    const indian_prices=[];
    let converter=0
    for (let i = 0; i < products.length; i++) {
        converter = products[i]["USD-price"]*80;
        indian_prices.push({name: products[i].Name, Indian_price: "Rs "+ converter});
}
return indian_prices;
}
console.log(converter(cart));