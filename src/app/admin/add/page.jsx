const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className="min-w-6 h-4">
      Add New 
    </div>
  );
};

export default AddButton;