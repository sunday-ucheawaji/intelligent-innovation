import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import * as authService from "../services/authService";
import { InputsRegister } from "../services/authService";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/userSlice";

const useRegister = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<InputsRegister>({
    defaultValues: {
      first_name: "",
      last_name: "",
      role: "User",
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: authService.RegisterClient.post,
  });

  const onSubmit: SubmitHandler<InputsRegister> = (data) => {
    mutation
      .mutateAsync(data)
      .then((res) => {
        console.log(res);

        toast.info("Registration Successfull !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        navigate("/login");
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
      });
  };

  const onError = (error: FieldErrors<InputsRegister>) => {
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

export default useRegister;
