import { motion } from "framer-motion";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: "100vh",
    opacity: 0
  }
};

const Modal = ({ open, onClose, data }) => {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      className="overlay fixed flex justify-center items-center top-0 left-0 h-full w-full bg-black bg-opacity-50"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modalContainer w-56 md:w-96 rounded-lg fixed bg-white flex justify-between flex-col"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex flex-col h-full justify-evenly items-center">
          <BsFillExclamationTriangleFill className="w-10 h-10 icon" />
          <span className="text-3xl font-medium">Oh snap!</span>
          <p className="text-lg">{data.reason}</p>
        </div>
        <button
          className="bg-red-400 w-full h-14 rounded-b-lg hover:bg-red-500 cursor-pointer text-white text-lg"
          onClick={onClose}
        >
          Dismiss
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
