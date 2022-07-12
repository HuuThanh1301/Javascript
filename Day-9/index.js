const listShop = [ 
    { 
      nameShop: 'corgiShop', 
      address: '29 Lê Quang Sung', 
      chargedOf: 'Lộc', 
      phoneNumber: 935964949, 
      products: [ 
        { sku: 10001, name: 'sản phẩm 1', price: 10 }, 
        { sku: 10002, name: 'sản phẩm 2', price: 100 }, 
      ], 
    }, 
    { 
      nameShop: 'huskyShop', 
      address: '29 Quang Trung', 
      chargedOf: 'Lộc 2', 
      phoneNumber: 9359622234, 
      products: [ 
        { sku: 10001, name: 'sản phẩm 3', price: 10 }, 
        { sku: 10002, name: 'sản phẩm 2', price: 100 }, 
      ], 
    }, 
    { 
      nameShop: 'shibaShop', 
      address: '29 Lê lợi', 
      chargedOf: 'Lộc 3', 
      phoneNumber: 9344622234, 
      products: [ 
        { sku: 10001, name: 'sản phẩm 2', price: 10 }, 
        { sku: 10002, name: 'sản phẩm 5', price: 100 }, 
      ], 
    }, 
  ]; // item.products.map(product => product.sku + '-' + product.name + '-' + product.price + '<br>');


document.getElementById('button').onclick = (e) => {
    e.preventDefault();
    let table = '<tr><th>Name Shop</th><th>Address</th><th>Charged Of</th><th>Phone Number</th><th>Products</th></tr>'

    listShop.map(item => {
       return item.products = item.products.map(product => product.sku + '-' + product.name + '-' + product.price).join("<br>");
   });

   console.log(listShop);
   
   for(const item of listShop){
       table+= `<tr><td>${item.nameShop}</td><td>${item.address}</td><td>${item.chargedOf}</td><td>${item.phoneNumber}</td><td>${item.products}</td></tr>`
   }

   document.getElementById('table').innerHTML = table;
}
