function calculateValue(event){
    event.preventDefault();
    let value = document.getElementById('inputValue').value;
    let numOfPeople = document.getElementById('people').value;

    if (value == '' | value == 0){
        return alert("Por favor, preencha os valores corretamente")
    }
    
    if (numOfPeople == '' | numOfPeople <= 1){
        numOfPeople = 1;
        document.getElementById('each').style.display = 'none';
    } else{
        document.getElementById('each').style.display = 'block';
    }
    let total = (value / numOfPeople);
    total = total.toFixed(2);
    document.getElementById('value').innerHTML = total;
    document.getElementById('total').style.display = 'block';
    document.getElementById('value').style.display = 'block';

}

document.getElementById('total').style.display = 'none';
document.getElementById('value').style.display = 'none';

document.getElementById('form').addEventListener('submit', calculateValue);