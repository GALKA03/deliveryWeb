// import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    
    <button onClick={() => setClose(false)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
      Add New 
    </button>
  );
};

export default AddButton;