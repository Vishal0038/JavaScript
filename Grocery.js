let amount=0

document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();

    
    let pro=document.getElementById('product').value
    let quan=document.getElementById('quantity').value
    let price=document.getElementById('price').value

    console.log(pro)
    console.log(quan)
    console.log(price)

    let quan1=parseInt(quan)
    let price1=parseInt(price)

    let list=document.createElement('tr')
    let col1=document.createElement('td')
    let col2=document.createElement('td')
    let col3=document.createElement('td')
    let col4=document.createElement('td')

    col1.textContent=pro
    col2.textContent=quan1
    col3.textContent=price1
    col4=quan1*price1
    list.append(col1,col2,col3,col4)
    document.getElementById('table').append(list)  
    let sum=(amount+=col4)
    
    document.getElementById('total').innerHTML=sum
}
)
