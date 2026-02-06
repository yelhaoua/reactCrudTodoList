import MyButton from "./Mybtn";
export default function MyInputes({
  InputName,
  InputLable,
  Value,
  setInputes,
}) {
  return (
    <>
      <div className="flex flex-col justify-start items-center">
        <label className=" text-md p-1 w-full text-start" htmlFor={InputLable}>
          {InputLable}
        </label>
        <div className="flex justify-between items-center w-full">
          <input
            className="flex-1 p-1 hy-5 mr-1 border-blue-300 border-2 rounded-md focus:outline-2 focus:outline-blue-400 focus:border-0"
            onChange={(e) => {
              setInputes(e);
            }}
            type="text"
            name={InputName}
            id={InputLable}
            value={Value}
            placeholder={InputLable}
          />
          <MyButton className="w-fit px-3.5 rounded-md bg-blue-300 text-black py-1.5 duration-200 ease-in hover:bg-blue-400  hover:text-white" />
        </div>
      </div>
    </>
  );
}
