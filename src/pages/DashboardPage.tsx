import PageTopbar from "@/components/common/PageTopbar";
import OrderStatistics from "@/components/dashboard/OrderStatistics";


export default function DashboardPage() {
  return (
   <>
   


      <PageTopbar
        title="داشبورد"
        routes = {
          [
            {
              'name':'حساب کاربری',
              'href':'/'
            },
          ]
        }

      />
    
    <div className="grid grid-cols-3 gap-4">
      
      <OrderStatistics
      title="سفارش های جاری"
      count={2}
      />
        
        <OrderStatistics
     title="سفارش های جاری"
     count={5}
     />
      

      <OrderStatistics
     title="سفارش های جاری"
     count={4}
     />
      

      

    </div>
   </>
  )
}
