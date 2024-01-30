import { Link } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const QuaterGoals = () => {
    return (
        <Card className="col-span-2 h-full">
            <CardHeader>
                <CardTitle>Quarter goal</CardTitle>
            </CardHeader>
            <CardContent>
                <Progress className="w-full h-2" value={84} color="orange"/>
                <br/>
                <div className="text-3xl flex w-full justify-center">84%</div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <a className="text-indigo-600 hover:text-indigo-500" href="#">
                    All goals →
                </a>
            </CardFooter>
        </Card>
    );
}

export default QuaterGoals;