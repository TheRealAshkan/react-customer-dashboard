import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface OrderStatisticsProps {
  title: string;
  description?: string;
  count: number;
}

const OrderStatistics: React.FC<OrderStatisticsProps> = ({ title, description, count }) => {

  return (
   <>
        <Card>
            <CardHeader>
            <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {description}
                <p>{count} سفارش</p>
            </CardContent>
   
        </Card>
   
   </>
  )
}

export default OrderStatistics