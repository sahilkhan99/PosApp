import {SUBMIT_GET_TRANSACTIONS,
        FINISH_GET_TRANSACTIONS,
        SUBMIT_UPDATE_TRANSACTIONS,
        FINISH_UPDATE_TRANSACTIONS,
        SUBMIT_ADD_TRANSACTIONS,
        FINISH_ADD_TRANSACTIONS
         } from 'containers/Transactions/actions/transaction-action-types';

function submitGetTransactions() {
    return {
        transactions:[],
        type: SUBMIT_GET_TRANSACTIONS
    }
}

function finishGetTransactions() {
    return {
        transactions: [],
        type: FINISH_GET_TRANSACTIONS
    }
}

function submitAddTransaction(transactionItem){
    return {
        transactionItem: transactionItem,
        type: SUBMIT_ADD_TRANSACTIONS
    }
}

function finishAddTransaction(transactionItem){
    return {
        transactionItem: transactionItem,
        type: FINISH_ADD_TRANSACTIONS
    }
}

/*Update transactions */
function submitUpdateTransaction(transactionItem){
    return{
        transactionItem:transactionItem,
        type: SUBMIT_UPDATE_TRANSACTIONS
    }
}

/*Update transactions */
function finishUpdateTransaction(transactionItem){
    return{
        transactionItem:transactionItem,
        type: FINISH_UPDATE_TRANSACTIONS
    }
}

export function getTransactions(){
    return (dispatch, getState) => {
            dispatch(submitGetTransactions());
            dispatch(finishGetTransactions());
    }
}

export function updateTransaction(transactionItem){
    return (dispatch, getState) => {
            dispatch(submitUpdateTransaction(transactionItem));
            dispatch(finishUpdateTransaction(transactionItem));
    }
}

export function addTransaction(transactionItem) {
    return (dispatch, getState) => {
            dispatch(submitAddTransaction(transactionItem));
            dispatch(finishAddTransaction(transactionItem));
    }
}