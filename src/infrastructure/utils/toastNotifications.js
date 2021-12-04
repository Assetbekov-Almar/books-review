import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const successNotify = () => toast.success("The message has been successfully sent!", {position: "top-right",
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	theme: 'colored',
	progress: undefined,
});

export const failureNotify = () => toast.error("Something went wrong! Try again, please.", {
	position: "top-right",
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	theme: 'colored',
	progress: undefined,
});