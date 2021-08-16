const depositTotal = document.getElementById("deposit-total");
const withdrawTotal = document.getElementById("withdraw-total");
const balanceTotal = document.getElementById("balance-total");

const depositAmount = document.getElementById("deposit-amount");
const withDrawAmount = document.getElementById("withdraw-amount");

const depositButton = document.getElementById("deposit-btn");
const withdrawButton = document.getElementById("withdraw-btn");

// alert notification
const alert = document.getElementById("alert");
function alertFun(errorMsg, check) {
  if (check == "error") {
    alert.classList.add("error");
    alert.classList.remove("success");
  } else {
    alert.classList.add("success");
    alert.classList.remove("error");
  }
  document.getElementById("msg").innerText = errorMsg;
  alert.classList.remove("hide");
  alert.classList.add("show");
  alert.classList.add("showAlert");
  setTimeout(function () {
    alert.classList.add("hide");
    alert.classList.remove("show");
  }, 5000); //hide alert automatically after 5minute
}
// alert button close
const closeButton = document.getElementById("close-btn");
closeButton.addEventListener("click", function () {
  alert.classList.add("hide");
  alert.classList.remove("show");
});

const operatorFunction = {
  "+": function (x, y) {
    return x + y;
  },
  "-": function (x, y) {
    return x - y;
  },
};

function depositWithdraw(amount, total, depWith, operator) {
  let check;
  const totalBlance = parseFloat(balanceTotal.innerText);
  const newAmount = parseFloat(amount.value);
  if (newAmount > 0) {
    if (totalBlance != 0) {
      if (depWith == "withdraw") {
        if (totalBlance >= newAmount) {
          check = true;
          alertFun(`Your withdraw amount ${newAmount}`, "success");
        } else {
          alertFun("You don't have that much mony in your bank", "error");
        }
      }
    } else {
      alertFun("Your bank balance empty", "error");
    }
    if (depWith == "deposit") {
      check = true;
      alertFun(`Your deposit amount ${newAmount}`, "success");
    }
  } else {
    alertFun("Your typing balance is less then 0", "error");
  }
  if (check == true) {
    const totalNewAmount = parseFloat(total.innerText) + newAmount;

    total.innerText = totalNewAmount;
    amount.value = "";

    const result = operatorFunction[operator](
      totalBlance,
      parseFloat(newAmount)
    );
    balanceTotal.innerText = result;
  }
}

// local storage setup
function setLocalStorageValue() {
  var testObject = {
    deposit: parseFloat(depositTotal.innerText),
    withdraw: parseFloat(withdrawTotal.innerText),
    balance: parseFloat(balanceTotal.innerText),
  };
  return testObject;
}
// deposit
depositButton.addEventListener("click", function () {
  depositWithdraw(depositAmount, depositTotal, "deposit", "+");

  localStorage.setItem("data", JSON.stringify(setLocalStorageValue()));
});

// withdraw
withdrawButton.addEventListener("click", function () {
  depositWithdraw(withDrawAmount, withdrawTotal, "withdraw", "-");
  setLocalStorageValue();
  localStorage.setItem("data", JSON.stringify(setLocalStorageValue()));
});

// localStorage.clear();

// depositTotal.innerText = ;
depositTotal.innerText = JSON.parse(localStorage.getItem("data")).deposit;
withdrawTotal.innerText = JSON.parse(localStorage.getItem("data")).withdraw;
balanceTotal.innerText = JSON.parse(localStorage.getItem("data")).balance;
