

q=Number(prompt("Enter the quantity: "));
p=Number(prompt("Enter the price: "));

var product=prompt("Enter your Product name: ");
var q=prompt("Enter the quantity: ");
var p=prompt("Enter the price: ");
calculation(product,q,p,.08);

function calculation(description,quantity,price,taxes){
    var subtotal=quantity*price;
    var total=(subtotal*taxes)+subtotal;
    
    document.write(`
        <div>
            <h1>Amazon Online Store</h1>
            <p>Boise, Idaho, 83642</p>

            <p> Quantity Description Price</p>
            <p> ${quantity} ${description} ${price}</p>
            <p> ----------------------- suptotal= ${subtotal}</p>
            <p> ----------------------- taxes= ${subtotal*taxes}</p>
            <p> ----------------------- total = ${total}</p>
        </div>
    `);
}