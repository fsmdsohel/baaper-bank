const depositTotal = document.getElementById("deposit-total");
const withdrawTotal = document.getElementById("withdraw-total");
const balanceTotal = document.getElementById("balance-total");

const depositAmount = document.getElementById("deposit-amount");
const withDrawAmount = document.getElementById("withdraw-amount");

const depositButton = document.getElementById("deposit-btn");
const withdrawButton = document.getElementById("withdraw-btn");

// deposit
depositButton.addEventListener("click", function () {
  const depositAmountNew = depositAmount.value;
  const depositTotalNewAmount =
    parseFloat(depositTotal.innerText) + parseFloat(depositAmountNew);

  depositTotal.innerText = depositTotalNewAmount;
  depositAmount.value = "";

  balanceTotal.innerText =
    parseFloat(depositAmountNew) + parseFloat(balanceTotal.innerText);
});

// withdraw
withdrawButton.addEventListener("click", function () {
  const withdrawAmountNew = withDrawAmount.value;
  const withdrawTotalNewAmount =
    parseFloat(withdrawTotal.innerText) + parseFloat(withdrawAmountNew);

  withdrawTotal.innerText = withdrawTotalNewAmount;

  withDrawAmount.value = "";
  balanceTotal.innerText =
    parseFloat(balanceTotal.innerText) - parseFloat(withdrawAmountNew);
});
