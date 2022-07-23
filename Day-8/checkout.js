let queryParameter = location.search;
queryParameter = queryParameter.slice(1, location.search.length);
const pairsOfQuery = queryParameter.split('&').map(item => item.split('='));
const queryObject = Object.fromEntries(pairsOfQuery);

const showInfoById = id => {
    document.getElementById(id).innerHTML = `${id}: ${queryObject[id]}`;
}

showInfoById('email');
showInfoById('name');
showInfoById('age');
showInfoById('phone');
showInfoById('money');


console.log(queryObject);

document.querySelector('button[type="submit"]').onclick = e => {
    e.preventDefault();
    fakeCoupon = '01062022';
    if(document.getElementById('coupon').value === fakeCoupon){
        let money = parseInt(queryObject['money']) - 50;
        alert('So tien can thanh toan la ' + money);
    }
    else{
        alert('Coupon does not exist');
    }
    location.href = 'https://huuthanh1301.github.io/Javascript/register.html';
  
}