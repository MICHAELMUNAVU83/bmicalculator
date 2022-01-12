document.getElementById('btno').addEventListener('click', calculate)


function calculate(){

    let mass = Number (document.getElementById('weight').value)
    let tall =Number(document.getElementById('height').value ) 
    let bmi = mass/ tall ** 2
    document.getElementById('yourBmi').innerHTML = "YOUR BMI IS " + bmi
    if( bmi <24.5){
        document.getElementById('infoHealth').innerHTML= 'YOU ARE HEALTHY'
    }
    else {
        document.getElementById('infoHealth').innerHTML= 'YOU ARE OVERWEIGHT'
        
       
    }
}