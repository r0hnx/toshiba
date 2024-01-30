import { Link } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "./ui/card";

const LostDeals = () => {
    return (
        <Card className="col-span-2">
            <CardHeader>
                <CardTitle>Lost deals</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-5xl">4%</div>
                <CardDescription>You closed 96 out of 100 deals</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
                <a className="text-indigo-600 hover:text-indigo-500" href="#">
                    All deals →
                </a>
            </CardFooter>
        </Card>
    );
}

export default LostDeals;