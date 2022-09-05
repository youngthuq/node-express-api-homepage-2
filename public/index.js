console.log('hejsa')
let hvalDiv=document.querySelector('#hvaler')
let datoDiv=document.querySelector('#Dato')
hvalDiv.style.top = '90vh';

document.querySelector('#hvaler h2').addEventListener('click',()=>{
    if(hvalDiv.style.top == '90vh'){
        hvalDiv.style.top = 0;
    }else{
    hvalDiv.style.top =  '90vh';
    }
})

document.querySelector('#submitH').addEventListener('click', ()=>{
    fetch('http://localhost:4040/api/hvaler')
        .then(res => res.json())
            .then(json => document.querySelector('#hvaler .json'). innerHTML = JSON.stringify( json))
})

document.querySelector('#Dato h2').addEventListener('click',()=>{
    if(datoDiv.style.top == '90vh'){
        datoDiv.style.top = 0;
    }else{
    datoDiv.style.top =  '90vh';
    }
})