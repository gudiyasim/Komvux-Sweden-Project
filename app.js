// JQueary based Arrray Declaration
$(() => {
    const products = [
        { name: 'TV', id: 1, price: 1000, image: 'Pics/236995.04-1.jpg', category: 'electronics' },
        { name: 'camera', id: 2, price: 2000, image: 'Pics/236074.02-1.jpg', category: 'electronics' },
        { name: 'Iphone', id: 1, price: 1000, image: 'Pics/Phone.jpg', category: 'electronics' },
        { name: 'charger', id: 2, price: 2000, image: 'Pics/Charger.jpg', category: 'electronics' },
        { name: 'ToysDoll', id: 1, price: 100, image: 'Pics/doll.jpg', category: 'Toys' },
        { name: 'Jecket', id: 2, price: 200, image: 'Pics/jacket.jpg', category: 'Clouthings' },
        { name: 'Tshirt', id: 1, price: 300, image: 'Pics/tshirt.jpg', category: 'Clouthings' },
        { name: 'Teddybear', id: 2, price: 500, image: 'Pics/teddybear.jpg', category: 'Toys' }
    ];
    let cart = [];
    // Append List used to make list of items
    const appendList = (array, location) => {
        // Template to display all items in web page by using HTML tags
        const template = array.map((item, id) => {
            return `
    <li class="product col-3">
    <img src="${item.image}">
    <div class="product-content">
    <h4>${item.name} - <span class="category">${item.category}</span> <small>${item.price}kr</small></h4>
    </div>
    <button type="button" id="${item.id}">Item Selcted </button>
    </li>
    `;
        });
        $(location).html(template);
    }
    // Function to add items in the list
    const addToCart = (array, id, location) => {
        let a = array.find(i => i.id === id);
        cart.push(a);



        const item = `
        <li class="item" id="${a.id}">
        <h6>${a.name}</h6>
        <button type="button">Remove Item</button>
        </li>
        `;

        $('span.amount').text(cart.length);
        $(location).append(item);
    }
    // Function to remove items from the list
    const removeFromCart = (array, removedItem) => {
        array.splice(removedItem, 1);
    }
    // to maintain count updated
    const populateCart = (array, location) => {
        let item = `
         <li class"item" id="${array.id}">
        <h4>${array.name}</h4>
        <button type="button">X</button>
        </li>
        `;
        $('span.amount').text(array.length);
    }
    // call to append list
    appendList(products, $('.product-list'));
// Event On click
    $('.product').on('click', 'button', (e) => {
        let id = e.currentTarget.id;
     
        addToCart(products, +id, $('.cart-list'));
    });

    $('.cart-list').on('click', 'button', (e) => {
        let item = $(e.currentTarget).closest('li').remove();
        removeFromCart(cart, item);
        populateCart(cart, $('.cart-list'));
    });
});