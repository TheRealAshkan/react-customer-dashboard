
   
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Link } from "react-router-dom"
import { useCustomerStore } from "@/store/customerStore"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AccountAvatar() {
    const {firstname,lastname,mobile,image} = useCustomerStore()
  return (
   <div className="flex gap-4">
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
                <Avatar className="w-10 h-10" >
                    <AvatarImage src={image} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                    
            </DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuLabel>{firstname} {lastname}</DropdownMenuLabel>
            <DropdownMenuLabel>{mobile}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <Link to="/" className="flex flex-row bg-green-100 border-2 border-green-300  rounded-xl p-2 gap-2 text-md">
                <span>اعتبار کیف پول:</span>
                <span>1,000,000 تومان</span>
        </Link>                   
   </div>
  )
}
