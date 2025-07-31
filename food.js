let foodItem = document.querySelectorAll('.foodItem')
let title = foodItem.forEach((item)=>{
            item.addEventListener('click', e=>{
        
                let topUp = document.querySelector('.topUp')
                
                let blur = document.createElement('div')
                blur.classList.add('blur')
                topUp.appendChild(blur)
                
                let pay = document.createElement('div')
                pay.classList.add('pay')
                topUp.appendChild(pay)

                let heading = document.createElement('h1')
                heading.innerText = 'Order Summary'
                heading.classList.add('payHeading')
                pay.appendChild(heading)

                let itemName = document.createElement('h2')
                itemName.innerText = 'for '+item.dataset.title 
                itemName.classList.add('itemName')
                pay.appendChild(itemName)

                let total = document.createElement('h3')
                total.classList.add('total')
                let amount = parseInt(item.dataset.price)
                if(amount <=100){
                    total.innerText = 'Additional Delivery Charges = '+ (40) + '\n Total Payble Amount = ' +(amount+40)   
                }
                else{
                    total.innerText = 'Additional Delivery Charges = '+ (0) +'\n Total Payble Amount = '+ item.dataset.price
                }
                pay.appendChild(total)
                
                let back = document.createElement('button')
                back.innerText = 'BACK'
                back.classList.add('backBtn')
                pay.appendChild(back)
                back.onclick=()=>{
                    blur.remove()
                    pay.remove()
            }
    })
})

function change(){
    let atharva = document.querySelector('#atharva')
    atharva.innerText = 'red'
    atharva.onclick.style.backgroundColor = 'white'
}