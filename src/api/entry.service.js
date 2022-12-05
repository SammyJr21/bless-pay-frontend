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

const listEntries = () => {
    const accountInfo = userService.recoverAccountInfo();
    return api.get('/entries/get-all-entries?cpfCnpj=' + accountInfo.document);
}

const getEntry = (entry) => {
    return api.get('/entries/get-entry?entry=' + entry);
}

const deleteEntry = (entry) => {
    const accountInfo = userService.recoverAccountInfo();
    return api.delete('/entries/delete-entry?entry=' + entry);
}

export default {
    createEntry,
    listEntries,
    getEntry,
    deleteEntry
}