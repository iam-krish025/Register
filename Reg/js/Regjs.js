function resume(){
    let firstname;
    firstname=document.getElementById('fname').value;
    console.log(firstname);
    let middlename;
    middlename=document.getElementById('mname').value;
    console.log(middlename);
    let surname;
    surname=document.getElementById('sname').value;
    console.log(surname);
    document.getElementById('name').innerHTML=firstname+middlename+surname;
    let house;
    house=document.getElementById('hno').value;
    console.log(house);
    document.getElementById('hn').innerHTML=house;
    let area;
    area=document.getElementById('area').value;
    console.log(area);
    document.getElementById('colony').innerHTML=area;
    let city;
    city=document.getElementById('city').value;
    console.log(city);
    document.getElementById('town').innerHTML=city;
    let mobile;
    mobile=document.getElementById('mobile').value;
    console.log(mobile);
    document.getElementById('phone').innerHTML=mobile;
    let gender;
    gender=document.getElementById('gender').value;
    document.getElementById('gen').innerHTML=gender;
}