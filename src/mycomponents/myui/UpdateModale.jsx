import AddBtn from "./AddBtn";
import MyInputes from "./MyInputes";
import UpdateBtn from "./UpdateBtn";

export default function ModalUpdate({ value }) {
  return (
    <>
      <div className="w-fit bg-gray-500 p-10 rounded-2xl absolute left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <div className="flex justify-center items-end">
          <MyInputes
            InputLable={"Update"}
            InputName={"UpdatedTodo"}
            value={value}
          />
          <UpdateBtn
            className={
              "w-fit px-3.5 rounded-md bg-blue-400 text-black py-1.5 duration-200 ease-in hover:bg-blue-700  hover:text-white"
            }
            name={"Update"}
          />
        </div>
      </div>
    </>
  );
}
