
import { Login } from "../components";
export default function SignIn() {
    return (
        <div className="h-screen flex justify-center items-center"
            style={{
                backgroundImage: "url('/background.jpg')"
            }}
        >
            <Login />
        </div>
    );
}