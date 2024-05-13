function clientsCreatImg() {
    function addImage(src) {
        var picture = document.createElement('picture');
        var imgContainer = document.createElement('div');
        var img = document.createElement('img');
        img.src = src;
        img.alt = "Client Image";
        imgContainer.appendChild(img);
        picture.appendChild(imgContainer);
        document.getElementById('clientsGrid').appendChild(picture);
    }

    // Пример загрузки изображений (вы можете заменить на свою логику загрузки)
    var images = [
        '/img/clients/1.png',
        '/img/clients/2.webp',
        '/img/clients/3.png',
        '/img/clients/4.png',
        '/img/clients/5.png',
        '/img/clients/6.png',
        '/img/clients/7.png',
        '/img/clients/8.png',
        '/img/clients/9.png',
        '/img/clients/10.png',
        '/img/clients/11.png',
        '/img/clients/12.png'
    ];

    // Добавляем каждое изображение в разметку
    images.forEach(function (image) {
        addImage(image);
    });
}

clientsCreatImg();