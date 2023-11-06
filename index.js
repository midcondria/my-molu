const targetArea = document.querySelector('.targetArea');
const imageArea = document.querySelector('.imageArea');
const btn = document.querySelector('.magicBtn');
const input = document.querySelector('#input');
const school = document.querySelector('#school');

const schoolList = ["Trinity", "Millennium", "Gehenna" , "Abydos"];

function checkSchool() {
    console.log(school.value);
    
    const schoolName = school.value;
    if (schoolList.includes(schoolName)) {
        return getStudentListWithSchoolName(schoolName);
    } else {
        return getStudentList();
    }
}

function getStudentList () {
    const inputValue = Number(input.value) ? Number(input.value) : 1;
    const url = `https://api-blue-archive.vercel.app/api/characters?page=${Math.floor((inputValue -1) /2) +1}`;

    if (inputValue > 12 || inputValue < 1) {
        alert('페이지 입력은 1부터 12까지 가능합니다.');
        return;
    }

    fetch(url, {
        mode: 'cors'})
        .then((response) => response.json())
        .then((data) => {
            const bindedData = data.data
            imageArea.innerHTML = '';

            const trigger = (inputValue + 1)%2;
            for (let i = 10*trigger; i < 10*trigger +10; i++) {
                if (bindedData[i]) {
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
        })
        .catch((error) => {
            console.error('데이터를 불러오는 중 오류가 발생했습니다: ', error);
            alert('데이터를 불러오는 중 오류가 발생했습니다.')
        });
}

function getStudentListWithSchoolName(schoolName) {
    const inputValue = Number(input.value) ? Number(input.value) : 1;
    const url = `https://api-blue-archive.vercel.app/api/characters?school=${schoolName}&page=${Math.floor((inputValue -1) /2) +1}`;

    if (inputValue > 12 || inputValue < 1) {
        alert('페이지 입력은 1부터 12까지 가능합니다.');
        return;
    }

    fetch(url, {
        mode: 'cors'})
        .then((response) => response.json())
        .then((data) => {
            const bindedData = data.data
            imageArea.innerHTML = '';

            const trigger = (inputValue + 1)%2;
            for (let i = 10*trigger; i < 10*trigger +10; i++) {
                if (bindedData[i]) {
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
        })
        .catch((error) => {
            console.error('데이터를 불러오는 중 오류가 발생했습니다: ', error);
            alert('데이터를 불러오는 중 오류가 발생했습니다.')
        });
}

btn.addEventListener('click', checkSchool);
