import ReactInputMask from "react-input-mask";
import Header from "../../components/Header/Header";
import { useState } from "react";

const Register = () => {

    const [loading, setLoading] = useState(false);

    function cleanCepForm() {
        document.getElementById('street').value = "";
        document.getElementById('neighborhood').value = "";
        document.getElementById('city').value = "";
        document.getElementById('state').value = "";
        document.getElementById('ibge').value = "";
    }

    async function searchByCep(event) {
        const valor = event.target.value;
        const cep = valor.replace(/\D/g, '');

        if (cep !== "") {
            const validacep = /^[0-9]{8}$/;

            if (validacep.test(cep)) {
                document.getElementById('street').value = "...";
                document.getElementById('neighborhood').value = "...";
                document.getElementById('city').value = "...";
                document.getElementById('state').value = "...";
                document.getElementById('ibge').value = "...";

                setLoading(true);
                
                try {
                    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                    const content = await response.json();
                    if (!("erro" in content)) {
                        document.getElementById('street').value = content.logradouro;
                        document.getElementById('neighborhood').value = content.bairro;
                        document.getElementById('city').value = content.localidade;
                        document.getElementById('state').value = content.uf;
                        document.getElementById('ibge').value = content.ibge;
                    } else {
                        cleanCepForm();
                        alert("CEP não encontrado.");
                    }
                } catch (error) {
                    cleanCepForm();
                    alert("Erro ao buscar CEP.");
                } finally {
                    setLoading(false);
                }
            } else {
                cleanCepForm();
                alert("Formato de CEP inválido.");
            }
        } else {
            cleanCepForm();
        }
    }

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
            <div className="shadow-lg shadow-black w-full max-w-4xl p-10 mx-auto bg-white bg-opacity-90">
                <div className="text-1xl font-bold flex justify-center text-violet-500 mb-5">
                    <Header label="Realize seu cadastro aqui, é rápido e fácil!" />
                </div>
                <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <label className="block col-span-1">
                        <span className="block text-sm font-medium text-slate-700">Nome</span>
                        <input
                            type="text"
                            className="peer mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 sm:text-sm"
                        />
                    </label>
                    <label className="block col-span-1">
                        <span className="block text-sm font-medium text-slate-700">Sobrenome</span>
                        <input
                            type="text"
                            className="peer mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 sm:text-sm"
                        />
                    </label>
                    <label className="block col-span-1 lg:col-span-1">
                        <span className="block text-sm font-medium text-slate-700">Email</span>
                        <input
                            type="email"
                            className="peer mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 sm:text-sm"
                        />
                        <p className="mt-1 invisible peer-invalid:visible text-pink-600 text-sm">
                            Por favor insira um email válido.
                        </p>
                    </label>
                    <label className="block col-span-1">
                        <span className="block text-sm font-medium text-slate-700">Senha</span>
                        <input
                            type="password"
                            className="peer mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 sm:text-sm"
                        />
                    </label>
                    <label className="block col-span-1">
                        <span className="block text-sm font-medium text-slate-700">Confirme sua senha</span>
                        <input
                            type="password"
                            className="peer mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 sm:text-sm"
                        />
                    </label>
                    <label className="block col-span-1">
                        <span className="block text-sm font-medium text-slate-700">CPF</span>
                        <ReactInputMask
                            mask="999.999.999-99"
                            className="peer mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 sm:text-sm"
                        />
                    </label>
                    <label className="block col-span-1">
                        <span className="block text-sm font-medium text-slate-700">CEP</span>
                        <ReactInputMask
                            mask="99999-999"
                            className="peer mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 sm:text-sm"
                            onBlur={searchByCep}
                        />
                    </label>
                    <label className="block col-span-1 lg:col-span-1">
                        <span className="block text-sm font-medium text-slate-700">Endereço</span>
                        <input
                            type="text"
                            id="street"
                            className="peer mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 sm:text-sm"
                        />
                    </label>
                    <label className="block col-span-1">
                        <span className="block text-sm font-medium text-slate-700">Bairro</span>
                        <input
                            type="text"
                            id="neighborhood"
                            className="peer mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 sm:text-sm"
                        />
                    </label>
                    <label className="block col-span-1">
                        <span className="block text-sm font-medium text-slate-700">Cidade</span>
                        <input
                            type="text"
                            id="city"
                            className="peer mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 sm:text-sm"
                        />
                    </label>
                    <label className="block col-span-1">
                        <span className="block text-sm font-medium text-slate-700">Estado</span>
                        <input
                            type="text"
                            id="state"
                            className="peer mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 sm:text-sm"
                        />
                    </label>
                    <label className="block col-span-1">
                        <span className="block text-sm font-medium text-slate-700">IBGE</span>
                        <input
                            type="text"
                            id="ibge"
                            className="peer mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 sm:text-sm"
                        />
                    </label>
                </form>
                {loading && (
                    <div className="flex justify-center mt-5">
                        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
                    </div>
                )}
                <div className="flex justify-center">
                    <button className="w-64 mx-auto mt-5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-4 py-2 rounded-md text-white">
                        Finalizar o Cadastro
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;