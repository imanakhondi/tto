const SelectInput = ({ formik, selectOptions ,name,label}) => {
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-x-2 items-center mb-3">
      <label className="flex-1" >{label}</label>
      <select name={name} {...formik.getFieldProps(name)}  className="col-start-2 col-span-3 outline-none border border-[#ccc] py-1 px-2 w-full my-1 rounded focus:border-2 focus:border-[#4c6ef7] text-xs">
        {selectOptions.map((item) => (
          <option value={item.value} key={item.value} >{item.label}</option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
            <div className="text-red-500 text-xs font-semibold col-start-2 col-end-3 ">{formik.errors[name]}</div>
          )}
    </div>
  );
};

export default SelectInput;
