import { useState } from "react";

function App() {
  // cara hard code value
  const [formData, setFormData] = useState({});
  const [buttonState, setButtonState] = useState(true);
  const [allValid, setAllValid] = useState(false);

  const handleInputChange = (event, name) => {
    // console.log("Form Data:\n", formData);
    setFormData({ ...formData, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputLength = Object.values(event.target).filter((element) => {
      element.nodeName === "INPUT";
    }).length;
    const inputArray = Object.values(formData);
    const allDataSubmit =
      inputArray.length === inputLength && inputArray.every(Boolean);
    console.log("Input Length", inputLength);
    console.log("All Data", allDataSubmit);
    if (allDataSubmit) {
      console.log(formData);
    }
  };

  if (formData)
    return (
      <div className=" w-screen h-screen flex justify-center items-center bg-blue-200">
        <div className="w-[500px] p-4 rounded bg-white">
          <h4 className="text-center">My second react form</h4>
          <form
            action=""
            className="flex flex-col gap-2 mt-4"
            onSubmit={handleSubmit}
          >
            <label htmlFor="firstname">First Name</label>
            <input
              className="border block w-full p-2"
              type="text"
              name="firstname"
              id="firstname"
              onChange={(e) => handleInputChange(e, "firstName")}
              placeholder="firstname"
            />
            <label htmlFor="lastname">Last Name</label>
            <input
              className="border block w-full p-2"
              type="text"
              name="lastname"
              id="lastname"
              onChange={(e) => handleInputChange(e, "lastName")}
              placeholder="lastname"
            />
            <label htmlFor="email">Email</label>
            <input
              className="border block w-full p-2"
              type="email"
              name="email"
              id="email"
              onChange={(e) => handleInputChange(e, "email")}
              placeholder="email"
            />
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              className="border block w-full p-2"
              type="text"
              name="phonenumber"
              id="phonenumber"
              onChange={(e) => handleInputChange(e, "phoneNumber")}
              placeholder="phonenumber"
            />
            {/* ! overwrite the children */}
            <button
              // disabled={
              //   Object.values(formData).length > 4 &&
              //   Object.values(formData).every(Boolean)
              // }
              type="submit"
              onClick={handleSubmit}
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
