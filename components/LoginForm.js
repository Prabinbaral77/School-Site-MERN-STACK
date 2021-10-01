
function LoginForm() {
    return (
        <div className="flex justify-center">
            <form className="flex flex-col space-y-5">
                <div>
                    <label htmlFor="email" className="InputLabel">Email: </label>
                    <input type="email" id="email" required className="LoginInput ml-8" />
                </div>
                <div> 
                    <label htmlFor="password" className="InputLabel">Password: </label>
                    <input type="password" id="password" required  className="LoginInput" />
                </div>
                <button className="mx-auto px-7 py-3 bg-blue-600 text-xl font-semibold text-white rounded-full w-40 shadow-xl hover:bg-blue-400 active:scale-90 transition transform duration-150">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
