let count = 0;
let money = 0;

const codes = [
  "5900541012638",
  "5902768153675",
  "5902078000508",
  "5900699111481",
  "5908027130111"
];

function scan() {
  const input = document.getElementById("code");
  const status = document.getElementById("status");

  const code = input.value.trim();

  if (codes.includes(code)) {

    count++;
    money += 0.50;

    const moneyText =
      money.toFixed(2).replace(".", ",") + " zł";

    status.innerHTML =
      "🟢<br>ZWROT PRZYJĘTY!";

    document.getElementById("count").textContent = count;
    document.getElementById("money").textContent = moneyText;

    document.getElementById("receiptCount").textContent = count;
    document.getElementById("receiptTotal").textContent = moneyText;
    document.getElementById("receiptTotalBig").textContent = moneyText;
    document.getElementById("receiptDate").textContent =
      new Date().toLocaleString("pl-PL");

    input.value = "";

  } else {

    status.innerHTML =
      "🔴<br>NIEPRAWIDŁOWE OPAKOWANIE";
  }
}

function drukujBon() {
  window.print();
}
