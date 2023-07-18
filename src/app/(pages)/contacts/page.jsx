import Button from "../../../components/button/Button"
const Contacts = () => {
  return (
    <div className="w-[500px] h-auto mx-auto">
      <h1 className="title text-4xl border-b-4 border-black text-center">Let's Keep in Touch</h1>
      <div className="content flex items-center gap-10 bg-transparent">
       
        <form className="flex-1 flex flex-col gap-5 border-2">
                  <input type="text" placeholder="name" className=" p-5 bg-transparent border-none outline-none text-gray-500 border-3  text-2xl font-semibold border-b-2 border-white" />
                  <input type="number" placeholder="number" className="p-5 bg-transparent border-none outline-none text-gray-500 border-3 border-b-2 border-white text-2xl font-semibold" />
          <input type="text" placeholder="email" className="p-5 bg-transparent border-none outline-none text-gray-500 border-3 border-b-2 border-white text-2xl font-semibold" />
          <input type="text" placeholder="address" className="p-5 bg-transparent border-none outline-none text-gray-500 border-3 border-b-2 border-white text-2xl font-semibold" />
                  <textarea
            className="p-5 bg-transparent border-none outline-none text-gray-500 border-b-2 border-white text-2xl font-semibold border-2"
            placeholder="message"
            cols="10"
            rows="5"
          ></textarea>
                  <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contacts;