
import axios from "axios";
import authService from "./services/Auth.service";

const instance = axios.create({
  // baseURL: "http://192.168.9.132:3000/api",
//   baseURL: "https://netserpro.com:4703/api",
  withCredentials: true,
});

// 🔥 INTERCEPTOR: Agrega el token a todas las peticiones
instance.interceptors.request.use(
  async (config) => {
    const token = await authService.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 🔥 INTERCEPTOR (Opcional): Maneja errores 401 (token expirado)
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Aquí puedes hacer logout automático si quieres
      await authService.removeToken();
      // router.replace('/(auth)/LoginForm'); // Descomenta si quieres redirigir automáticamente
    }
    return Promise.reject(error);
  },
);

export default instance;