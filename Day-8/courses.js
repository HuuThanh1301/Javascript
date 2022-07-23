document.querySelector('button[type="submit"]').onclick = e => {
    e.preventDefault();
    const course_list = document.querySelectorAll('input[type="checkbox"]');
    const checked_list = [...course_list].filter(course => course.checked);
    if(checked_list.length > 3){
        return alert('Cannot choose more than 3 courses');
    }
    if(checked_list.length === 0){
        return alert('You must choose at least one course');
    }
    console.log(checked_list);

    let money = 0;
    for(let item of checked_list){
        money += parseInt(item.dataset.price);
    }
    if(money < 300){
        return alert('Total price must be larger than 300,000 vnd. You can add one more course');
    }

    if(money > 600 && money <= 1000){
        money = money * 0.95;
    }
    if(money > 1000){
        money = money * 0.9;
    }

    const queryParameter = location.search;

  
    location.href = `https://huuthanh1301.github.io/Javascript/checkout.html${queryParameter}&money=${money}`;
}