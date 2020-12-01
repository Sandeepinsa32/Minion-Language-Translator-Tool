var  btn = document.querySelector('#btn-click');
var txt = document.querySelector('#txt-area');

// txt.addEventListener('click',click);
btn.addEventListener('click',click);

function click(){
    // console.log('clickeddddd');
    console.log(txt);
    console.log(txt.value);
}