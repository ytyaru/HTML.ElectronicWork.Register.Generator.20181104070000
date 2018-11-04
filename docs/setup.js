window.addEventListener('DOMContentLoaded', function() {
	SetupRegisterSystemForm();
	SetupRegisterSystemValuesForm();
});
function SetupRegisterSystemForm() {
	document.forms.RegisterSystemForm.RegisterSystemExponential.focus();
	var rse = document.getElementById("RegisterSystemExponential");
	rse.addEventListener("change", CalcRegisterSystemValue);
	rse.addEventListener("keyup", CalcRegisterSystemValue);
	rse.addEventListener("paste", CalcRegisterSystemValue);
	rse.addEventListener("input", CalcRegisterSystemValue);
	CalcRegisterSystemValue();
	SetupRegisterSystemValuesRoot();
}
function CalcRegisterSystemValue() {
	var RegisterSystemValue = 3 * (2 ** document.forms.RegisterSystemForm.RegisterSystemExponential.value)
	var target = document.getElementById("RegisterSystemValue");
	target.value = RegisterSystemValue;
	SetupRegisterSystemValuesRoot();
}
function SetupRegisterSystemValuesRoot() {
	document.forms.RegisterSystemValuesForm.RegisterSystemValuesRoot.setAttribute("max", parseInt(document.forms.RegisterSystemForm.RegisterSystemValue.value));
	document.forms.RegisterSystemValuesForm.RegisterSystemValuesRoot.value = parseInt (document.forms.RegisterSystemForm.RegisterSystemValue.value);
	CalcOhm();
}
function SetupRegisterSystemValuesForm() {
	var rsr = document.getElementById("RegisterSystemValuesRoot");
	rsr.addEventListener("change", CalcOhm);
	rsr.addEventListener("keyup", CalcOhm);
	rsr.addEventListener("paste", CalcOhm);
	rsr.addEventListener("input", CalcOhm);
	var rse = document.getElementById("RegisterSystemValuesExponential");
	rse.addEventListener("change", CalcOhm);
	rse.addEventListener("keyup", CalcOhm);
	rse.addEventListener("paste", CalcOhm);
	rse.addEventListener("input", CalcOhm);
	CalcOhm();
}
function CalcOhm() {
	var target = document.getElementById("RegisterSystemValue");
	var RegisterSystemValue = Number(target.value);
	var Ohm = (10 ** (document.forms.RegisterSystemValuesForm.RegisterSystemValuesRoot.value / RegisterSystemValue )) * (10 ** document.forms.RegisterSystemValuesForm.RegisterSystemValuesExponential.value);
	console.log(document.forms.RegisterSystemValuesForm.RegisterSystemValuesExponential.value);
	console.log(document.forms.RegisterSystemValuesForm.RegisterSystemValuesRoot.value);
	console.log(RegisterSystemValue);
	var target = document.getElementById("Ohm");
	target.value = Ohm;
}
