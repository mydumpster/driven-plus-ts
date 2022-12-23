import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v4/driven-plus/";
// const AUTHORIZATION_HEADER = "Authorization";

const ENDPOINTS = {
  SIGN_UP: "/auth/sign-up",
  LOGIN: "/auth/login",
//   HABITS: "/habits",
//   TODAY: "/habits/today",
//   HISTORY_DAILY: "/habits/history/daily",
};

const AXIOS_INSTANCE: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

// const HEADERS = (token: string) => ({
//   headers: {
//     [AUTHORIZATION_HEADER]: `Bearer ${token}`,
//   },
// });

interface Cadastro {
  email: string;
  name: string;
  cpf: string;
  password: string;
}

interface Login {
    email: string;
    password: string;
}

// interface Habit {
//   name: string;
//   description: string;
//   frequency: number;
// }

interface DrivenPlus {
  fazerCadastro: (obj: Cadastro) => Promise<any>;
  fazerLogin: (obj: Login) => Promise<any>;
//   criarHabito: (obj: Habit, token: string) => Promise<any>;
//   listarHabitos: (token: string) => Promise<any>;
//   deletarHabito: (id: string, token: string) => Promise<any>;
//   buscarHabitosDeHoje: (token: string) => Promise<any>;
//   marcarHabitoComoFeito: (id: string, token: string) => Promise<any>;
//   desmarcarHabitoComoFeito: (id: string, token: string) => Promise<any>;
//   historicoHabitosDiario: (token: string) => Promise<any>;
}

const drivenPlus: DrivenPlus = {
  fazerCadastro: (obj) => {
    return AXIOS_INSTANCE.post(ENDPOINTS.SIGN_UP, obj);
  },
  fazerLogin: (obj) => {
    return AXIOS_INSTANCE.post(ENDPOINTS.LOGIN, obj);
  },
//   criarHabito: (obj, token) => {
//     return AXIOS_INSTANCE.post(ENDPOINTS.HABITS, obj, {
//       ...HEADERS(token),
//     });
//   },
//   listarHabitos: (token) => {
//     return AXIOS_INSTANCE.get(ENDPOINTS.HABITS, {
//       ...HEADERS(token),
//     });
//   },
//   deletarHabito: (id, token) => {
//     return AXIOS_INSTANCE.delete(`${ENDPOINTS.HABITS}/${id}`, {
//       ...HEADERS(token),
//     });
//   },
//   buscarHabitosDeHoje: (token) => {
//     return AXIOS_INSTANCE.get(ENDPOINTS.TODAY, {
//       ...HEADERS(token),
//     });
//   },
//   marcarHabitoComoFeito: (id, token) => {
//     return AXIOS_INSTANCE.post(
//       `${ENDPOINTS.HABITS}/${id}/check`,
//       {},
//       {
//         ...HEADERS(token),
//       }
//     );
//   },
//   desmarcarHabitoComoFeito: (id, token) => {
//     return AXIOS_INSTANCE.post(
//       `${ENDPOINTS.HABITS}/${id}/uncheck`,
//       {},
//       {
//         ...HEADERS(token),
//       }
//     );
//   },
//   historicoHabitosDiario: (token) => {
//     return AXIOS_INSTANCE.get(ENDPOINTS.HISTORY_DAILY, {
//       ...HEADERS(token),
//     });
//   },
};

export default drivenPlus;
