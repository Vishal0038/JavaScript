document.addEventListener("submit",function(event){
    // prevent refresh
    event.preventDefault();
    // value gets the value of the input
    let name=document.getElementById('Name').value
    let age=document.getElementById('Age').value
    let qual=document.getElementById('Qualification').value
    let district=document.getElementById('District').value

    console.log(name)
    console.log(age)
    console.log(qual)
    console.log(district)
    // createElement
    let row=document.createElement('tr');
    let col1 = document.createElement('td');
    let col2=document.createElement('td')
    let col3=document.createElement('td')
    let col4=document.createElement('td')
    // textContent
    col1.textContent=name;
    col2.textContent=age;
    col3.textContent=qual;
    col4.textContent=district;
    // appends to the row
    row.append(col1,col2,col3,col4);
    // appends to the table
    document.getElementById('table').append(row)


    // document.getElementById('name1').innerHTML=name
    // document.getElementById('age1').innerHTML=age
    // document.getElementById('qual1').innerHTML=qual
    // document.getElementById('dist1').innerHTML=district

})
