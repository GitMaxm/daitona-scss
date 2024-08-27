// const projectBlock = document.querySelectorAll('.cases-list__block');

// projectBlock.forEach((item) => {
//     item.addEventListener('mouseout', function () {
//         const projectImg = item.querySelector('.cases-list__img');
//         const projectTitle = item.querySelector('.cases-list__title');

//         projectImg.classList.remove('cases-list__img--active');
//         projectTitle.classList.add('none');
//     })
// })

// projectBlock.forEach((item) => {
//     item.addEventListener('mouseover', function () {
//         const projectImg = item.querySelector('.cases-list__img');
//         const projectTitle = item.querySelector('.cases-list__title');

//         projectImg.classList.add('cases-list__img--active');
//         projectTitle.classList.remove('none');
//     })
// })

const projectBlocks = document.querySelectorAll('.cases-list__block');
const projectImages = document.querySelectorAll('.cases-list__img');

projectBlocks.forEach((block, index) => {
    block.addEventListener('mouseenter', () => {
        // Деактивируем все элементы
        projectImages.forEach(img => {
            img.classList.remove('cases-list__img--active');
        });


        // Активируем текущий элемент
        projectImages[index].classList.add('cases-list__img--active');
    });
});