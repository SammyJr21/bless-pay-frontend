import api from './axios';

const sendPayment = (payment) => {
    return api.post('payment/send', payment);
}

export default {
    sendPayment
}