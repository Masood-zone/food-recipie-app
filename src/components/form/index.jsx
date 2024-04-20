import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export function Form({ data, onSubmit, title, loading, login, initialValues }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const renderFormControl = (key, field) => {
    switch (field.type) {
      case "text":
      case "email":
      case "number":
      case "password":
        return (
          <Input
            key={key}
            name={key}
            placeholder={field.label}
            type={field.type}
            validationMsg={field.validationMsg}
            register={register}
            errors={errors}
          />
        );
      case "file":
        return (
          <input
            key={key}
            type="file"
            {...register(key, { required: field.validationMsg })}
          />
        );
      case "select":
        return (
          <select
            key={key}
            {...register(key, { required: field.validationMsg })}
            className="border-b w-full border input-bordered rounded-md outline-none bg-transparent text-black my-3 py-4 px-2"
          >
            <option value="">Select Category</option>
            {field.options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.entries(data).map(([key, field]) =>
        renderFormControl(key, field)
      )}
      {login ? (
        <div className="mt-5">
          <Link
            to="/forgot-password"
            className="text-[#c793e8] text-sm font-[500]"
          >
            Forgot password?
          </Link>
        </div>
      ) : (
        ""
      )}
      <Button title={title} loading={loading} />
    </form>
  );
}
export const Input = ({
  name,
  placeholder,
  validationMsg,
  type,
  register,
  errors,
  ...rest
}) => {
  const errorMessage = errors[name]?.message;
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="border-b w-full border input-bordered rounded-md outline-none bg-transparent text-black my-3 py-4 px-2"
        {...register(name, { required: validationMsg })}
        {...rest}
      />
      {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
    </div>
  );
};

export const Button = ({ title, loading }) => {
  return loading ? (
    <button
      className="bg-[#F43F5E] py-3 px-1 rounded-md text-white font-semibold w-full mt-5 flex items-center justify-center"
      disabled={loading}
    >
      <span className="loading loading-spinner"></span>
      <span>Loading...</span>
    </button>
  ) : (
    <button
      type="submit"
      className="bg-[#F43F5E] py-3 px-1 rounded-md text-white font-semibold w-full mt-5"
    >
      {title}
    </button>
  );
};

export const NoticeMessage = ({ message, link, linkText }) => {
  return (
    <p className="">
      {message}{" "}
      <span className="bg-[#4E4E4E] py-2 px-2 text-white rounded-md ml-8">
        <Link to={link}>{linkText}</Link>
      </span>
    </p>
  );
};
