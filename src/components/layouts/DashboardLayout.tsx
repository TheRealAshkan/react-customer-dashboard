import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import { AppSidebar } from "../common/Sidebar";
import { SidebarProvider } from "../ui/sidebar";

export default function DashboardLayout() {
    return (
        <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
            <Header />
            <div className="w-full p-4">
            <Outlet />
            </div>
        </main>
        </SidebarProvider>
    
    )
}
