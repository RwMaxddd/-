const datas = {
    carouselList:document.querySelector('.carousel-list'),
    circles:document.querySelectorAll('.button-circles .circle'),
    allowLeft:document.querySelector('.allow-left'),
    allowRight:document.querySelector('.allow-right'),
    currentIndex:1,
    carouselListLenth:document.querySelectorAll('.carousel-item').length
}

function moveTo(index){
    console.log(index)
    const circle = document.querySelector('.button-circles .circle.active')
    if(circle){
        circle.classList.remove('active')
    }
    datas.carouselList.style.transform = `translateX(-${index * 500}px)`
    datas.carouselList.style.transition = 'transform .5s'
    datas.circles[index - 1].classList.add('active')
    datas.currentIndex = index
}

function leftNext(){
    if(datas.currentIndex === 1){
        datas.carouselList.style.transform = `translateX(-${(datas.carouselListLenth + 1) * 500}px)`
        datas.carouselList.style.transition = ''
        datas.carouselList.clientLeft
        moveTo(datas.carouselListLenth)
    }else{
        moveTo(datas.currentIndex - 1)
    }
}
function rightNext(){
    if(datas.currentIndex === datas.carouselListLenth){
        datas.carouselList.style.transform = `translateX(0px)`
        datas.carouselList.style.transition = ''
        datas.carouselList.clientLeft
        moveTo(1)
    }else{
        moveTo(datas.currentIndex + 1)
    }
}

function init(){
    const first = datas.carouselList.firstElementChild.cloneNode(true)
    const last = datas.carouselList.lastElementChild.cloneNode(true)
    datas.carouselList.append(first)
    datas.carouselList.prepend(last)
    datas.carouselList.style.transform = `translateX(-500px)`
    datas.circles[0].classList.add('active')
    datas.circles.forEach((item,index)=>{
        console.log(item,index + 1)
        item.addEventListener('click',() => moveTo(index + 1))
    })
}

datas.allowLeft.addEventListener('click',leftNext)
datas.allowRight.addEventListener('click',rightNext)

init()