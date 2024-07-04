const imagesA = document.getElementById('imagesA');//fourth image
const imagesB = document.getElementById('imagesB');//third image
const imagesC = document.getElementById('imagesC');//second image
const imagesD = document.getElementById('imagesD');//first image

const smlImg1 = document.getElementById('sml1');
const smlImg2 = document.getElementById('sml2');
const smlImg3 = document.getElementById('sml3');


document.addEventListener('DOMContentLoaded', ()=>{
    if(heroTxt.innerHTML = 'everywhere.'){
        anywhr();
    }else{
        heroTxt.innerHTML = 'everywhere.'
    }

    if(imagesD.style.zIndex = '10'){
        firstImg();
    }else{
        imagesD.style.zIndex = '10';
    }

    if(smlImg1.style.zIndex = '13'){
        smlImgFst();
    }else{
        smlImg1.style.zIndex = '13';
    }
})

const allTime  =  function(){
    gsap.to(heroTxt, {
        duration: 1,
        delay: 0.5,
        onComplete: ()=>{
            heroTxt.innerHTML  = 'all the time.'
            heroTxt.style.color = '#08ED1F'
            evrWhr()
        }
    });
};

const evrWhr = function(){
    gsap.to(heroTxt, {
        duration: 1,
        delay: 0.5,
        onComplete: ()=>{
            heroTxt.innerHTML  = 'everywhere.'
            heroTxt.style.color = '#F29509'
            anywhr();
        }
    });
}

const anywhr = function(){
    gsap.to(heroTxt, {
        duration: 1,
        delay: 0.5,
        onComplete: ()=>{
            heroTxt.innerHTML  = 'anywhere.'
            heroTxt.style.color = '#F209CD'
            allTime();
        }
    });
}



//setting the z indexes for all images
imagesD.style.zIndex = '10';
imagesC.style.zIndex = '9';
imagesB.style.zIndex = '8';
imagesA.style.zIndex = '7';

const firstImg = function(){
    gsap.to(imagesD, {
        duration: 0.5,
        delay: 3,
        opacity: 0,
        ease: 'power1.out',
        onComplete: ()=>{
            imagesD.style.zIndex = '7';
            imagesC.style.zIndex = '10';
            imagesB.style.zIndex = '9';
            imagesA.style.zIndex = '8';
            imagesA.style.opacity = '1';
            scndImg();
        }
    })
}

const scndImg = function(){
    gsap.to(imagesC, {
        duration: 0.5,
        delay: 3,
        opacity: 0,
        ease: 'power1.out',
        onComplete: ()=>{
            imagesC.style.zIndex = '7';
            imagesB.style.zIndex = '10';
            imagesA.style.zIndex = '9';
            imagesD.style.zIndex = '8';
            imagesD.style.opacity = '1';
            trdImg();
        }
    })
}

const trdImg = function(){
    gsap.to(imagesB, {
        duration: 0.5,
        delay: 3,
        opacity: 0,
        ease: 'power1.out',
        onComplete: ()=>{
            imagesB.style.zIndex = '7';
            imagesA.style.zIndex = '10';
            imagesD.style.zIndex = '9';
            imagesC.style.zIndex = '8';
            imagesC.style.opacity = '1';
            frthImg();
        }
    })
}

const frthImg = function(){
    gsap.to(imagesA, {
        duration: 0.5,
        delay: 3,
        opacity: 0,
        ease: 'power1.out',
        onComplete: ()=>{
            imagesA.style.zIndex = '7';
            imagesD.style.zIndex = '10';
            imagesC.style.zIndex = '9';
            imagesB.style.zIndex = '8';
            imagesB.style.opacity = '1';
            firstImg();
        }
    })
}

smlImg1.style.zIndex = '13';
smlImg2.style.zIndex = '12';
smlImg3.style.zIndex = '11';

const smlImgFst = function(){
    gsap.to(smlImg1, {
        duration: 0.5,
        delay: 5,
        opacity: 0,
        ease: 'power1.out',
        onComplete: ()=>{
            smlImg1.style.zIndex = '11';
            smlImg2.style.zIndex = '13';
            smlImg3.style.zIndex = '12';
            smlImg3.style.opacity = '1';
            smlImgscnd();
        }
    })
}

const smlImgscnd = function(){
    gsap.to(smlImg2, {
        duration: 0.5,
        delay: 5,
        opacity: 0,
        ease: 'power1.out',
        onComplete: ()=>{
            smlImg2.style.zIndex = '11';
            smlImg3.style.zIndex = '13';
            smlImg1.style.zIndex = '12';
            smlImg1.style.opacity = '1';
            smlImgtrd();
        }
    })
}

const smlImgtrd = function(){
    gsap.to(smlImg3, {
        duration: 0.5,
        delay: 5,
        opacity: 0,
        ease: 'power1.out',
        onComplete: ()=>{
            smlImg3.style.zIndex = '11';
            smlImg1.style.zIndex = '13';
            smlImg2.style.zIndex = '12';
            smlImg2.style.opacity = '1';
            smlImgFst();
        }
    })
}