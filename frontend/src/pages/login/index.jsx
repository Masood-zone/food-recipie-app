import React from "react";
import { RxCross2 } from "react-icons/rx";
import Register from "../signin";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { LoginValidator } from "../../utils/validationSchema";
import { setUser } from "../../redux/slice/userSlice";
import { toast } from "react-toastify";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { foodApi } from "../../redux/hook";

export function MainForm({ setShowModal }) {
  const [currentForm, setCurrentForm] = React.useState("Login");
  return (
    <div className="fixed inset-0 z-[999] bg-black bg-opacity-50 flex items-center justify-center">
      {/* Header */}
      <div className="w-full max-w-[330px] p-6 bg-white text-gray-800 rounded-lg flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-[#F43F5E] text-xl font-bold">{currentForm}</h2>
          <RxCross2
            onClick={() => setShowModal(false)}
            className="w-4 cursor-pointer"
          />
        </div>
        {/* Form */}
        {currentForm === "Login" ? (
          <Login showModal={setShowModal} form={setCurrentForm} />
        ) : (
          <Register showModal={setShowModal} form={setCurrentForm} />
        )}
      </div>
    </div>
  );
}

function Login({ showModal, form }) {
  const dispatch = useDispatch();
  const [login, { isLoading }] = foodApi.useLoginUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: LoginValidator,
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };
    console.log(userData);
    const response = await login(userData);
    if (response.error) {
      toast.error(response.error.data.message);
      return;
    }
    const { message, ...user } = response.data;
    dispatch(setUser(user));
    toast.success("Successful");
    showModal(false);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        {...register("email", {
          required: "Email is required",
          maxLength: 20,
        })}
        placeholder="Your email"
        className="p-2 border border-gray-300 rounded-md"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <div className="relative">
        <input
          type={!showPassword ? "password" : "text"}
          {...register("password", {
            required: true,
            maxLength: 10,
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          placeholder="Password"
          className="w-full p-2 overflow-hidden border border-gray-300 rounded-md"
        />
        <span className="absolute top-[2px] right-0  p-2">
          {showPassword ? (
            <IoEyeOutline
              fontSize={22}
              onClick={() => setShowPassword(!showPassword)}
              className="hover:cursor-pointer"
            />
          ) : (
            <IoEyeOffOutline
              fontSize={22}
              onClick={() => setShowPassword(!showPassword)}
              className="hover:cursor-pointer"
            />
          )}
        </span>
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="p-2 text-center text-white rounded-md bg-[#F43F5E]"
      >
        {isLoading ? <div className="loader"></div> : <span>Login</span>}
      </button>

      <p>
        Create a new account?{" "}
        <button
          onClick={() => form("Sign Up")}
          className="font-semibold cursor-pointer text-[#F43F5E] "
        >
          Click here
        </button>
      </p>
    </form>
  );
}
