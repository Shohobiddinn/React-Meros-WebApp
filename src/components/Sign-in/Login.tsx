import { useState } from "react";
import { User, AutharizationUser } from '../../@types/authTypes';
import AuthService from "../../servise/authServise"
import { useDispatch } from "react-redux";
import { loginUser } from "../../slice/authSlice";
import { toast, error } from "../../utils";

export default function Login() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const [data, setData] = useState<User>({
        username: '',
        password: '',
    });
    async function Submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await AuthService.submitPost(data);
            const res: AutharizationUser = response.data;
            toast('success', 'Hush kelibsiz')
            dispatch(loginUser(res));
        } catch (err) {
            error(err)
        } finally {
            setLoading(false);
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    return (
        <>
            <form onSubmit={Submit} className="max-w-sm min-w-[350px] mx-auto border-2 border-blue-700 rounded-md p-3">
                <div className="relative z-0 w-full mb-5 group">
                    <input value={data.username} onChange={handleChange} type="username" name="username" id="floating_username" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-[18px]">Username</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input value={data.password} onChange={handleChange} type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-[18px]">Password</label>
                </div>

                <button
                    disabled={loading}
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-end"
                >
                    {loading ? (
                        <i className="fa-solid fa-spinner fa-spin"></i>
                    ) : (
                        'Submit'
                    )}
                </button>

            </form>
        </>
    )
}