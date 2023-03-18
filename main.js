"use strict "

const body=document.querySelector('body')
const container=document.createElement('div')
body.appendChild(container)
const div1=document.createElement('div')
div1.classList.add('section-1')
container.appendChild(div1)
container.classList.add('container')
const labelsArr = [{name:'Name',type:'text',placeholder:'Enter your name..'},{name:'Age',type:'number',placeholder:'Your age..'},{name:'Gender',type:'text',placeholder:'Male or Female'},{name:'Occupation',type:'text',placeholder:''},{name:'Salary',type:'number',placeholder:'Salary amount'},{name:'Contact No.',type:'number',placeholder:'Enter your Mobile No.'}];
const labelArrLength = labelsArr.length;



labelsArr.forEach((val,i)=>{

    const labels = document.createElement('label');
    labels.classList.add('label');
    labels.innerText =`${val.name}`;

    const inputField = document.createElement('input');
    inputField.type=`${val.type}`;

    inputField.classList.add(`input`);
    inputField.classList.add(`input${i}`);
    inputField.setAttribute('required','')
    inputField.setAttribute('placeholder',`${val.placeholder}`)


    div1.insertAdjacentElement('beforeend',labels);
    div1.insertAdjacentElement('beforeend',inputField);
});

const submitBtn = document.createElement('button');
submitBtn.innerText ='SUBMIT';
submitBtn.classList.add('btn');

div1.insertAdjacentElement('beforeend',submitBtn)



/// using local storage 
const in0   =    document.querySelector('.input0')
const in1   =    document.querySelector('.input1')
const in2   =    document.querySelector('.input2')
const in3   =    document.querySelector('.input3')
const in4   =    document.querySelector('.input4')
const in5   =    document.querySelector('.input5')
in4.type='number'
in1.type='number'
in5.type='number'


let a =[]

document.querySelector('.btn').addEventListener('click',()=>{
    if(in0.value =='' && in1.value ==''  && in5.value =='')return;

        const obj={
            name:`${ in0.value}`
            ,age:`${ in1.value}`
            ,gender: `${in2.value}`
            ,occupation:`${in3.value}`
            ,salary:`${in4.value}`
            ,contactNo:`${in5.value}`
        }
        a.push(obj)
        localStorage.setItem('keyData',JSON.stringify(a))
        runWhenCalled()
        document.querySelectorAll('input').forEach(val=>val.value='')

})


window.onload=()=>{

    const local= JSON.parse(localStorage.getItem('keyData'))
    if(local !==null){
        a=local
    }
    
}


const div2=document.createElement('div')
div2.classList.add('tables-sec')
container.insertAdjacentElement('beforeend',div2)
function runWhenCalled(){
    div2.innerHTML=''
    const table=document.createElement('table');
    const thead=document.createElement('thead');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        labelsArr.forEach((val)=>{
                const th=document.createElement('th');
                th.innerText = `${val.name}`
                thead.insertAdjacentElement('beforeend',th)
                table.insertAdjacentElement('beforeend',thead)
            });

    
        b=JSON.parse(localStorage.getItem('keyData'));
            if(b==null)return
                b.forEach((val)=>{
                    const header=document.createElement('tr')
                    Object.values(val).forEach(run=>{
                        const tdata=document.createElement('td');
                        tdata.innerText=`${run}`
                        header.appendChild(tdata)
                    })
                    
                table.insertAdjacentElement('beforeend',header);
                div2.insertAdjacentElement('afterbegin',table);

            })
}

runWhenCalled()