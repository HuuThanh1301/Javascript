// const data = fetch('http://localhost:3000/studentList/')
// .then((res) => {
//     res.json().then((response) => {
//         console.log(response);
//         try{
//             let content = '';
//             response.forEach(item => {
//                 content += '<p>' + item.name + '</p>';
//             })
//             document.getElementById('block').innerHTML = content;
//         } catch(e){
//             console.log('res.json', e);
//         }
//     });
   

// })



const requestOptions = {
    mode: 'cors',  
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  const createPost = async (url = '', payload = {}) => {
    const response = await fetch(url, {
      method: 'POST',  
     ...requestOptions,  
        body: JSON.stringify(payload) 
    });  
    return response.json(); 
  };

  const putUpdate = async (url = '', payload = {}) => {
    const response = await fetch(url, {
      method: 'PUT',  
     ...requestOptions,  
        body: JSON.stringify(payload) 
    });  
    return response.json(); 
  };

  const patchUpdate = async (url = '', payload = {}) => {
    const response = await fetch(url, {
      method: 'PATCH',  
     ...requestOptions,  
        body: JSON.stringify(payload) 
    });  
    return response.json(); 
  };


    const deleteUser = async (url = '') => {
    const response = await fetch(url, {
      method: 'DELETE',  
     ...requestOptions,  
    });  
    return response.json(); 
  };

  const dataUser = {
    id: 3,
    name: 'D',
    phone: '0905322455',
    email: 'D@gmail.com',
    birthday: '06/05/1999'
  };

  

document.getElementById('create').onclick = () => createPost('http://localhost:3000/studentList', dataUser);
document.getElementById('put-update').onclick = () => putUpdate('http://localhost:3000/studentList/4', { // method là PUT thì phải trỏ thẳng URL tới phần tử muốn update
    ...dataUser,
    name: 'E',
    email: 'E@gmail.com',
});

document.getElementById('patch-update').onclick = () => patchUpdate('http://localhost:3000/studentList/2', {
    gender: 'male',
})

document.getElementById('delete').onclick = () => deleteUser('http://localhost:3000/studentList/0');
   



  