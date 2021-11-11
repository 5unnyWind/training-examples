
const mySay = document.getElementById('say');
const myChange = document.getElementById('change');
const text = document.querySelector('h1');



// function say() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://v1.hitokoto.cn');
//     xhr.responseType = 'json';
//     xhr.send();
//     xhr.onload = () => {
//         if (xhr.status != 200) {
//             alert(`Error ${xhr.status}: ${xhr.statusText}`);
//         } else {
//             text.textContent = xhr.response.hitokoto
//         }
//     };
// }


// function say() {
//     fetch('https://v1.hitokoto.cn')
//         .then(res => {
//             return res.json()
//         })
//         .then(data => {
//             console.log(data)
//             text.textContent = data.hitokoto
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }


// function say() {
//     axios.get('https://v1.hitokoto.cn')
//         .then(res => {
//             text.textContent = res.data.hitokoto
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }




mySay.onclick = say
myChange.onclick = function () {
    text.style.color = text.style.color == "rgb(51, 51, 51)" ? "rgb(255, 255, 255)" : "rgb(51, 51, 51)"
}



