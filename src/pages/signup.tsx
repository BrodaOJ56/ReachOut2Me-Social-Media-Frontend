import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: String;
  password: String;
  confirmPassword: String;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  console.log(errors);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data);
    console.log(
      `Your email address is: ${data.email} and Password is: ${data.password} `
    );
    console.log(errors);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-black mx-auto my-0 max-w-[600px] p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <h1 className="text-[2.4rem] tracking-tighter">
          Join ReachOut2Me today
        </h1>
        <input
          {...register("email", {
            required: "Please input a valid email address",
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
          placeholder="Email address"
          className="border-2 p-4 rounded-[10px] focus:border-sky-400 outline-none invalid:border-red-600 invalid:text-red-700 "
        />
        <input
          placeholder="Password"
          {...register("password", {
            required: "Please input a strong password",
            pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          })}
          className="border-2 p-4 rounded-[10px] focus:border-sky-400 outline-none invalid:border-red-600 invalid:text-red-700 "
        />

        <input
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "Please input a strong password",
            pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          })}
          className="border-2 p-4 rounded-[10px] focus:border-sky-400 outline-none invalid:border-red-600 invalid:text-red-700 "
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
          <a href="/login"> Log in</a>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
