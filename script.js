let inst = document.querySelector('.inst')
let tg = document.querySelector('.tg')
let email = document.querySelector('.email')

inst.addEventListener('click',function(){
    location.assign('https://www.instagram.com/') 
})

email.addEventListener('click',function(){
    location.assign('https://mail.google.com/mail/u/0/') 
})

tg.addEventListener('click',function(){
    location.assign('https://web.telegram.org/k/') 
})