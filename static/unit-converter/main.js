const conversions = [
  [["km", "mi"], 0.62137119],
  [["m", "ft"], 3.2808399],
];
const fillWithUnits = (dropdown, units) => {
  units.forEach((unit) => {
    const option = document.createElement("option");
    option.appendChild(document.createTextNode(unit));
    dropdown.appendChild(option);
  });
};
document.addEventListener("DOMContentLoaded", () => {
  const fromValueTextbox = document.getElementsByName("fromValue")[0];
  const resultTextbox = document.getElementsByName("result")[0];
  const fromUnitDropdown = document.getElementsByName("fromUnit")[0];
  const toUnitDropdown = document.getElementsByName("toUnit")[0];
  fillWithUnits(
    fromUnitDropdown,
    conversions.map((k) => k[0][0]),
  );
  fillWithUnits(
    toUnitDropdown,
    conversions.map((k) => k[0][1]),
  );
  const convertButton = document.getElementsByName("convert")[0];
  convertButton.addEventListener("click", () => {
    const fromUnit = fromUnitDropdown.value;
    const toUnit = toUnitDropdown.value;
    const rates = conversions.filter(
      (e) => e[0][0] == fromUnit && e[0][1] == toUnit,
    );
    if (rates.length < 1) {
      alert("ERROR!");
      return;
    }
    const rate = rates[0][1];
    const fromValue = parseFloat(fromValueTextbox.value);
    const result = fromValue * rate;
    resultTextbox.value = result;
  });
});
