import { useForm, SubmitHandler } from "react-hook-form";
import apiClient from "./api/apiClient";
import Link from "next/link";

type Inputs = {
  username: String;
  email: String,
  password1: String
  password2: String,
  first_name: String,
  last_name: String;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // console.log(data);
    const response = await apiClient.post(
      "/api/dj-rest-auth/registration/",
      data,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log(
      `Your email address is: ${data.email} and Password is: ${data.password1} `
    );
    console.log(response);
  };
  const inputClassName =
    "border-2 p-4 rounded-[10px] focus:border-sky-400 outline-none invalid:border-red-600 invalid:text-red-700 ";
  return (
    <div className="h-screen flex flex-col justify-center items-center text-black mx-auto my-0 max-w-[600px] p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <h1 className="text-[2.4rem] tracking-tighter mb-6">
          Join ReachOut2Me today
        </h1>
        <input
          {...register("username", {
            required: "Please input a usernme",
          })}
          placeholder="Username"
          className={inputClassName}
        />
        <input
          {...register("email", {
            required: "Please input a valid email address",
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
          placeholder="Email address"
          className={inputClassName}
        />
        <input
          {...register("first_name", {
            required: "Please input your first name",
          })}
          placeholder="First Name"
          className={inputClassName}
        />
        <input
          {...register("last_name", {
            required: "Please input your last name",
          })}
          placeholder="Last Name"
          className={inputClassName}
        />
        <input
          placeholder="Password"
          {...register("password1", {
            required: "Please input a strong password",
            pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          })}
          className={inputClassName}
        />

        <input
          placeholder="Confirm Password"
          {...register("password2", {
            required: "Please input a strong password",
            pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          })}
          className={inputClassName}
        />

        <button
          type="submit"
          className="border-2 p-[10px] rounded-full bg-black text-white "
        >
          Sign Up
        </button>
      </form>
      <div className="mt-6">
        Have an account already?
        <span className="text-sky-600">
          <Link href="/login"> Log in</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
