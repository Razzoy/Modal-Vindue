const openModalButton = document.getElementById('openButton');
const myModal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeButton');

openModalButton.addEventListener('click', function () {
    myModal.classList.toggle('show-modal');

    // createModal();

});

closeModalButton.addEventListener('click', function () {
    // myModal.innerHTML = '';    
    myModal.classList.toggle('show-modal');

});

// function createModal() {
//     const closeButton = document.createElement('span');
//     const modalText = document.createElement('p');
//     const modalContent = document.createElement('article');
//     modalText.innerText = 'Welcome to the dark side'

//     modalContent.appendChild(closeButton);
//     modalContent.appendChild(modalText);
//     myModal.appendChild(modalContent);
// }