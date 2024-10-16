const modalOpenButton = document.querySelector('.modal-button');
const modalCloseButton = document.querySelector('.modal__close-btn');
const modalBackground = document.querySelector('.modal-background');

modalOpenButton.addEventListener('click', () => {
    modalBackground.style.display = 'block';
});

modalCloseButton.addEventListener('click', () => {
    modalBackground.style.display = 'none';
});

const fileUploadButton = document.querySelector('#logo');
const modalFileEclipse = document.querySelector('.input-file__eclipse')

fileUploadButton.addEventListener('change', (e) => {
    const files = e.target.files
    if(files.length > 0){
        let src = URL.createObjectURL(files[0])
        modalFileEclipse.style.backgroundImage = `url(${src})`
    }
})

const fileClearButton = document.querySelector('.input-file__clear');

fileClearButton.addEventListener('click', () => {
    fileUploadButton.value = ''
    modalFileEclipse.style.backgroundImage = ''
})

const phoneInput = document.querySelector('#phone');

// phoneInput.addEventListener('input', (e) => {
//     let x = e.target.value.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/);
//     e.target.value = '(' + x[1] + ') ' + x[2] + '-' + x[3];
// })

phoneInput.addEventListener('input', (e) => {
    let input = e.target.value.replace(/\D/g, '');

    if (input[0] !== '7') {
        input = '7' + input;
    }

    let x = input.match(/(\d{1})(\d{3})(\d{3})(\d{0,2})(\d{0,2})/);
    if (x) {
        e.target.value = '+7 ' + x[2] + ' ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
    }
});