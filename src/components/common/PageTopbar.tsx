import BreadcrumbSection from "./BreadcrumbSection";

type Item =  {
  name : string,
  href: string
}
interface PageTopbarProps {
  title: string;
  routes?: Item[];
  buttons?: React.ReactNode;
}

const PageTopbar: React.FC<PageTopbarProps> = ({ title, routes , buttons}) => {

  return (
    <div className="flex mb-6 w-full">

      <BreadcrumbSection
        title={title}
        routes={routes ? routes : []}
      />

        <div className="mr-auto">
            {buttons}

        </div>
     
    
    </div>
  )
}


export default PageTopbar;
