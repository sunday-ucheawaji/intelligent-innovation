import APIClient from "./apiClient";

export interface InputsLogin {
  email: string;
  password: string;
  entry_point: string;
}

export interface InputsRegister {
  first_name: string;
  last_name: string;
  role: string;
  email: string;
  password: string;
}

export interface IResponse {
  token: string;
  token_type: string;
}

export const LoginClient = new APIClient<InputsLogin, IResponse>("/user/login");
export const RegisterClient = new APIClient<InputsRegister, IResponse>(
  "/user/register"
);
