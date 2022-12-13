import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../common/input";
import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object"
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_fa";
import SelectInput from "../common/SelectInput";
import RadioInput from "../common/RadioInput";
import CheckBoxInput from "../common/CheckBoxInput";
import BooleanCheckBox from "../common/BooleanCheckBox";

const salamatOptions = [
  { value: "", label: "وضعیت جسمی" },
  { value: "سالم", label: "سالم" },
  { value: "جانباز", label: "جانباز" },
  { value: "معلول", label: "معلول" },
];
const madrakOptions = [
  { value: "", label: "مدرک" },
  { value: "حوزوی", label: "حوزوی" },
  { value: "بیسواد", label: "بیسواد" },
  { value: "ابتدایی", label: "ابتدایی" },
  { value: "سیکل", label: "سیکل" },
  { value: "دیپلم", label: "دیپلم" },
  { value: "کاردانی", label: "کاردانی" },
  { value: "کارشناسی", label: "کارشناسی" },
  { value: "کارشناسی ارشد", label: "کارشناسی ارشد" },
  { value: "دکترا", label: "دکترا" },
];
const boomiOptions = [
  { value: "", label: "وضعیت بومی بودن" },
  {
    value: "متولد شهرستان تایباد هستم (ارسال تصویر صفحه اول شناسنامه)",
    label: "متولد شهرستان تایباد هستم (ارسال تصویر صفحه اول شناسنامه)",
  },
  {
    value:
      "در حال حاضر ساکن شهرستان تایباد هستم (ارسال تصویر اجاره نامه یا سند مالکیت)",
    label:
      "در حال حاضر ساکن شهرستان تایباد هستم (ارسال تصویر اجاره نامه یا سند مالکیت)",
  },
  {
    value:
      "همسرم بومی شهرستان تایباد است ( ارسال تصویر صفحه اول شناسنامه همسر)",
    label:
      "همسرم بومی شهرستان تایباد است ( ارسال تصویر صفحه اول شناسنامه همسر)",
  },
  {
    value: "در حال حاضر شاغل در شهرستان تایباد هستم (ارسال تصویر حکم کارگزینی)",
    label: "در حال حاضر شاغل در شهرستان تایباد هستم (ارسال تصویر حکم کارگزینی)",
  },
  {
    value:
      "بیش از پنج سال است که ساکن در تایباد هستم (ارسال تصویر اجاره نامه یا سند مالکیت)",
    label:
      "بیش از پنج سال است که ساکن در تایباد هستم (ارسال تصویر اجاره نامه یا سند مالکیت)",
  },
];

