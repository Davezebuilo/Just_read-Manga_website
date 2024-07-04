// to give the navbar shadow when user scrolls
const navbarL = document.getElementById('laptop-nav');
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 100){
        navbarL.style.boxShadow = '0px 0px 3px 8px rgba(0, 0, 0, 0.02)';
    }else{
        navbarL.style.boxShadow = 'none';
    }
})

const searchbar = document.getElementById('search');
const searchIcon = document.getElementById('search-icon');
const searchClose = document.getElementById('search-close');

document.addEventListener('DOMContentLoaded', ()=>{
    if(searchbar.style.display = 'none'){
        searchIcon.addEventListener('click', ()=>{
            // searchbar.style.display = 'block';
            // searchIcon.style.display = 'none';
            gsap.to(searchbar, {
                duration: 0.3,
                opacity: 1,
                width: 250,
                // ease: 'power1.in',
                display: 'block',
                onComplete:()=>{
                    // searchIcon.style.display = 'none';
                }
            })
            searchClose.addEventListener('click', ()=>{
                // searchbar.style.display = 'none';
                // searchIcon.style.display = 'block';
                gsap.to(searchbar, {
                    duration: 0.3,
                    opacity: 0,
                    width: 0,
                    // ease: 'power1.in',
                    display: 'none',
                    onComplete:()=>{
                        // searchIcon.style.display = 'none';
                    }
                })
            })
        })
    }else{
        searchbar.style.display = 'none'
    }
})