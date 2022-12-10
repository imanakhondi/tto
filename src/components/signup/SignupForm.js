import {  useState } from "react";
import Input from "../../common/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import {  useNavigate } from "react-router-dom";
import { signUpUser } from "../../services/signUpService";
import {
  useAuthActions,
} from "../Provider/UserProvider/AuthrProvider";
const initialValues = {
  name: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("نام ضروری است").min(6, "نام کوتاه است"),
  phoneNumber: Yup.string()
    .required("موبایل ضروری است")
    .matches(/^[0-9]{11}$/, "موبایل نا معتبر است")
    .nullable(),
  email: Yup.string().email("ایمیل نامعتبر است").required("ایمیل ضروری است"),
  password: Yup.string().required("رمز عبور ضروری است"),
  confirmPassword: Yup.string()
    .required("تائید رمز عبور ضروری است")
    .oneOf([Yup.ref("password"), null], "پسورد باید تطابق داشته باشد"),
});

const SignupForm = () => {
  const [error, setError] = useState(null);

  const setAuth = useAuthActions();

  let navigate = useNavigate();


  const onSubmit = async (values) => {
    const { name, email, password, phoneNumber } = values;
    const userData = { name, email, password, phoneNumber };
    try {
      const { data } = await signUpUser(userData);
      setAuth(data);
      navigate(`/admin/users`);
      setError(null);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="w-[500px] p-7 text-[#8890b5]">
      <form onSubmit={formik.handleSubmit}>
        <Input label="نام" formik={formik} name="name" />
        <Input
          label="شماره موبایل"
          formik={formik}
          name="phoneNumber"
          type="tel"
        />
        <Input label="ایمیل" formik={formik} name="email" type="email" />
        <Input
          label="رمز عبور"
          formik={formik}
          name="password"
          type="password"
        />
        <Input
          label="تائید رمز عبور"
          formik={formik}
          name="confirmPassword"
          type="password"
        />
        <button type="submit" disabled={!formik.isValid}className=" outline-none w-full border-none rounded text-white bg-[#4C6EF7] mt-4 p-2 cursor-pointer disabled:border-[#999999] disabled:bg-[#cccccc] disabled:text-[#666666] disabled:cursor-not-allowed">
          تائید
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
       
      </form>
    </div>
  );
};

export default SignupForm;
