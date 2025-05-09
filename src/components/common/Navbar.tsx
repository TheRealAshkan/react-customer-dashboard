import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { Link } from "react-router-dom"


const items = [
  {
    title: "پیشخوان",
    url: "/",
    icon: Home,
  },
  {
    title: "آدرس ها",
    url: "/address",
    icon: Inbox,
  },
  {
    title: "علاقه مندی ها",
    url: "/wishlist",
    icon: Calendar,
  },
  {
    title: "سفارش ها",
    url: "/order",
    icon: Search,
  },
  {
    title: "تراکنش ها",
    url: "/transaction",
    icon: Settings,
  },
  {
    title: "اطلاعات حساب کاربری",
    url: "/setting",
    icon: Settings,
  },
   {
    title: "خروج",
    url: "/logout",
    icon: Settings,
  },

]



export default function Navbar() {
  return (
    <>
    
      <SidebarGroup>
          <SidebarGroupLabel>منو</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    </>
  )
}
