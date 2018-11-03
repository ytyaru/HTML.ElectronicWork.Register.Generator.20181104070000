window.addEventListener('DOMContentLoaded', function() {
	SetupRegisterSystemForm();
});
function SetupRegisterSystemForm() {
	document.forms.RegisterSystemForm.RegisterSystemExponential.focus();
	var rse = document.getElementById("RegisterSystemExponential");
	rse.addEventListener("change", CalcRegisterSystemValue);
	rse.addEventListener("keyup", CalcRegisterSystemValue);
	rse.addEventListener("paste", CalcRegisterSystemValue);
	rse.addEventListener("input", CalcRegisterSystemValue);
	CalcRegisterSystemValue();
}
function CalcRegisterSystemValue() {
	var RegisterSystemValue = 3 * (2 ** document.forms.RegisterSystemForm.RegisterSystemExponential.value)
	var target = document.getElementById("RegisterSystemValue");
	target.value = RegisterSystemValue;
}
