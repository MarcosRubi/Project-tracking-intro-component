window.onload = ()=>{
    const btnMenu = document.getElementById('toggle-menu')
    const menu = document.querySelector('.menu')

    btnMenu.onclick = ()=>{
        menu.classList.toggle('show-menu')
    }

    // ANIMACIONES DE CARGA
    const startAnimation = (entries, observer)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible')
            }
        });
    }
    const observer = new IntersectionObserver(startAnimation, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    })

    const header = document.querySelector('header')
    const bannerSpans = document.querySelectorAll('.banner span')
    const bannerTitle = document.querySelector('h1')
    const bannerDescription = document.querySelector('.banner p')
    const bannerButtons = document.querySelectorAll('.banner .btn')
    const bannerImg = document.querySelector('.banner__img')
    const footer = document.querySelector('footer')

    observer.observe(header)
    bannerSpans.forEach(span => {
        observer.observe(span)
    });
    observer.observe(bannerTitle)
    observer.observe(bannerDescription)
    bannerButtons.forEach(btn => {
        observer.observe(btn)
    });
    observer.observe(bannerImg)
    observer.observe(footer)
}