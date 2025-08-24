const DEDUCTION_RATES = new Map([
  ["AHV", 8.7],
  ["IV", 0.5],
  ["EO", 1.4],
  ["ALV", 1.1],
  ["NBU", 0.73],
  ["PK", 9.8],
]);

const turnedAtLeast17LastYear = (born) =>
  new Date().getFullYear() - born.getFullYear() >= 17;

const calculateDeductions = (born, monthlyGrossSalary) => {
  const deductions = new Map();
  const yearlyGrossSalary = 12 * monthlyGrossSalary;
  if (turnedAtLeast17LastYear(born)) {
    ["AHV", "IV", "EO"].forEach((s) =>
      deductions.set(s, (DEDUCTION_RATES.get(s) / 100.0) * monthlyGrossSalary),
    );
  }
  if (yearlyGrossSalary > 2500) {
    ["ALV", "NBU"].forEach((s) =>
      deductions.set(s, (DEDUCTION_RATES.get(s) / 100.0) * monthlyGrossSalary),
    );
  }
  if (yearlyGrossSalary > 22680) {
    deductions.set(
      "PK",
      (DEDUCTION_RATES.get("PK") / 100.0) * monthlyGrossSalary,
    );
  }
  return deductions;
};

const inline = (tag, text) => {
  const element = document.createElement(tag);
  element.appendChild(document.createTextNode(text));
  return element;
};

const block = (tag, ...children) => {
  const element = document.createElement(tag);
  children.forEach((c) => element.appendChild(c));
  return element;
};

const flush = (node) => {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
};

const renderPayslip = (payslip) => {
  const payslipSection = document.getElementById("payslip");
  flush(payslipSection);
  const formatDate = (d) => `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`;
  const formatNumber = (n) =>
    n.toLocaleString("ch", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  const totalDeductions = payslip.deductions
    .values()
    .reduce((acc, v) => acc + v);
  const netSalary = payslip.grossSalary - totalDeductions;
  const title = `Lohnabrechnung für ${payslip.name} (* ${formatDate(payslip.born)})`;
  const h2 = inline("h2", title);
  const grossSalaryRow = block(
    "tr",
    inline("td", "Brutttolohn"),
    inline("td", formatNumber(payslip.grossSalary)),
  );
  const deductionRows = payslip.deductions
    .entries()
    .map((e) =>
      block("tr", inline("td", e[0]), inline("td", formatNumber(-e[1]))),
    );
  const netSalaryRow = block(
    "tr",
    block("td", inline("strong", "Nettolohn")),
    block("td", inline("strong", formatNumber(netSalary))),
  );
  const table = block(
    "table",
    ...[grossSalaryRow, ...deductionRows, netSalaryRow],
  );
  payslipSection.appendChild(h2);
  payslipSection.appendChild(table);
};

document.addEventListener("DOMContentLoaded", () => {
  const txtName = document.getElementsByName("fullname")[0];
  const txtBorn = document.getElementsByName("born")[0];
  const txtGrossSalary = document.getElementsByName("grossSalary")[0];
  const btnCalculate = document.getElementsByName("calculate")[0];
  btnCalculate.addEventListener("click", () => {
    const name = txtName.value;
    const born = new Date(Date.parse(txtBorn.value));
    const grossSalary = Number.parseFloat(txtGrossSalary.value);
    const deductions = calculateDeductions(born, grossSalary);
    renderPayslip({
      name: name,
      born: born,
      grossSalary: grossSalary,
      deductions: deductions,
    });
  });
});
