import React from "react";
import LoginLabel from "./LoginLabel";
import LoginInput from "./LoginInput";


interface LoginInputFormProps {
    type: string;
    id: string;
    placeholder: string;
}

const LoginInputForm: React.FC<LoginInputFormProps> = ({ type, id, placeholder }) => {
    return(
        <div className="relative">
            <LoginLabel id={id} />
            <LoginInput type={type} id={id} placeholder={placeholder} />
        </div>
    );
};

export default LoginInputForm;