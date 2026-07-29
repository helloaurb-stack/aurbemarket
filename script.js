console.log("AURB E-MARKET Website Loaded");


function orderProduct(productName){

let phone="919315344841";

let message="Hello AURB E-MARKET, I want to order: "+productName;

let url="https://wa.me/"+phone+"?text="+encodeURIComponent(message);

window.open(url,"_blank");

}
