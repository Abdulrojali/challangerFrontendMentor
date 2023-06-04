let toggle=document.querySelector('.toggle i')
toggle.addEventListener('click',handlerToggle)
function handlerToggle(){
    document.querySelector('.headercontent').classList.toggle('active')
    document.querySelector('.headercontent ul').classList.toggle('active')
}
let imgSlide=document.querySelectorAll('.main-slide img')
imgSlide.forEach(el=>{
    el.addEventListener('click',function(){
        let gambar=el.getAttribute('src')
        changeImg(gambar)
    })
})
function changeImg(img){
    document.querySelector('.img-big').setAttribute('src',img)
}
let index=0
function handlerTambah(){
    document.querySelector('.contentJumlah').innerHTML=index++
    console.log(index)
}
function handlerKurang(){
    document.querySelector('.contentJumlah').innerHTML=index--
    console.log(index)
}

let button=document.querySelector('.input')
button.addEventListener('click',handlerCount)

function handlerCount(){
    index++
    document.querySelector('.count').classList.add('active')
    document.querySelector('.count').innerHTML=index
}