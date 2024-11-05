import Header from "../components/Header/Header";

const Home = () => {
    return (
        <div className="relative min-h-screen w-full bg-waifu-and-gandalf bg-black bg-cover bg-center">
            <div className="absolute inset-0 bg-slate-100 opacity-20"></div>
            <div className="relative flex items-center justify-center min-h-screen">
                <div className="shadow-lg shadow-black w-full max-w-md p-5 mx-auto bg-white bg-opacity-90">
                    <div className="text-1xl font-bold flex justify-center text-violet-500 mb-5">
                        <Header label="Seja Bem-Vindo, realize o login para continuar!" />
                    </div>
                    <form className="space-y-4">
                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">Email</span>
                            <input type="email" className="peer mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 sm:text-sm" />
                            <p className="mt-1 invisible peer-invalid:visible text-pink-600 text-sm">
                                Por favor insira um email válido.
                            </p>
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">Senha</span>
                            <input type="password" className="peer mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 sm:text-sm" />
                            <p className="mt-1 invisible peer-invalid:visible text-pink-600 text-sm">
                                Por favor insira uma senha válida.
                            </p>
                        </label>
                        <button className="w-full bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-4 py-2 rounded-md text-white">
                            Realizar Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home;