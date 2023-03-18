const table=document.createElement('table');
const tr=document.createElement('tr');


labelsArr.forEach((val)=>{
    const th=document.createElement('th');
    th.innerText = `${val}`
    tr.insertAdjacentElement('beforeend',th)
    table.insertAdjacentElement('beforeend',tr)
    submitBtn.insertAdjacentElement('afterend',table);
    
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function runWhenCalled(){
    let b =JSON.parse(localStorage.getItem('keyData'))
        b.forEach((val)=>{
            const header=document.createElement('tr')
            Object.values(val).forEach(run=>{
                const tdata=document.createElement('td');
                tdata.innerText=`${run}`
                header.appendChild(tdata)
            })
            table.insertAdjacentElement('beforeend',header)

    })
}

