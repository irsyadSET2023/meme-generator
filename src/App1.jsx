import { useState } from "react";

function App() {
  // cara hard code value
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleClick = () => {
    console.log({ firstName, lastName, email, phoneNumber });
  };

  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-blue-200">
      <div className="w-[500px] p-4 rounded bg-white">
        <h4 className="text-center">My first react form</h4>
        <div action="" className="flex flex-col gap-2 mt-4">
          <label htmlFor="firstname">First Name</label>
          <input
            className="border block w-full p-2"
            type="text"
            name="firstname"
            id="firstname"
            onChange={(e) => handleFirstNameChange(e)}
            placeholder="firstname"
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            className="border block w-full p-2"
            type="text"
            name="lastname"
            id="lastname"
            onChange={(e) => handleLastNameChange(e)}
            placeholder="lastname"
          />
          <label htmlFor="email">Email</label>
          <input
            className="border block w-full p-2"
            type="text"
            name="email"
            id="email"
            onChange={(e) => handleEmailChange(e)}
            placeholder="email"
          />
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            className="border block w-full p-2"
            type="text"
            name="phonenumber"
            id="phonenumber"
            onChange={(e) => handlePhoneNumberChange(e)}
            placeholder="phonenumber"
          />
          {/* ! overwrite the children */}
          <button
            onClick={handleClick}
            className="block w-full p-4 bg-blue-800 text-white !mt-4"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
