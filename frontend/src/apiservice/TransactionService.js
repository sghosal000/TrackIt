import axios from "axios"
import authService from "./AuthService"

const BASE_URL = import.meta.env.VITE_BASE_URL

const config = {
    headers: {
        Authorization: `Bearer ${authService.getToken()}`,
    },
}

class TransactionService {
    async getAllTransactions() {
        try {
            const res = await axios.get(BASE_URL + "/transactions", authService.attachTokenToRequest(config))
            return { status: true, data: res.data }
        } catch (error) {
            console.error(error)
            return { status: false, error }
        }
    }

    filterByType(allTransactions, type) {
        console.log(allTransactions);
        return allTransactions.filter((transaction) => transaction.type === type);
    }

    async addTransaction(transaction) {
        try {
            const res = await axios.post(BASE_URL + "/transactions/add", transaction, authService.attachTokenToRequest(config))
            return { status: true, data: res.data }
        } catch (error) {
            console.error(error)
            return { status: false, error }
        }
    }
    async deleteTransaction(id) {
        try {
            const res = await axios.delete(BASE_URL + `/transactions/delete/${id}`, authService.attachTokenToRequest(config))
            return { status: true, data: res.data }
        } catch (error) {
            console.error(error)
            return { status: false, error }
        }
    }
}

const transactionService = new TransactionService()
export default transactionService
