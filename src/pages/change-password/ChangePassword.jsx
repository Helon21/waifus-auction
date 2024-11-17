import { useState } from "react";
import Header from "../../components/Header/Header";

const ChangePassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const validatePassword = (password) => {
        const minLength = /.{6,}/;
        const upperCase = /[A-Z]/;
        const lowerCase = /[a-z]/;
        const number = /[0-9]/;
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

        if (!minLength.test(password)) {
            return "A senha deve ter no mínimo 6 caracteres.";
        }
        if (!upperCase.test(password)) {
            return "A senha deve conter pelo menos 1 letra maiúscula.";
        }
        if (!lowerCase.test(password)) {
            return "A senha deve conter pelo menos 1 letra minúscula.";
        }
        if (!number.test(password)) {
            return "A senha deve conter pelo menos 1 número.";
        }
        if (!specialChar.test(password)) {
            return "A senha deve conter pelo menos 1 caractere especial.";
        }
        return "";
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordError(validatePassword(newPassword));
    };

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setConfirmPasswordError(
            newConfirmPassword !== password ? "As senhas não coincidem." : ""
        );
    };

    return (
        <div className="relative min-h-screen w-full">
            <div className="absolute inset-0 opacity-20"></div>
            <div className="relative flex items-center justify-center min-h-screen">
                <div className="shadow-lg shadow-black w-full max-w-md p-5 mx-auto bg-white bg-opacity-90">
                    <div className="text-1xl font-bold flex justify-center text-violet-500 mb-5">
                        <Header label="Esqueceu sua senha? Sem problemas, vamos recuperá-la!" />
                    </div>
                    <form className="space-y-4">
                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">Digite sua nova senha</span>
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className={`peer mt-1 block w-full px-3 py-2 border ${passwordError ? 'border-pink-600' : 'border-slate-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 sm:text-sm`}
                            />
                            {passwordError && (
                                <p className="mt-1 text-pink-600 text-sm">
                                    {passwordError}
                                </p>
                            )}
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">Confirme sua senha</span>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                className={`peer mt-1 block w-full px-3 py-2 border ${confirmPasswordError ? 'border-pink-600' : 'border-slate-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 sm:text-sm`}
                            />
                            {confirmPasswordError && (
                                <p className="mt-1 text-pink-600 text-sm">
                                    {confirmPasswordError}
                                </p>
                            )}
                        </label>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="w-64 mx-auto mt-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-4 py-2 rounded-md text-white"
                                disabled={passwordError || confirmPasswordError}
                            >
                                Recuperar Senha
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="w-64 mx-auto mt-1 bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 px-4 py-2 rounded-md text-white"
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;