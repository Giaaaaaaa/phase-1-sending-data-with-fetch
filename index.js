// // Add your code here
// const userData = {
//     userName: "Jack",
//     userEmail: "abc@123.com"
// }

// const configObj = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body:JSON.stringify(userData)
// }

// function submitData(configObj) {
//     fetch(`http://localhost:3000/users`, configObj)
//     .then(res => res.json)
//     .then(obj => console.log(obj))
//     .catch(error => {
//         alert('oops');
//         console.log(error.message);
//     })
// }

// submitData(configObj);

const div = document.querySelector('div')
const userId = document.createElement('span');
const errMsg = document.createElement('span');

function submitData() {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: 'Steve',
            email: 'steve@steve.com'
        })
    })
    .then(res => res.json())
    .then(user => {
        div.appendChild(userId);
        userId.textContent = `user id: ${user.id}`;
        console.log(user.id);
        return user;
    })
    .catch(error => {
        div.appendChild(errMsg);
        errMsg.textContent = `Unauthorized Access`;
        console.log(error.message);
    })
}
