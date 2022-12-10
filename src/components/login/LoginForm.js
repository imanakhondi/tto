import { useFormik } from "formik";
import Input from "../../common/input";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import loginUser from "../../services/loginService";
import { useEffect, useState } from "react";
import {
  useAuth,
  useAuthActions,
} from "../Provider/UserProvider/AuthrProvider";
import { useQuery } from "../../hooks/useQuery";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("ایمیل وجود ندارد").required("ایمیل مورد نیاز است"),
  password: Yup.string().required("پسورد مورد نیاز است"),
});

const LoginForm = () => {
  const query = useQuery();
  const redirect = query.get("redirect") || "admin/dashboard";
  console.log(redirect);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log(navigate);
  const auth = useAuth();
  const setAuth = useAuthActions();
  console.log(auth);

  useEffect(() => {
    if (auth) navigate(`/${redirect}`);
  }, [redirect, auth]);
  const onSubmit = async (values) => {
    console.log(values);
    try {
      const { data } = await loginUser(values);
      console.log(data);
      setAuth(data);
      setError(null);
      navigate(`/${redirect}`);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };

  const formik = useFormik({ initialValues, onSubmit, validationSchema });
  return (
    <div className="w-[500px] p-7 border border-[#ccc] rounded ">
      <form onSubmit={formik.handleSubmit}>
        <Input label="ایمیل" name="email" formik={formik} type="email" />
        <Input
          label="رمز عبور"
          name="password"
          formik={formik}
          type="password"
        />
        <button
          type="submit"
          className=" outline-none w-full border-none rounded text-white bg-[#4C6EF7] mt-4 p-2 cursor-pointer disabled:border-[#999999] disabled:bg-[#cccccc] disabled:text-[#666666] disabled:cursor-not-allowed"
        >
          submit
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
