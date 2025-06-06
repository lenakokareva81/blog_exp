import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useResetStore } from "../../hooks";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../bff";
import { Link, Navigate } from "react-router-dom";
import { Input, Button, AuthError } from "../../components";
import { setUser } from "../../actions/index";
import { selectUserRole } from "../../selectors";
import styled from "styled-components";
import { ROLE } from "../../constans";

const authFormScheme = yup.object().shape({
  login: yup
    .string()
    .required("заполните логин")
    .matches(
      /^\w+$/,
      "неверно заполнен логин, допускаются только буквы и цыфры"
    )
    .min(3, "неверно заполнен логин, должно быть больше 3 символов")
    .max(15, "неверно заполнен логин, должно быть меньше 15 символов"),
  password: yup
    .string()
    .required("заполните пароль")
    .matches(
      /^\w+$/,
      "неверно заполнен пароль, допускаются только буквы, цыфры "
    )
    .min(3, "неверно заполнен пароль, должно быть больше 3 символов")
    .max(15, "неверно заполнен пароль, должно быть меньше 15 символов"),
});

const StyledLink = styled(Link)`
  text-decoration: underline;
  text-align: center;
  margin: 10px;
  font-size: 18px;
`;

const AutorizationContainer = ({ className }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(authFormScheme),
  });
  const [serverError, setServerError] = useState(null);

  const dispatch = useDispatch();

  const roleId = useSelector(selectUserRole);

  useResetStore(reset);

  const onSubmit = ({ login, password }) => {
    server.autorize(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка запроса ${error}`);
        return;
      }
      dispatch(setUser(res));
      sessionStorage.setItem("userData", JSON.stringify(res));
    });
  };

  const formError = errors?.login?.message || errors?.password?.message;

  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />;
  }
  return (
    <div className={className}>
      <h2>авторизация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          width="260px"
          type="text"
          placeholder="логин..."
          {...register("login", { onChange: () => setServerError(null) })}
        />

        <Input
          type="password"
          placeholder="пароль..."
          {...register("password", { onChange: () => setServerError(null) })}
        />
        <Button type="submit" disabled={!!formError}>
          авторизоваться
        </Button>
        {errorMessage && <AuthError>{errorMessage}</AuthError>}
        <StyledLink to="/register">регистрация</StyledLink>
      </form>
    </div>
  );
};

export const Autorization = styled(AutorizationContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > form {
    display: flex;
    flex-direction: column;
    width: 260px;
  }
`;
