var selectedOperator = '';
var selectedValue = 0;
var selectedPaymentOption = '';
// Pág Operadora /////////////////////////////////////////////////////////
function selectOperadora(operadora) {
selectedOperadora = operadora;
document.getElementById('selectedOperadora').innerText = operadora;
document.getElementById('operadoraSelection').style.display = 'none';
document.getElementById('idNumber').style.display = 'block';
}
// Pág número//////////////////////////////////////////////////////
function numberConfirm(numero) {
numberConfirmed = numero;
document.getElementById('numero').innerText= numero;
document.getElementById('idNumber').style.display = "none"
document.getElementById('valueSelection').style.display = 'block';
}
//Pág Valor da recarga ///////////////////////////////////////////////////////////////////
function selectValue(value) {
selectedValue = value;
document.getElementById('selectedValue').innerText = value;
document.getElementById('valueSelection').style.display = 'none';
document.getElementById('paymentSelection').style.display = 'block';
}
//Pág Pagamento ////////////////////////////////////////////////////////////////////////////
function selectPaymentOption(option) {
selectedPaymentOption = option;
document.getElementById('paymentOption').innerText = option;
document.getElementById('paymentSelection').style.display = 'none';

if (option === 'Cartão de Crédito') {
document.getElementById('creditCardInfo').style.display = 'block';
} else if (option === 'pix') {
document.getElementById('pixCode').style.display = 'block';
}
}

function finalizarCompra() {
  document.getElementById('creditCardInfo').style.display = 'none';
  document.getElementById('checkout').style.display = 'block'

}
// Pág Finalizar recarga ////////////////////////////////////////////////////////////////
function finalizarRecarga() {
alert('Recarga finalizada com sucesso!');
location.reload(); 
}