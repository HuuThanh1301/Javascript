const shopData = {

    corgiShop: {
      address: '29 Lê Quang Sung', chargedOf: 'Lộc', phoneNumber: 935964949, 
      products: [{ sku: 10001, name: 'sản phẩm 1', price: 10 }, { sku: 10002, name: 'sản phẩm 2', price: 100 }],  
    },  
    huskyShop: {
      address: '29 Quang Trung', chargedOf: 'Lộc 2', phoneNumber: 9359622234,  
      products: [{ sku: 10001, name: 'sản phẩm 3', price: 10 }, { sku: 10002, name: 'sản phẩm 2', price: 100 }],  
    },  
    shibaShop: {
      address: '29 Lê lợi', chargedOf: 'Lộc 3', phoneNumber: 9344622234,  
      products: [{ sku: 10001, name: 'sản phẩm 2', price: 10 }, { sku: 10002, name: 'sản phẩm 5', price: 100 }],  
    },  
  };

  const listShop = [
    {
      nameShop: 'corgiShop', address: '29 Lê Quang Sung', chargedOf: 'Lộc', phoneNumber: 935964949,  
      products: [{ sku: 10001, name: 'sản phẩm 1', price: 10 }, { sku: 10002, name: 'sản phẩm 2', price: 100 }],  
    },  
    {
      nameShop: 'huskyShop', address: '29 Quang Trung', chargedOf: 'Lộc 2', phoneNumber: 9359622234,  
      products: [{ sku: 10001, name: 'sản phẩm 3', price: 10 }, { sku: 10002, name: 'sản phẩm 2', price: 100 }],  
    },  
    {
      nameShop: 'shibaShop', address: '29 Lê lợi', chargedOf: 'Lộc 3', phoneNumber: 9344622234,  
      products: [{ sku: 10001, name: 'sản phẩm 2', price: 10 }, { sku: 10002, name: 'sản phẩm 5', price: 100 }],  
    },  
  ]

  const myFunc1a = () => {
    const myListShop = Object.entries(shopData).map(itemShop => {
        const key = itemShop[0];
        const value = itemShop[1];
        value.nameShop = key;
        return value;
    })
    console.log(myListShop);
  }

  const myFunc1b = () => {
      const shopDataArray = Object.entries(shopData).map(itemShop => {
        const key = itemShop[0];
        const value = itemShop[1];
        value.nameShop = key;
        itemShop[0] = value.phoneNumber;

        return [itemShop[0], value];
      });
      const shopDataPhoneKey = Object.fromEntries(shopDataArray);
      console.log(shopDataPhoneKey);
  }

  const myFunc2 = () => {
      const arrayShopData = listShop.map(itemShop => {
          const key = itemShop.nameShop;
          delete itemShop.nameShop;
          return [key, itemShop];
      });
      const myShopData = Object.fromEntries(arrayShopData)
      console.log(myShopData);
  }

  const listQuestion = [
    {
      option1: 1,
      option2: 2,
    },
    {
      content: 'Bạn có bạn gái rồi phải không?',
      option1: 3,
      option2: 4,
    },
    {
      content: 'Bạn có bạn trai rồi phải không?',
      option1: 5,
      option2: 6,
    },
    {
      content: 'Bạn đã hôn chưa?',
      option1: 7,
      option2: 8,
    },
    {
      content: 'Bạn không biết tán gái?',
      option1: 9,
      option2: 10,
    },
    //5
    {
      content: '2 bạn đã đẩy xe bò với nhau chưa?',
      option1: 11,
      option2: 12,
    },
    //6
    {
      content: 'Có người đang tán bạn?',
      option1: 13,
      option2: 14,
    },
    //7
    {
      content: 'Bạn có định tiến xa hơn không?',
    },
    //8
    {
      content: 'Bạn có bị yếu sinh lý không?',
    },
    //9
    {
      content: 'Bạn có đang thích ai không?',
    },
    //10
    {
      content: 'Bạn có giàu không?',
    },
    //11
    {
      content: 'Bạn định lấy chồng trong năm nay không?',
    },
    //12
    {
      content: 'Bạn định chia tay không?',
    },
    //13
    {
      content: 'Bạn có thích người đó không?'
    },
    //14
    {
      content: 'Bạn có đang thích ai không?'
    }
  ]

  const handleOption1 = () => {
    alert('Day la option 1');
    changeQuestion(1);
  }

  const handleOption2 = () => {
    alert('Day la option 2');
    changeQuestion(2);
  }

  const changeQuestion = (optionNumber) => {
    const index = document.getElementById('quiz').getAttribute('id-question');
    const idNumber = parseInt(index);
    let nextQuestion;
    if(optionNumber === 1){
      nextQuestion = listQuestion[idNumber].option1;
    }
    if(optionNumber === 2){
      nextQuestion = listQuestion[idNumber].option2;
    }

    const nextContent = listQuestion[nextQuestion].content;
    document.getElementById('quiz__content').innerHTML = nextContent;
    document.getElementById('quiz').setAttribute('id-question', nextQuestion);
  }

  document.getElementById('quiz__option1').onclick = handleOption1;
  document.getElementById('quiz__option2').onclick = handleOption2;