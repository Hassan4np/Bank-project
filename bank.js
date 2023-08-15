// deposit anount add and total balance
document.getElementById('addDeposit').addEventListener('click', function() {
        // add deposit
        const newdeposit = document.getElementById('DepositAmount');
        const newdepositintt = newdeposit.value;
        const newdepositint = parseFloat(newdepositintt);
        // add depsoit balance
        newdeposit.value = '';
        if (isNaN(newdepositint)) {
            alert(" Give me a Number");
            return
        }
        const currentDeposit = document.getElementById('currentDeposit');
        const currentDepositintt = currentDeposit.innerText;
        const currentDepositint = parseFloat(currentDepositintt);
        const totaldeposit = currentDepositint + newdepositint;
        console.log(totaldeposit);
        currentDeposit.innerText = totaldeposit;
        // total banance
        const preamount = document.getElementById('totalamount');
        const preamountstr = preamount.innerText;
        const preamountint = parseFloat(preamountstr);
        const totalamounts = preamountint + newdepositint;
        preamount.innerText = totalamounts;

    })
    // Withdraw balance add and total balance removed;
document.getElementById('addWithwraw').addEventListener('click', function() {

    const WithdeawAmount = document.getElementById('WithdeawAmount');
    const WithdeawAmountstr = WithdeawAmount.value;
    const WithdeawAmountint = parseFloat(WithdeawAmountstr);
    WithdeawAmount.value = '';
    if (isNaN(WithdeawAmountint)) {
        alert(" Give me a Number");
        return
    }


    const currentwithdraw = document.getElementById('currentwithdraw');
    const currentwithdrawstr = currentwithdraw.innerText;
    const currentwithdrawint = parseFloat(currentwithdrawstr);
    // valid

    const preamount = document.getElementById('totalamount');
    const preamountstr = preamount.innerText;
    const preamountint = parseFloat(preamountstr);
    if (WithdeawAmountint > preamountint) {
        alert("Sorry your Balance Enought Mony");
        return
    }
    const totalwithdraw = WithdeawAmountint + currentwithdrawint;
    currentwithdraw.innerText = totalwithdraw;


    const totalamoutafterwithdeaw = preamountint - WithdeawAmountint;
    preamount.innerText = totalamoutafterwithdeaw;



    console.log(typeof currentwithdrawint)
})