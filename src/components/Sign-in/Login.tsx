import { useState } from "react";
import { User, AutharizationUser } from '../../@types/authTypes';
import AuthService from "../../servise/authServise"
import { useDispatch } from "react-redux";
import { loginUser } from "../../slice/authSlice";
import { toast, error } from "../../utils";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../UIComponents";
export default function Login() {
    const navigate = useNavigate();
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
            toast('success', 'Hush kelibsiz');
            dispatch(loginUser(res));
            navigate('/')
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
                <Input
                    value={data.username}
                    setValue={handleChange}
                    name="username"
                    label="Username"
                    required={true}
                />
                <Input
                    value={data.password}
                    setValue={handleChange}
                    name="password"
                    label="Password"
                    required={true}
                />
                <Button loading={loading} disabled={loading} type="submit">Submit</Button>
            </form>
        </>
    )
}