const tedadsahamOptions = [{ value: "30 سهم اولیه", label: "30 سهم اولیه" }];
const avardeOptions = [{ value: "300000 تومان", label: "300000 تومان" }];
const arzeshsahamOptions = [{ value: "10000 تومان", label: "10000 تومان" }];

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const initialValues = {
  name: "",
  family: "",
  nameFather: "",
  sodoor: "",
  codeshenasname: "",
  codemelli: "",
  tavalod: "",
  mobile: "",
  tellHome: "",
  address: "",
  email: "",
  postalcode: "",
  shabacode: "",
  salamat: "",
  madrak: "",
  boomi: "",
  tedadsaham: "",
  arzeshsaham: [],
  avarde: "",
  uploadfile: null,
  taeeid: false,
};
const RegisterPage = () => {
  const onSubmit = (values) => {
    if (values.tavalod instanceof DateObject) values.tavalod = values.tavalod.toString()
      };
 
  const validationSchema = Yup.object({
    name: Yup.string().required("نام ضروری است"),
    family: Yup.string().required("نام خانوادگی ضروری است"),
    nameFather: Yup.string().required("نام پدر ضروری است"),
    sodoor: Yup.string().required("محل صدور ضروری است"),
    codeshenasname: Yup.string()
      .required("شماره شناسنامه ضروری است")
      .nullable(),
    codemelli: Yup.string()
      .required("کد ملی ضروری است").nullable(),
    tavalod: Yup.string().required("تاریخ تولد ضروری است"),
    mobile: Yup.string()
      .required("موبایل ضروری است")
      .matches(/^[0-9]{11}$/, "موبایل نامعتبر است")
      .nullable(),
    tellHome: Yup.string().required("تلفن ضروری است").nullable(),
    address: Yup.string().required("آدرس ضروری است").nullable(),
    postalcode: Yup.string()
      .required("کدپستی ضروری است")
      .matches(/^[0-9]{10}$/, "کد پستی نامعتبر است")
      .nullable(),
    shabacode: Yup.string().required("شماره شبا ضروری است").nullable(),
    salamat: Yup.string().required("وضعیت جسمی ضروری است"),
    madrak: Yup.string().required("مدرک ضروری است"),
    boomi: Yup.string().required("وضعیت بومی ضروری است"),
    tedadsaham: Yup.string().required("تعداد سهام ضروری است"),
    arzeshsaham: Yup.array()
      .required("ارزش سهام ضروری است")
      .min(1, "ارزش سهام ضروری است"),
    avarde: Yup.string().required("تعداد سهام ضروری است"),
    email: Yup.string().email("ایمیل نامعتبر است").required("ایمیل ضروری است"),
    uploadfile: Yup.mixed()
      .nullable()
      .required("فایل ضروری است")
      .test(
        "Fichier taille",
        "حداکثر سایز: 100کیلوبایت",
        (value) => !value || (value && value.size <= 100 * 1024)
      )
      .test(
        "format",
        "فرمت نامعتبر است",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
      ),
    taeeid: Yup.boolean()
      .required("terms and conditions must be specified")
      .oneOf([true], "تائید ضروری است "),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  console.log(formik);

  return (
    <main className="p-10 ">
      <h2 className="flex justify-center w-[60%] mx-auto mb-5 bg-[#4C6EF7] text-white text-xl font-semibold p-5">پذیره نویسی شرکت توسعه تعاون عمران</h2>
      <div className="flex items-center justify-center">

      <form onSubmit={formik.handleSubmit} className=" w-[60%]">
        <Input
          label="نام"
          formik={formik}
          name="name"
          placeholder="لطفا نام خود را وارد نمائید"
        />
        <Input
          label="نام خانوادگی"
          formik={formik}
          name="family"
          placeholder="لطفا نام خانوادگی خود را وارد نمائید"
        />
        <Input
          label="نام پدر"
          formik={formik}
          name="nameFather"
          placeholder="لطفا نام پدر خود را وارد نمائید"
        />
        <Input
          label="محل صدور"
          formik={formik}
          name="sodoor"
          placeholder="لطفا محل صدور خود را وارد نمائید"
        />
        <Input
          type="number"
          label="شماره شناسنامه"
          formik={formik}
          name="codeshenasname"
          placeholder="لطفا شماره شناسنامه خود را وارد نمائید"
        />
        <Input
          type="number"
          label="کد ملی"
          formik={formik}
          name="codemelli"
          placeholder="لطفا کد ملی خود را وارد نمائید"
        />
        <div className="grid grid-cols-4 grid-rows-1 gap-x-2 items-center mb-3">
          <label>تاریخ تولد</label>
           
          
        <DatePicker
          calendar={persian}
          locale={persian_en}
          value={formik.values.tavalod}
          format="YYYY/MM/DD"
         onChange={(event) => {
            formik.setFieldValue("tavalod",event.toString() );
          }}
          name="tavalod"
       
        />
        </div>

        <Input
          label="شماره موبایل"
          formik={formik}
          name="mobile"
          type="tel"
          placeholder="لطفا شماره موبایل خود را وارد نمائید"
        />
        <Input
          label="تلفن"
          formik={formik}
          name="tellHome"
          type="tel"
          placeholder="لطفا شماره تلفن خود را وارد نمائید"
        />
        <div className="grid grid-cols-4 grid-rows-1 gap-x-2 items-center mb-3">
          <label>آدرس</label>
          <textarea
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="address"
            cols="50"
            rows="10"
            placeholder="لطفا آدرس را وارد نمائید"
            className="col-start-2 col-span-3 outline-none border border-[#ccc] py-1 px-2 w-full my-1 rounded focus:border-2 focus:border-[#4c6ef7] placeholder:text-xs"
          ></textarea>
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-500 text-xs font-semibold col-start-2 col-end-3 ">
              {formik.errors.address}
            </div>
          )}
        </div>
        <Input
          label="کد پستی"
          formik={formik}
          name="postalcode"
          type="number"
          placeholder="لطفا کدپستی خود را وارد نمائید"
        />
        <Input
          label="ایمیل"
          formik={formik}
          name="email"
          type="email"
          placeholder="لطفا ایمیل خود را وارد نمائید"
        />
        <Input
          label="شماره شبا"
          formik={formik}
          name="shabacode"
          type="number"
          placeholder="لطفا شماره شبا خود را وارد نمائید"
        />
        <SelectInput
          formik={formik}
          label="وضعیت جسمی"
          name="salamat"
          selectOptions={salamatOptions}
        />
        <SelectInput
          formik={formik}
          label="مدرک"
          name="madrak"
          selectOptions={madrakOptions}
        />
        <SelectInput
          formik={formik}
          label="وضعیت بومی بودن"
          name="boomi"
          selectOptions={boomiOptions}
        />
        <RadioInput
          formik={formik}
          label="تعداد سهام"
          name="tedadsaham"
          radioOptions={tedadsahamOptions}
        />
        <CheckBoxInput
          formik={formik}
          label="فروش سهام"
          name="arzeshsaham"
          checkBoxOptions={arzeshsahamOptions}
        />
        <RadioInput
          formik={formik}
          label="آورده نقدی"
          name="avarde"
          radioOptions={avardeOptions}
        />
        <div className="grid grid-cols-4 grid-rows-1 gap-x-2 items-center mb-3">
          <label>فایل مورد نظر</label>
          <input
            type="file"
            name="uploadfile"
            onChange={(event) => {
              formik.setFieldValue("uploadfile", event.currentTarget.files[0]);
            }}
            onBlur={formik.handleBlur}
            id="uploadfile"
            className="col-start-2 col-span-3 outline-none border border-[#ccc] py-1 px-2 w-full my-1 rounded focus:border-2 focus:border-[#4c6ef7] "
          ></input>
          {formik.touched.uploadfile && formik.errors.uploadfile && (
            <div className="text-red-500 text-xs font-semibold col-start-2 col-end-3 ">
              {formik.errors.uploadfile}
            </div>
          )}
        </div>
        <BooleanCheckBox
          formik={formik}
          name="taeeid"
          label="با پذیرش شرایط عضویت، صحت اطلاعات فوق را تایید می نمایم"
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          className=" outline-none w-full border-none rounded text-white bg-[#4C6EF7] mt-4 p-2 cursor-pointer disabled:border-[#999999] disabled:bg-[#cccccc] disabled:text-[#666666] disabled:cursor-not-allowed"
        >
          تائید
        </button>
      </form>
      </div>
    </main>
  );
};

export default RegisterPage;
