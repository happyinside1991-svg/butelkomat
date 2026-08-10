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
  const code = document.getElementById("code").value.trim();

  if (codes.includes(code)) {
    count++;
    money += 0.50;

    document.getElementById("status").innerHTML =
      "🟢<br>ZWROT PRZYJĘTY!";

    document.getElementById("count").textContent = count;

    const moneyText =
      money.toFixed(2).replace(".", ",") + " zł";

    document.getElementById("money").textContent = moneyText;

    document.getElementById("receiptCount").textContent = count;
    document.getElementById("receiptTotal").textContent = moneyText;
    document.getElementById("receiptTotalBig").textContent = moneyText;

    document.getElementById("receiptDate").textContent =
      new Date().toLocaleString("pl-PL");
  } else {
    document.getElementById("status").innerHTML =
      "🔴<br>NIEPRAWIDŁOWE OPAKOWANIE";
  }
}

function drukujBon() {
  window.print();
}
