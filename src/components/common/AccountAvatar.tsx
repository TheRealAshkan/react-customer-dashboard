
   
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { SidebarGroup } from "../ui/sidebar"


export default function AccountAvatar() {
  return (
   <>
        <SidebarGroup className="flex align-middle justify-center text-center ">
            <div className="relative bg-stone-200 rounded-2xl  pt-10 mt-8">
            <Avatar className="mx-auto w-16 h-16 absolute top-[-30px] right-[38%]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col  ">
                <span>اشکان مهدی زاده</span>
                <span>09921938100</span>
            </div>
            </div>
          
        </SidebarGroup>
        <SidebarGroup >
            <div className="flex flex-row bg-green-300  rounded-2xl p-3 gap-3">
                <span>اعتبار کیف پول:</span>
                <span>1,000,000 تومان</span>
            </div>
        </SidebarGroup>

          
   </>
  )
}
