

function photographerFactory(data) {
    // console.log(data);
    const { name, id, city, country,  tagline, price, portrait, photographerId, 
        title, image, likes, video } = data;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
    // const mediaImg = `assets/photographers/${photographerId}/${image}`;
    // const mediaVid = `assets/photographers/${photographerId}/${video}`;
    // console.log(media)
    

    function getUserCardDOM() {

        const article = document.createElement('article');
        article.setAttribute('id', id);
        
       
        const a = document.createElement('a');
        a.setAttribute('href', 'http://127.0.0.1:5501/photographer.html?id=' + id);

        const img = document.createElement('img');
        img.setAttribute("src", picture);
        
        const h2 = document.createElement('h2');
        h2.textContent = name;
        

        const h3 = document.createElement('h3');
        h3.textContent = city + ', ' + country;
        h3.style.color = "#901C1C";
        h3.style.fontWeight = 400;
        h3.style.fontSize = '13px';
        h3.style.marginTop = '-10%';

        const pTagline = document.createElement('p');
        pTagline.textContent = tagline;
        pTagline.style.fontSize = '10px';
        pTagline.style.marginTop = '-3%';

        const pPrice = document.createElement('p');
        pPrice.textContent = price + '€/jour';
        pPrice.style.fontSize = '9px';
        pPrice.style.color = '#757575';
        pPrice.style.marginTop = '-1%';

        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(pTagline);
        article.appendChild(pPrice);
        return (article);
    }

    function getPhotographerMeta() {

        const header = document.getElementById('photograph-header');

        const divProfile = document.createElement('div');
        divProfile.setAttribute("class", 'photographer-profile');

        const divPortrait = document.createElement('div');
        divPortrait.setAttribute("class", "user");

        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("class", "user-img");

        const h1 = document.createElement('h1');
        h1.textContent = name;

        const pLocation = document.createElement('p');
        pLocation.textContent = city + ', ' + country;
        pLocation.setAttribute('class', 'photographer-location');

        const pTagline = document.createElement('p');
        pTagline.textContent = tagline;
        pTagline.setAttribute('class', 'photographer-tagline');

        
        header.appendChild(divProfile);
        header.appendChild(divPortrait);
        
        divPortrait.appendChild(img);
        divProfile.appendChild(h1);
        divProfile.appendChild(pLocation);
        divProfile.appendChild(pTagline);
        return(header);
    }

    function getPhotographerMedia() {

        const photoDiv = document.createElement('div');
        photoDiv.setAttribute('class', 'photographer-media');

        // console.log(mediaImg);
        // console.log(mediaVid);
        let link = document.createElement('a');
        if(data.image != undefined){
            link = document.createElement('a');
            link.setAttribute("href", `assets/photographers/${photographerId}/${data.image}`);
            link.setAttribute("class", 'link-img');
        }else{
            link = document.createElement('a');
            link.setAttribute("href", `assets/photographers/${photographerId}/${data.video}`);
            link.setAttribute("class", 'link-vid');
        }

        let media = document.createElement('img');
        if(data.image != undefined){
            media = document.createElement('img');
            media.setAttribute("src", `assets/photographers/${photographerId}/${data.image}`);
            media.setAttribute("class", 'thumb-img');
        }else{
            media = document.createElement('video');
            media.setAttribute("src", `assets/photographers/${photographerId}/${data.video}`);
            media.setAttribute("type", "video/mp4");
            media.setAttribute("class", 'thumb-vid');
        }

        const mediaHeader = document.createElement('div');
        mediaHeader.setAttribute('class', 'media-header');

        const pTitle = document.createElement('p');
        pTitle.textContent = title;
        pTitle.setAttribute('class', 'img-title');

        const pLikes = document.createElement('p');
        pLikes.textContent = likes;
        pLikes.setAttribute('class', 'numb-likes');

        const btnLike = document.createElement('button');
        btnLike.setAttribute('id', 'btn-like');

        const heartLike = document.createElement('i');
        heartLike.setAttribute('class', 'fas fa-heart');

        photoDiv.appendChild(mediaHeader);
        photoDiv.appendChild(link);
        link.appendChild(media);
        mediaHeader.appendChild(pTitle);
        mediaHeader.appendChild(pLikes);
        mediaHeader.appendChild(btnLike);
        btnLike.appendChild(heartLike);
        return(photoDiv);
    }

    return { name, picture, getUserCardDOM, getPhotographerMeta, getPhotographerMedia }
}