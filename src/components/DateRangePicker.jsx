import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

const options = {
  //   title: "Select a Date & Time",
  inline: true,
  autoHide: false,
  todayBtn: false,
  clearBtn: false,
  mode: "light",
  clearBtnText: "Clear",
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-white dark:bg-white !shadow-none -mt-4 !font-normal",
    todayBtn: "!hidden",
    clearBtn: "!hidden",
    icons: "!bg-transparent !text-black cursor-pointer",
    text: "!text-[#1D1B20] !text-sm md:!text-xl !mx-5 !my-3 !font-normal ease transition-all duration-300 hover:!text-[#38B4FE]",
    disabledText:
      "!text-[#8850DC] !text-sm md:!text-xl !mx-5 !my-3 !opacity-40 hover:!bg-transparent !font-normal",
    input: "hidden",
    inputIcon: "!hidden !font-normal",
    selected: "!text-[#38B4FE] !bg-[#ECF5FC] !rounded-full !mx-5 !my-3",
  },

  datepickerClassNames: "top-12",
  defaultDate: new Date(),
  language: "en",
  disabledDates: [],
  weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  inputNameProp: "date",
  inputIdProp: "date",
  inputPlaceholderProp: "",
  inputDateFormatProp: {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
};

const DemoComponent = () => {
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate) => {
    console.log(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };

  return (
    <div className="relative">
      <Datepicker
        options={options}
        onChange={handleChange}
        show={true}
        setShow={handleClose}
      />
    </div>
  );
};

export default DemoComponent;
