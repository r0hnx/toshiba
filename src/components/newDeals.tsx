import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const NewDeals = () => {
    return ( 
        <Card className="col-span-2">
            <CardHeader>
              <CardTitle>New deals</CardTitle>
            </CardHeader>
            <CardContent>
                     <div className="flex flex-wrap gap-2">
           <Badge>Fruit2Go</Badge>
           <Badge>Marshall&apos;s MKT</Badge>
           <Badge>CCNT</Badge>
           <Badge>Joana Mini-market</Badge>
           <Badge>Little Brazil Vegan</Badge>
           <Badge>Target</Badge>
           <Badge>Organic Place</Badge>
           <Badge>Morello&apos;s</Badge>
         </div>
            </CardContent>
          </Card>
     );
}
 
export default NewDeals;