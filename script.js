const formatButton = document.getElementById("format-button");
const jsonInput = document.getElementById("json-input");
const jsonOutput = document.getElementById("json-output");

formatButton.addEventListener("click", () => {
  try {
    const json = JSON.parse(jsonInput.value);
    jsonOutput.textContent = JSON.stringify(json, null, 2);
  } catch (error) {
    jsonOutput.textContent = "Invalid JSON";
  }
});
