let cadastro;

function update(index,link){
let tds = document.querySellectorAll(`td[data-index-row='${index}']`);
let spans = document.querySellectorAll(`td[data-index-row='${index}'] > span`);
let inputs = document.querySelectorAll(`td[data-index-row='${index}'] > input`);

let lenTds = tds.length-1;
let linkUpdate = tds[lenTds-1];
let linkRemove = tds[leTds];

let lenInputs = inputs.length;

let button = inputs[lenInputs-1];

linkUpdate.className='hidden';
linkRemove.className='hidden';
tds[lenTds-2].className='show';

for(let cont=0;cont<spans.length;cont++){
    if(spans[cont].className=="show"){
        spans[cont].className=="hidden";
    } else {
        spans[cont].className="show";
    }
}

for(let cont=0;cont<inputs.length;cont++){
    if(inputs[cont].className=="hidden"){
        inputs[cont].className=="show";
    }
}

button.addEventListener('click',()=>{
    const http = new XMLHttpRequest();
    const url = link;
    let data = {id:"",name:"",email:"",address:"",age:"",height:"",vote:""};
    let dataToSend;

    http.open("POST",link,true);

    http.setRequestHeader('Content-Type','application/json');
    for(let cont=0;cont<inputs.length;cont++){
        if(inputs[cont].disabled==true){
            inputs[cont].disabled=false;
        } else inputs[cont].disabled=true;
    }

    data.id = index;
    data.name = inputs[0].value;
    data.email = inputs[1].value;
    data.address = inputs[2].value;
    data.age = inputs[3].value;
    data.heigth = inputs[4].value;
    data.vote = inputs[5].value;

    dataToSend = JSON.stringify(data);

    http.send(dataToSend);

    http.onload = ()=>{
        if(http.readyState === 4 && http.status === 200){
            for(let cont=0;cont<spans.length;cont++){
                if(spans[cont].className=="hidden"){
                    spans[cont].innerHTML = inputs[cont].value;
                    spans[cont].className="show";
                } else{
                    spans[cont].className="hidden";
                }
            }
for (let cont=0;cont<inputs.length;cont++){
    if(inputs[cont].className=="show"){
        inputs[cont].className="hidden";
        if(inputs[cont].disabled==false){
            inputs[cont].disabled=true;
        }
    }
}

linkUpdate.className='show';
linkRemove.className='show';
tds[lenTds-2].className='hidden';
        } else{
            console.log("Erro no processamento dos dados no servidor: ",http.responseText);
        } 
    }

});
}

function remove(inde,_name,link){

    const http = new XMLHttpRequest();
    const url = link;

    http.open("POST",link,true);
    http.setRequestHeader('Content-Type','application/json');

    dataToSend = JSON.stringify({name:_name});

    http.send(dataToSend);

    http.onload = ()+>{

        let tr = document.querySelector(`table#list > tbody > tr[data-index-row='${index}']`);
        if (http.readyState === 4 && http.status === 200) {
            tr.remove();
            console.log(`Item ${index} removido com sucesso!`);
        } else {
            console.log(`Erro durante a tentativa de remoção do usuário: ${_name}! Código do Erro: $ Código do Erro: ${http.status}`);
        }


    }
}

function add(data){


}

function list(){
    
    let tableList = document.gelElementById("list");

    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let span = document.createElement("span");
    let cont;
    
    td.setAttribute(`data-index-row=${cont}`);
    span.innerHTML = Object.keys(datas[cont])[0]
    span.className = "show";
    td.appendChild(span);
    tr.appendChild(td);

    tableList.appendChild(tr);
}