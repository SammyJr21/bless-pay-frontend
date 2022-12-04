import api from './axios';

const sendPayment = (payment) => {
    return api.post('payment/send', payment);
}

const scheduleTransaction = (transactionId) => {
    return api.put('payment/schedule-transaction?transactionId=' + transactionId);
}

export default {
    sendPayment,
    scheduleTransaction
}