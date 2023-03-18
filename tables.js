const div2=document.createElement('div')
div2.classList.add('tables-sec')
submitBtn.insertAdjacentElement('afterend',div2)
function runWhenCalled(){
    div2.innerHTML=''
    const table=document.createElement('table');
    const thead=document.createElement('thead');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        labelsArr.forEach((val)=>{
                const th=document.createElement('th');
                th.innerText = `${val}`
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