let tipAmount = 0; // Чаевые в $ офицанта
let change = 0; // Сдача
const output = document.querySelector('.output');
output.style.display = 'none';

document.getElementById('submit-btn').addEventListener('click', function() {
    output.style.display = 'flex';

    const clientPaymentInput = document.getElementById('clientPayment').value;
    const billAmountInput = document.getElementById('billAmount').value;

    let clientPaymentNumber = Number(clientPaymentInput);
    let billAmountNumber = Number(billAmountInput);
    
    // Проверка, что введены корректные числа
    if (isNaN(clientPaymentNumber) || isNaN(billAmountNumber) || clientPaymentInput === "" || billAmountInput === "" || clientPaymentNumber < 0 || billAmountNumber < 0) {
        alert('Введите корректное число');
        return;
    }

    // Расчет чаевых
    tipAmount = billAmountNumber > 100 ? billAmountNumber * 0.1 : billAmountNumber * 0.05;
    let totalAmount = billAmountNumber + tipAmount;

    // Управление отображением элементов
    if (clientPaymentNumber >= totalAmount) {
        change = clientPaymentNumber - totalAmount;
        document.getElementById('change').innerText = change.toFixed(2) + "$";
        document.getElementById('changeLabel').style.display = 'block'; // Показать строку сдачи
        document.getElementById('extraAmountLabel').style.display = 'none'; // Скрыть строку доплаты
        document.getElementById('extraAmount').style.display = 'none'; // Скрыть текст доплаты
    } else {
        let amountToPay = totalAmount - clientPaymentNumber;
        document.getElementById('extraAmount').innerText = amountToPay.toFixed(2) + '$';
        document.getElementById('extraAmountLabel').style.display = 'block'; // Показать строку доплаты
        document.getElementById('changeLabel').style.display = 'none'; // Скрыть строку сдачи
        document.getElementById('change').style.display = 'none'; // Скрыть текст сдачи
    }

    // Вывод чаевых и итоговой суммы
    document.getElementById('tipAmount').innerText = tipAmount.toFixed(2) + "$";
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2) + "$";
});

// Сброс полей ввода и вывода
document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('clientPayment').value = '';
    document.getElementById('billAmount').value = '';
    document.getElementById('tipAmount').innerText = '';
    document.getElementById('totalAmount').innerText = '';
    document.getElementById('change').innerText = '';
    document.getElementById('extraAmount').innerText = '';
    document.getElementById('change').style.display = 'none'; // Скрыть строку сдачи при сбросе
    document.getElementById('extraAmount').style.display = 'none'; // Скрыть строку доплаты при сбросе
    document.getElementById('changeLabel').style.display = 'none'; // Скрыть метку сдачи
    document.getElementById('extraAmountLabel').style.display = 'none'; // Скрыть метку доплаты
    output.style.display = 'none';
});
