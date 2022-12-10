import React from "react";

const CheckBoxInput = ({ checkBoxOptions,name,formik,label }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-x-2 items-center mb-3">
      <label >{label}</label>
      {checkBoxOptions.map((item) => (
        <div key={item.value} className="col-start-2 col-span-3">
          <input
            type="checkbox"
            id={item.value}
            name={name}
            value={item.value}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            checked={formik.values[name].includes(item.value)}
            
          />
          <label htmlFor={item.value}> {item.label}</label>
        </div>
      ))}
        {formik.errors[name] && formik.touched[name] && (
            <div className="text-red-500 text-xs font-semibold col-start-2 col-end-3 ">{formik.errors[name]}</div>
          )}
    </div>
  );
};

export default CheckBoxInput;

