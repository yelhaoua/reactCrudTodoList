export default function Modale({ Message }) {
  return (
    <>
      <div className="w-[60%] py-2.5 px-2 border border-gray-400 rounded-xl mx-auto bg-[#1B3C53]">
        <div className="text-white text-xl pt-2.5">{Message}</div>
        <div className="flex justify-end items-end">
          <div className="w-fit py-1 px-1.5 text-white bg-red-600 rounded-md ">
            Cancle
          </div>
        </div>
      </div>
    </>
  );
}
