import { FcGoogle } from "react-icons/fc";

const LoginButton = ({...buttonProps}) => {
    return (
        <button type="button"
                {...buttonProps}
                className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
        > <FcGoogle className="mr-4"/> Sign in with Google </button>
    )
}

export default LoginButton