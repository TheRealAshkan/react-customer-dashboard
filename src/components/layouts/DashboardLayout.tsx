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
            
            <Outlet />
        </main>
        </SidebarProvider>
    
    )
}
