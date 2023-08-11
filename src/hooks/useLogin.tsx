import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import * as authService from "../services/authService";
import { InputsLogin } from "../services/authService";
import { useState } from "react";
import { toast } from "react-toastify";
import { setToken } from "../redux/userSlice";

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

  const mutation = useMutation({
    mutationFn: authService.LoginClient.post,
  });

  const onSubmit: SubmitHandler<InputsLogin> = (data) => {
    mutation
      .mutateAsync(data)
      .then((res: any) => {
        console.log(res);

        toast.info("Logged in Successfull !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        localStorage.setItem("token", res.token);
        reset();
        dispatch(setToken(res?.token));
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
