import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";

const TopStates = () => {
    return (
        <Card className="col-span-2">
            <CardHeader>
                <CardTitle>Top states</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="font-medium">NY</span>
                        <span className="text-sm text-gray-500">120k</span>
                    </div>
                    <Progress className="h-3" value={100}/>
                    <div className="flex justify-between">
                        <span className="font-medium">MA</span>
                        <span className="text-sm text-gray-500">80k</span>
                    </div>
                    <Progress className="h-3" value={80}/>
                    <div className="flex justify-between">
                        <span className="font-medium">NH</span>
                        <span className="text-sm text-gray-500">70k</span>
                    </div>
                    <Progress className="h-3" value={70}/>
                    <div className="flex justify-between">
                        <span className="font-medium">OR</span>
                        <span className="text-sm text-gray-500">50k</span>
                    </div>
                    <Progress className="h-3" value={50}/>
                </div>
            </CardContent>
        </Card>
    );
}

export default TopStates;