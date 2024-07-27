const form=document.querySelector('form');


//this below statement or usecase will give us empty value where we need actual values which user puts
//const weight=parseInt(document.querySelector('#weight').value)

//form submit jkn hoi tkn hoi post type noileget type e submit hoi,and server ba url e chole jai j ta ekhane thamate be karon server nei

form.addEventListener('submit', function (e){
e.preventDefault();//default action thamano hocche
const height=parseInt(document.querySelector('#height').value)//parseInt int e convert korbe
const weight=parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results');
const resultsbox = document.querySelector('#resultbox');

if(height===''|| height<=0 || isNaN(height)){
    results.innerHTML="Please give a valid height"
}else if(weight===''|| weight<=0 || isNaN(weight)){
    results.innerHTML="Please give a valid weight"
}else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
   //addind extra as assignment
    if(bmi<18.6){
        resultsbox.innerHTML = `<span>weight = ${bmi}</span>`;
        results.innerHTML = (`your weight is under weight as you have ${bmi}`);
    }
    else if(bmi=>18.6||bmi<=24.9){
        resultsbox.innerHTML = `<span>weight = ${bmi}</span>`;
        results.innerHTML = (`your weight is normal as you have ${bmi}`);
    }
    else{
        resultsbox.innerHTML = `<span>weight = ${bmi}</span>`;
        results.innerHTML = (`your weight is over weight as you have ${bmi}`);
    }
}

})