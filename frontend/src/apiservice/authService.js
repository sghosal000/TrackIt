import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

class AuthService {
    async login(username, password) {
        const credentials = { id: username, password };

        try {
            const response = await axios.post(BASE_URL + "/auth/login", credentials);
            const { accessToken } = response.data
            localStorage.setItem("jwtAccessToken", accessToken)
            return { status: true }
        } catch (error) {
            console.error(error);
            throw new Error("Login failed")
        }
    }

    isLoggedIn() {
        return localStorage.getItem("jwtAccessToken") !== null;
    }

    getToken() {
        return localStorage.getItem("jwtAccessToken");
    }

    logout() {
        localStorage.removeItem("jwtAccessToken");
    }

    attachTokenToRequest(config) {
        const accessToken = this.getToken();
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    }
}

const authService = new AuthService()
export default authService
