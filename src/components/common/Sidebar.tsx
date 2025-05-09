import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Navbar from "./Navbar"



export function AppSidebar() {
  return (
    <Sidebar side="right">
      <SidebarHeader>
          <img src="https://aghayebargh.com/image/catalog/logo/logo-02.jpg" className="h-16 w-32 mr-6" />
      </SidebarHeader>

      <SidebarContent>
        <Navbar />
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}
