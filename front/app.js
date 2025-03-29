


function showBmi(){
    let a = document.querySelector('.num1').value;
    let b = document.querySelector('.num2').value;
    let c = document.querySelector('.numf')
    a=a/100;
    let bmiFinal=b/(a*a);
    c.value=bmiFinal
}




