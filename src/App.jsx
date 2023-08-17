import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  // return handlers
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //   console.log(watch("firsName"), watch("email"));
  const onSubmit = (data) => console.log(data);
  //   console.log(errors);
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-blue-200">
      <div className="w-[500px] p-4 rounded bg-white">
        <h4 className="text-center">My Third react form</h4>
        <form
          action=""
          className="flex flex-col gap-2 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="firstname">First Name</label>
          <input
            className="border block w-full p-2"
            type="text"
            placeholder="firstname"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className="text-sm text-red-600">Text 1 is required</span>
          )}
          <label htmlFor="lastname">Last Name</label>
          <input
            className="border block w-full p-2"
            type="text"
            placeholder="lastname"
            {...register("lastName", { required: true })}
          />
          <label htmlFor="email">Email</label>
          <input
            className="border block w-full p-2"
            type="email"
            placeholder="email"
            {...register("email", { required: true })}
          />
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            className="border block w-full p-2"
            type="text"
            placeholder="phonenumber"
            {...register("phonenumber", { required: true })}
          />
          {/* ! overwrite the children */}
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="block w-full p-4 bg-blue-800 text-white !mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
