import { NavLink } from "react-router-dom";
import "./Sidebar.css"
export default function Sidebar() {
    return (
        <>
            <nav className="bg-[#4F39F6] shadow-lg h-screen fixed top-0 left-0 min-w-[240px] py-6 px-4 font-[sans-serif] overflow-auto">
                <NavLink to="/">
                    <div className="flex items-center  gap-2">
                        <img alt="Your Company" src="https://tailwindui.com/plus/img/logos/mark.svg?color=white" className="pt vn" width={40}></img>
                        <h4 className="text-2xl text-white">Meros</h4>

                    </div>
                </NavLink>

                <div className="mt-4">
                    <ul className="mt-2">
                        <li ><NavLink to="/" className={({ isActive }) =>
                            `border-2 flex items-center gap-2 p-2 rounded-lg text-white nav-link ${isActive ? "router-active" : ""}`
                        }> <i className="fas fa-home"></i>Branches</NavLink></li>
                    </ul>
                </div>
                
            </nav>
        </>
    )
}