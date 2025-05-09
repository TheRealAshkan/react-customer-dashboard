import { Outlet } from "react-router-dom";
import Header from "../Header";
import { AppSidebar } from "../Sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";

export default function DashboardLayout() {
    return (
        <SidebarProvider>
        <AppSidebar />
        <main>
            <Header />
            <SidebarTrigger />
            <Outlet />
        </main>
        </SidebarProvider>
    
    )
}
