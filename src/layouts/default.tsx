import { ReactNode } from "react";
import { Sidebar } from "../components";
import { Outlet } from "react-router-dom";

interface DefaultLayoutProps {
    children?: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div className="flex">
            <div className="w-[280px]">
            <Sidebar />

            </div>
            <main className="flex-grow">
                {children || <Outlet />} 
            </main>
        </div>
    );
}
