const servicesTitle = document.querySelector('.services__title');
const tabs = document.querySelectorAll('.services__link');
const header = document.querySelector('.header');

for (let tab of tabs) {
    tab.addEventListener('mouseenter', function(event) {
        const name = event.target.dataset.name;
        header.style.backgroundImage = `url(img/${name}.svg)`;
        header.classList.add('white');
        servicesTitle.classList.add(name);


    });

    tab.addEventListener('mouseleave', function() {
        header.style.backgroundImage = '';
        servicesTitle.classList.remove('uslugi', 'works', 'design', 'remont');
        header.classList.remove('white');
    });
}