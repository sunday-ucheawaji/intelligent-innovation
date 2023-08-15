import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import * as AuthService from "../services/authService";
import { InputsLogin } from "../services/authService";
import { useState } from "react";
import { toast } from "react-toastify";
import { setToken, setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<InputsLogin>({
    defaultValues: {
      email: "",
      password: "",
      entry_point: "User",
    },
  });

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: AuthService.LoginClient.post,
  });

  const onSubmit: SubmitHandler<InputsLogin> = (data) => {
    mutation
      .mutateAsync(data)
      .then((res) => {
        toast.info("Logged in Successfull !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/profile");

        const { token, token_type } = res;
        localStorage.setItem("token", token);
        localStorage.setItem("token_type", token_type);
        reset();
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err?.response?.data?.errors?.root, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset();
      });
  };

  const onError = (error: FieldErrors<InputsLogin>) => {
    console.log(error);
  };

  const handleClick = () => setShow(!show);

  return {
    register,
    handleSubmit,
    onSubmit,
    onError,
    handleClick,
    errors,
    show,
    mutation,
  };
};

export default useLogin;
function dispatch(arg0: { payload: any; type: "user/setToken" }) {
  throw new Error("Function not implemented.");
}
