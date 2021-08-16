 document.getElementById('deposit-btn').addEventListener('click', function () {
   
    const depositInput = document.getElementById('deposit-amount');
    const newAmount = depositInput.value;
    
    
    const previousTotal = document.getElementById('total-deposit');
    const currentDepositAmount = previousTotal.innerText;
    // console.log(currentDepositAmount);
    const newDepositTotal = parseFloat(currentDepositAmount) + parseFloat(newAmount);
    // console.log(newDepositTotal);

    previousTotal.innerText = newDepositTotal;
    
    const previousBalance = document.getElementById('balance');
    const currentBalance = previousBalance.innerText
    // console.log(currentBalance);
    const newBalance = parseFloat(currentBalance) + parseFloat(newAmount);
    previousBalance.innerText = newBalance;


    // clear input 
    depositInput.value = '';
}) 


// withdraw 


document.getElementById('withdraw-btn').addEventListener('click', function () {

//    target withdraw input 
    
    const withdrawInput = document.getElementById('withdraw-amount');
    const newWithdrawAmount = withdrawInput.value;
    // console.log(newWithdrawAmount);
    
    // targeet previous withdrawl 

    const previouswithdrawTotal = document.getElementById('withdraw');
    // console.log(previouswithdrawTotal);
    const currentWithdrawAmount = previouswithdrawTotal.innerText;
    // console.log(currentWithdrawAmount);
    
    // new withdraw 

    const newWithdrawTotal = parseFloat(currentWithdrawAmount) + parseFloat(newWithdrawAmount);
    

    // increase total withdraw 

    previouswithdrawTotal.innerText = newWithdrawTotal;


    // reduce total balance 
    
    const previousBalance = document.getElementById('balance');
    const currentBalance = previousBalance.innerText;
    
    const newBalance = parseFloat(currentBalance) - parseFloat(newWithdrawAmount);
    previousBalance.innerText = newBalance;


    // clear input 
    withdrawInput.value = '';
})
