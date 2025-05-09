import { SidebarTrigger } from "../ui/sidebar";

import AccountAvatar from "./AccountAvatar";


export default function Header() {
  return (
    <div className="flex w-full justify-between p-5">
      
      <div className="flex">
      <SidebarTrigger />
      </div>

      
      

      <AccountAvatar />



    </div>
  )
}
