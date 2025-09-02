const validPin = 1234;

document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();
    const bank = document.getElementById('select-bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('add-amount').value);
    const pin = document.getElementById('pin-number').value;

    if(accountNumber.length < 11){
        alert('Please input valid number');
        return;
    }

    if(pin != validPin){
        alert('Please provide valid pin number');
        return;
    }
    
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    console.log(availableBalance);
    const totalAvailableBalance = amount + availableBalance;
    document.getElementById('available-balance').innerText= totalAvailableBalance;
    
})