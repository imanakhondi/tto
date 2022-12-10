const BooleanCheckBox = ({ formik, name, label }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-x-2 items-center mb-3">
      <label>تائید</label>
      <div className="col-start-2 col-span-3">
        <input
          type="checkbox"
          id={name}
          name={name}
          value={true}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          checked={formik.values[name]}
        />
        <label htmlFor={name}> {label}</label>
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-500 text-xs font-semibold col-start-2 col-end-3">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default BooleanCheckBox;
