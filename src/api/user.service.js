import api from '../api/axios';

const validateSession = () => {
    return api.get('/user/validate-session', {
        headers: {
            'token': recoverToken()
        }
    });
}

const recoverToken = () => {
    try {
        const accountInfo = JSON.parse(localStorage.getItem('account_info'));
        return accountInfo.token;
    } catch(error) {
        console.error('An error occured while recovering the user token.', error);
        return undefined;
    }
}

const recoverAccountInfo = () => {
    try {
        const accountInfo = JSON.parse(localStorage.getItem('account_info'));
        return {
            accountBranch: accountInfo.accountBranch,
            accountNumber: accountInfo.accountNumber,
            document: accountInfo.document
        };
    } catch(error) {
        console.error('An error occured while recovering the account info.', error);
        return {};
    }
}

const login = (form) => {
    return api.post('user/login', undefined, {
        headers: {
          'document': form.cpf.replace(/\D/g,''),
          'password': form.password
        }
    })
}

const signUp = (form) => {
    console.log('form sign', form)
    return api.post('user/sign-up', form);
}

export default {
    validateSession,
    recoverToken,
    recoverAccountInfo,
    login,
    signUp
}