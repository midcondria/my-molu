const targetArea = document.querySelector('.targetArea');
const imageArea = document.querySelector('.imageArea');
const btn = document.querySelector('.magicBtn');
const input = document.querySelector('#input')

let bindedData = {};

getData = function () {
    const url = `https://api-blue-archive.vercel.app/api/characters?page=${Math.floor((input.value -1) /2) +1}`;

    fetch(url, {
        mode: 'cors'})
        .then((response) => response.json())
        .then((data) => {
            bindedData = data.data

            imageArea.innerHTML = '';
            if (input.value % 2 == 1) {
                for (let i = 0; i < 10; i++) {
                    const student = document.createElement('div');
                    const name = document.createElement('div');
                    name.textContent = bindedData[i].name;
                    student.append(name);
                    const image = document.createElement('img');
                    image.setAttribute('src',bindedData[i].photoUrl);
                    student.append(image);
                    imageArea.append(student);
                }
            } else {
                for (let i = 10; i < 20; i++) {
                    const student = document.createElement('div');
                    const name = document.createElement('div');
                    name.textContent = bindedData[i].name;
                    student.append(name);
                    const image = document.createElement('img');
                    image.setAttribute('src',bindedData[i].photoUrl);
                    student.append(image);
                    imageArea.append(student);
                }
            }
        });
}

btn.addEventListener('click', getData);