
// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
const cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

// Shallow copy of cart. When we add quantity in the same object when repeated, only will be modified here, not in cart and CartArray. 
// Avoid duplications of quantites when function printCart invoked
const cartClone = []


// Exercise 1
const countProduct = document.getElementById("count_product")
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (let i = 0; i < products.length; i++) {

        if (products[i].id === id) {
            console.log(products[i])
            cartList.push(products[i]);
            countProduct.textContent = cartList.length
        }
    }
}

// Exercise 2
function cleanCart() {
    cartList.length = 0;
    countProduct.textContent = 0;
    cart.length = 0;
    // Remove objects from array but also from modal

    totalPriceModal.textContent = `Total: 0$`
    for (let i = 0; i < cartClone.length; i++) {
        modalCartProducts[i].children[0].textContent = '';
        modalCartProducts[i].children[1].textContent = '';
        modalCartProducts[i].children[2].textContent = '';
        modalCartProducts[i].children[3].textContent = '';
        modalCartProducts[i].classList.add('d-none');
    }
    cartClone.length = 0;
}

// Exercise 3
function calculateTotal(cartClone) {
    // Calculate total price of the cart using the "cartList" array
    let totalPrice = 0;
    for (let i = 0; i < cartClone.length; i++) {
        if (cartClone[i].hasOwnProperty('subtotalWithDiscountcartClone')) {
            totalPrice += cartClone[i].subtotalWithDiscountcartClone;
        } else {
            totalPrice += cartClone[i].price * cartClone[i].quantity
        }
    }
    return totalPrice;
}

// Exercise 4
function generateCart(cartList) {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    for (let i = 0; i < cartList.length; i++) {
        /* create clone objects from cartList to avoid mutation when adding products to same object */
        let cloneObject = 0;
        if (cart.includes(cartList[i])) {
            const indexOfcloneObject = cart.indexOf(cartList[i])
            cartClone[indexOfcloneObject].quantity += 1;
            console.log('found', cartClone)
        } else {
            console.log('not found, pushed');
            cartList[i].quantity = 1;
            cart.push(cartList[i])
            cloneObject = { ...cartList[i] }
            cartClone.push(cloneObject)
        }
    }
}


// Exercise 5
function applyPromotionsCart(cartClone) {
    // Apply promotions to each item in the array "cartClone"
    for (let i = 0; i < cartClone.length; i++) {
        if (cartClone[i].name === 'cooking oil' && cartClone[i].quantity >= cartClone[i].offer.number) {
            cartClone[i].subtotalWithDiscountcartClone = (cartClone[i].price * cartClone[i].quantity - 10) - (((cartClone[i].price * cartClone[i].quantity - 10) * cartClone[i].offer.percent / 100))
            console.log('oil');
        } else if (cartClone[i].name === 'Instant cupcake mixture' && cartClone[i].quantity >= cartClone[i].offer.number) {
            cartClone[i].subtotalWithDiscountcartClone = ((cartClone[i].price * cartClone[i].quantity) - (cartClone[i].price * cartClone[i].quantity * 2 / 3)) - (((cartClone[i].price * cartClone[i].quantity) - (cartClone[i].price * cartClone[i].quantity * 2 / 3)) * cartClone[i].offer.percent / 100)
            console.log(cartClone[i].subtotalWithDiscountcart);
        }
    }
}

const cartListModal = document.getElementById("cart_list")
const modalCartProducts = cartListModal.getElementsByTagName("tr")
const totalPriceModal = document.getElementById("total_price")

// Exercise 6
function printCart(cartClone) {
    // Fill the shopping cart modal manipulating the shopping cart dom
    applyPromotionsCart(cartClone)
    calculateTotal(cartClone)

    for (let i = 0; i < cartClone.length; i++) {
        if (cartClone.length !== 0) {
            console.log(modalCartProducts[i].children[0])
            // show product that was clicked
            modalCartProducts[i].classList.remove('d-none');
            // Creat a span because when clicked the minus button would disappear the button without the span
            const span = document.createElement("span");
            span.append(cartClone[i].quantity);
            modalCartProducts[i].children[2].appendChild(span)
            modalCartProducts[i].children[0].textContent = cartClone[i].name
            modalCartProducts[i].children[1].textContent = cartClone[i].price

            // Create button dynamically to give the decrease object option to the user
            const decrementButton = document.createElement("input");
            decrementButton.type = "button";
            decrementButton.name = 'decrementButton'
            decrementButton.id = 'decrementButton'
            decrementButton.value = "-";
            decrementButton.className = "btn btn-light btn-sm";
            decrementButton.setAttribute("onclick", `removeFromCart(${cartClone[i].id})`);
            modalCartProducts[i].children[2].appendChild(decrementButton);
            // show in the modal the price of the product with or withour the applied discount
            if (cartClone[i].hasOwnProperty('subtotalWithDiscountcartClone'))
                modalCartProducts[i].children[3].textContent = cartClone[i].subtotalWithDiscountcartClone
            else {
                modalCartProducts[i].children[3].textContent = cartClone[i].price * cartClone[i].quantity
            }
        } else {
            modalCartProducts[i].classList.add('d-none');
        }
    }

    totalPriceModal.textContent = `Total: ${calculateTotal(cartClone)}$`;

}

// add eventlistener when closing modal. Will set cartClone and cart to zero and remove buttons and spans created
// dinamically in the printCart to avoid duplications when modal opened again.

const myModalEl = document.getElementById('cartModal')
myModalEl.addEventListener('hidden.bs.modal', () => {

    console.log('hidden modal')
    cartClone.length = 0;
    cart.length = 0;

    for (let i = 0; i < modalCartProducts.length; i++) {
        if (modalCartProducts[i].children[2].children.length > 0) {
            modalCartProducts[i].children[2].children[0].remove()
            modalCartProducts[i].children[2].children[0].remove()
            console.log('removeChild')
        }
    }
})

// ** Nivell II **

// Exercise 7
function addToCart(cartClone) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8

function removeFromCart(id) {

    for (let i = 0; i < cartClone.length; i++) {
        if (cartClone[i].id === id && cartClone[i].quantity > 1 && cartClone.length>1) {
            --cartClone[i].quantity
            --modalCartProducts[i].children[2].children[0].textContent
            modalCartProducts[i].children[3].textContent -= cartClone[i].price
            --countProduct.textContent
            const indexCartlistRemove = cartList.map(object => object.id).indexOf(cartClone[i].id)
            console.log(cartList.splice(indexCartlistRemove, 1))
            totalPriceModal.textContent = `Total: ${calculateTotal(cartClone)}$`;

            console.log([i])


    

         
        }
    }

}




function open_modal() {
    console.log("Open Modal");
    generateCart(cartList)
    printCart(cartClone);
}