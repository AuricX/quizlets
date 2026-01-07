import axios from 'axios';

const api = axios.create({
  baseURL: 'http://quizlets-backend.railway.internal',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.applyInterceptors = () => {
  api.interceptors.response.use(
    response => response,
    error => {
      console.error('API Error:', error);
      return Promise.reject(error);
    }
  );
};

export default api;
