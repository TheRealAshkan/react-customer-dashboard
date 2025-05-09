import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Navbar from "./Navbar"
import AccountAvatar from "./AccountAvatar"



export function AppSidebar() {
  return (
    <Sidebar side="right">
      <SidebarHeader>LOGO</SidebarHeader>

      <SidebarContent>
        <AccountAvatar />
        <Navbar />
 
        
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}
