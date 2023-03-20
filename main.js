"use strict "

const body=document.querySelector('body')

//creating a div by class name and appending it to body
const container=document.createElement('div')
body.appendChild(container)

// creating a div1 element which have class section-1 which will have all the input field and their labels and submit button
const div1=document.createElement('div')
div1.classList.add('section-1')
container.appendChild(div1)
container.classList.add('container')
//creating a label array so we don't have to manually create them
const labelsArr = [{name:'Name',type:'text',placeholder:'Enter your name..'},{name:'Age',type:'number',placeholder:'Your age..'},{name:'Gender',type:'text',placeholder:'Male or Female'},{name:'Occupation',type:'text',placeholder:''},{name:'Salary',type:'number',placeholder:'Salary amount'},{name:'Contact No.',type:'number',placeholder:'Enter your Mobile No.'}];
const labelArrLength = labelsArr.length;


//looping over labelsArr
labelsArr.forEach((val,i)=>{

    //creating label for all inputs and setting their innerText
    const labels = document.createElement('label');
    labels.classList.add('label');
    labels.innerText =`${val.name}`;

    //creating input filed and setting their type and attributes
    const inputField = document.createElement('input');
    inputField.type=`${val.type}`;

    inputField.classList.add(`input`);
    inputField.classList.add(`input${i}`);
    inputField.setAttribute('required','')
    inputField.setAttribute('placeholder',`${val.placeholder}`)

    div1.insertAdjacentElement('beforeend',labels);
    div1.insertAdjacentElement('beforeend',inputField);
});

//creating submitBtn and adding class
const submitBtn = document.createElement('button');
submitBtn.innerText ='SUBMIT';
submitBtn.classList.add('btn');

div1.insertAdjacentElement('beforeend',submitBtn)



/// selecting all inputs 
const in0   =    document.querySelector('.input0')
const in1   =    document.querySelector('.input1')
const in2   =    document.querySelector('.input2')
const in3   =    document.querySelector('.input3')
const in4   =    document.querySelector('.input4')
const in5   =    document.querySelector('.input5')


//creating a varaiable name (a) and assigning an empty array to it
let a =[]

//selecting submit button and adding event listener to it
document.querySelector('.btn').addEventListener('click',()=>{
    if(in0.value =='' && in1.value ==''  && in5.value =='')return;

    //creating an object to store all value
        const obj={
            name:`${ in0.value}`
            ,age:`${ in1.value}`
            ,gender: `${in2.value}`
            ,occupation:`${in3.value}`
            ,salary:`${in4.value}`
            ,contactNo:`${in5.value}`
        }

        //pushing obj to array (a)
        a.push(obj)

        //setting local storage with key (keyData) and passing array (a) 
        localStorage.setItem('keyData',JSON.stringify(a))

        //calling runWhenCalled function
        runWhenCalled()

        //emtptying all input fileds
        document.querySelectorAll('input').forEach(val=>val.value='')

})



// creating a new div by classname tables-sec  and appending it to container div
const div2=document.createElement('div')
div2.classList.add('tables-sec')
container.insertAdjacentElement('beforeend',div2)

//this function 
// --->1. clear div2 which will have all the tables data 
// --->2. creating tables again with new data by looping over labelArr

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

//this function get data from local storage and check if its not null then set variable a=local
// or if loacl storage is null then show message DATA IS NOT AVAILABLE

window.onload=()=>{

    const local= JSON.parse(localStorage.getItem('keyData'))
    if(local !==null){
        a=local
    }else if(local == null){
    const heading=    document.createElement('h2')
        heading.innerText=`Data is not available`
        
        div2.appendChild( heading)
    }

    
}