var heart=document.querySelector('#heart')
var post=document.querySelector('#post')
post.addEventListener('dblclick',function(){
    heart.style.display='block'
    heart.style.animation='bounce linear 1s'
    setTimeout(function(){
        heart.style.display='none'
    },1000)
})

















v

