"use strict "

const body=document.querySelector('body')
const div1=document.createElement('div')
div1.classList.add('section-1')
body.appendChild(div1)
const labelsArr = ['Name','Age','Gender','Occupation','Salary','Contact No.'];
const labelArrLength = labelsArr.length;



labelsArr.forEach((val,i)=>{

    const labels = document.createElement('label');
    labels.classList.add('label');
    labels.innerText =`${val}`;

    const inputField = document.createElement('input');
    inputField.type ='text';
    inputField.classList.add(`input`);
    inputField.classList.add(`input${i}`);
    inputField.setAttribute('required','')


    div1.insertAdjacentElement('beforeend',labels);
    div1.insertAdjacentElement('beforeend',inputField);
});

const submitBtn = document.createElement('button');
submitBtn.innerText ='submit';
submitBtn.classList.add('btn');

div1.insertAdjacentElement('afterend',submitBtn)



/// using local storage 
const in0   =    document.querySelector('.input0')
const in1   =    document.querySelector('.input1')
const in2   =    document.querySelector('.input2')
const in3   =    document.querySelector('.input3')
const in4   =    document.querySelector('.input4')
const in5   =    document.querySelector('.input5')

let a =[]

document.querySelector('.btn').addEventListener('click',()=>{
    if(in0.value !=='' && in1.value !==''  && in3.value !==''  && in5.value !==''){

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
    }

})


window.onload=()=>{
    a= JSON.parse(localStorage.getItem('keyData'))
    
}


