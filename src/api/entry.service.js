import api from './axios';
import userService from './user.service';

const createEntry = (entryKey, entryType) => {
    const accountInfo = userService.recoverAccountInfo();
    return api.post('/entries/create-entry', {
        entry: entryKey,
        entryType: entryType,
        accountBranch: accountInfo.accountBranch,
        accountNumber: accountInfo.accountNumber,
        accountDocument: accountInfo.document
    });
}

export default {
    createEntry
}