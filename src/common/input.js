const Input = ({ label, name, type = "name", formik, placeholder }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-x-2 items-center mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        {...formik.getFieldProps(name)}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="col-start-2 col-span-3 outline-none border border-[#ccc] py-1 px-2 w-full my-1 rounded focus:border-2 focus:border-[#4c6ef7] placeholder:text-xs"
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className="text-red-500 text-xs font-semibold col-start-2 col-end-3 ">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default Input;
