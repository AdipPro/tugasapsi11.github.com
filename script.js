let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.logo1souvenir-text',{delay:200, origin:'top'});
sr.reveal('.img1souvenir-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});

sr.reveal('.panduan-text',{delay:200, origin:'top'});
sr.reveal('.img1souvenir-img3',{delay:450, origin:'top'});
sr.reveal('.icons3',{delay:500, origin:'left'});

sr.reveal('.tentangkami-text',{delay:200, origin:'top'});
sr.reveal('.img1souvenir-img4',{delay:450, origin:'top'});
sr.reveal('.icons4',{delay:500, origin:'left'});