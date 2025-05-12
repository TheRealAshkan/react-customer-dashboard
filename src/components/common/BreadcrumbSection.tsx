import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronLeft } from "lucide-react";

type Item =  {
  name : string,
  href: string
}
interface BreadcrumbSectionProps {
  title: string;
  routes: Item[];
}

const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({ title, routes }) => {

  return (
    <div className="flex gap-3 align-middle">
      <h1 className="text-3xl">{title}</h1>
      <Breadcrumb className="self-center">
        <BreadcrumbList>
          {routes.map((item,index:number) => {
            return (
              <>
              
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronLeft />
                </BreadcrumbSeparator>
              </>
            )
          })}
         
 
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

    
    </div>
  )
}


export default BreadcrumbSection;
