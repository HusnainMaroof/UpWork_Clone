import TextField from "@mui/material/TextField";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { PuffLoader } from "react-spinners";
import axios from "axios";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { regUsers } from "../features/auth/authSlice";

const SecondSignUpScreen = ({ role, setRole }) => {
  const [showpass, setShowPass] = useState(false);
  const [passError, setPassError] = useState("");
  const [countriesData, setCountriesData] = useState([]);
  const [country, setCountry] = useState("");
  const [formFields, setFormFields] = useState({
    f_name: "",
    l_name: "",
    email: "",
    password: "",
    mails: false,
    terms: true,
  });

  const { f_name, l_name, email, password, mails, terms } = formFields;
  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]:
        e.target.type == "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handelRole = () => {
    if (role == "client") {
      setRole("freelancer");
    } else if (role == "freelancer") {
      setRole("client");
    }
  };

  useEffect(() => {
    const minLengthRegex = /^.{8,}$/;
    const letterAndNumOrSpecialRegex = /^(?=.*[A-Za-z])(?=.*[\d\W]).+$/;
    if (password === "") {
      setPassError("");
    } else if (!minLengthRegex.test(password)) {
      setPassError("Password must be at least 8 characters");
    } else if (!letterAndNumOrSpecialRegex.test(password)) {
      setPassError(
        "Password should be at least 8 characters, with a symbol or letter"
      );
    } else {
      setPassError("You have strong Password!");
    }
  }, [password]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countriesApi =
        "https://gist.githubusercontent.com/portapipe/a28cd7a9f8aa3409af9171480efcc090/raw/";
      try {
        const { data } = await axios.get(countriesApi);
        setCountriesData(data);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchCountries();
  }, []);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "transparent" // no blue when selected
        : state.isFocused
        ? "#f3f4f6" // Tailwind gray-100 on hover
        : "transparent",
      color: "black",
      cursor: "pointer",
      userSelect: "none",
    }),
    control: (provided) => ({
      ...provided,
      minHeight: "55px",
      padding: "2px 4px",
      borderRadius: "8px",
      borderColor: "#d1d5db",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#9ca3af",
        borderWidth: 2,
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0 8px",
    }),
    singleValue: (provided) => ({
      ...provided,
      userSelect: "none",
    }),
  };

  const dispatch = useDispatch();

  const handelSubmitData = async () => {
    dispatch(
      regUsers({ f_name, l_name, email, password, country, terms, mails, role })
    );
  };
  return (
    <>
      <div className="h-screen w-full">
        <div className="flex items-center justify-between side_padding">
          <img src="/svgs/logo.svg" alt="" width={100} />

          <div className=" items-center gap-3 hidden md:flex">
            <h4 className=" text-lg">here to hire talet?</h4>

            <button
              onClick={handelRole}
              type="button"
              className="text-green-500 font-semibold hover:underline hover:text-black text-lg cursor-pointer"
            >
              {role == "client" && "Apply as a talent"}
              {role == "freelancer" && "Join as a Client"}
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center  py-10 bg-white">
          <div className=" w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[35%]">
            <h1 className="text-3xl font-semibold text-center mb-6">
              {role == "freelancer" && "Sign up to find work you love"}
              {role == "client" && "Sign up to hire talent"}
            </h1>

            <div className="flex items-center gap-5">
              <h4 className="w-full border border-gray-300 rounded-full py-2 gap-2 text-sm flex justify-center items-center  hover:bg-gray-100">
                <img src="/svgs/apple.svg" alt="" width={20} />
                Continue with Apple
              </h4>
              <h4 className="w-full  border border-gray-300 rounded-full py-2 gap-2 text-sm flex justify-center items-center  hover:bg-gray-100">
                <img src="/svgs/google.svg" alt="" width={20} />
                Continue as Husnain
              </h4>
            </div>

            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* First & Last Name */}
            <div>
              <div className="flex gap-3 mb-5">
                <TextField
                  name="f_name"
                  value={f_name}
                  onChange={handleChange}
                  label="First Name"
                  variant="outlined"
                  className="w-full"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: `f3f4f6`,
                        borderRadius: "8px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#9ca3af",
                        borderWidth: 2,
                      },
                    },
                  }}
                />
                <TextField
                  name="l_name"
                  value={l_name}
                  onChange={handleChange}
                  label="Last Name"
                  variant="outlined"
                  className="w-full "
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: `f3f4f6`,
                        borderRadius: "8px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#9ca3af",
                        borderWidth: 2,
                      },
                    },
                  }}
                />
              </div>
              {/* Email */}
              <div className="mb-5">
                <TextField
                  name="email"
                  value={email}
                  onChange={handleChange}
                  label={
                    role === "freelancer"
                      ? "Email"
                      : role === "client"
                      ? "Work email address"
                      : ""
                  }
                  variant="outlined"
                  className="w-full  "
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: `f3f4f6`,
                        borderRadius: "8px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#9ca3af",
                        borderWidth: 2,
                      },
                    },
                  }}
                />
              </div>
              {/* Password */}
              <div className="mb- relative">
                <TextField
                  name="password"
                  value={password}
                  onChange={handleChange}
                  label="Password"
                  className="w-full"
                  type={showpass ? "text" : "password"}
                  variant="outlined"
                  placeholder="Password (8 or more characters)"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: `f3f4f6`,
                        borderRadius: "8px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#9ca3af",
                        borderWidth: 2,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: `${
                          passError === ""
                            ? "#99a1af"
                            : passError === "You have strong Password!"
                            ? "green"
                            : "#c10007"
                        }`,
                        borderWidth: 2,
                      },
                    },
                  }}
                />
                <div
                  onClick={() => setShowPass(!showpass)}
                  className="absolute right-3 top-1/2 -translate-1/2 cursor-pointer"
                >
                  {showpass ? (
                    <IoEyeOutline size={22} />
                  ) : (
                    <IoEyeOffOutline size={22} />
                  )}
                </div>
              </div>
              <p
                className={`py-2 font-semibold  ${
                  passError == "You have strong Password!"
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {passError}
              </p>
              {/* Country */}
              <Select
                styles={customStyles}
                placeholder="Select your country"
                className="placeholder:text-gray-900"
                options={countriesData.map((item) => ({
                  value: item.code,
                  label: (
                    <div className="flex items-center gap-2 select-none">
                      <img
                        src={`data:image/png;base64,${item.flag}`}
                        alt="flag"
                        className="w-6 h-4"
                      />
                      <span>{item.name}</span>
                    </div>
                  ),
                  countryData: item,
                }))}
                onChange={(selected) => {
                  if (selected) {
                    setCountry(selected.countryData.name);
                  }
                }}
              />
              <label className="flex items-start text-sm mt-3 gap-2">
                <input
                  name="mails"
                  value={mails}
                  onChange={handleChange}
                  type="checkbox"
                  className="mt-1 border-green-700 py"
                />
                <span>
                  Send me helpful emails to find rewarding work and job leads.
                </span>
              </label>
              <label className="flex items-start text-sm gap-2 mt-3">
                <input
                  name="terms"
                  value={terms}
                  onChange={handleChange}
                  type="checkbox"
                  className="mt-1"
                />
                <span>
                  Yes, I understand and agree to the{" "}
                  <a href="#" className="text-green-600 underline">
                    Upwork Terms of Service
                  </a>
                  , including the{" "}
                  <a href="#" className="text-green-600 underline">
                    User Agreement
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-green-600 underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </div>

            <button
              onClick={handelSubmitData}
              type="button"
              className="w-full mt-5 flex items-center justify-center bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              Create my account
              <PuffLoader size={20} />
            </button>

            {/* Log in link */}
            <p className="text-center mt-4 text-sm">
              Already have an account?
              <a href="#" className="text-green-600 underline">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSignUpScreen;
