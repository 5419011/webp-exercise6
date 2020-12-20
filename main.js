const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i < 6; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic" + i + ".jpg");
    thumbBar.appendChild(newImage);
};
thumbBar.addEventListener('click', function (e) {
    const src_img = e.target.getAttribute('src');
    displayedImage.setAttribute('src', src_img);
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function (e) {
    const colorbtn = btn.getAttribute('color');
    if(colorbtn == 'Darken'){
        btn.setAttribute('color','Lighten');
        btn.textContent='Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.setAttribute('color','Darken');
        btn.textContent='Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});