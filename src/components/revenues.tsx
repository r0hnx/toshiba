import { TrendingUpIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "./ui/card";
import Link from "next/link";

const Revenues = () => {
    return (
        <Card className="col-span-2 h-full">
            <CardHeader>
                <CardTitle>Revenues</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-5xl flex items-center">15% <span className="ml-3"></span><TrendingUpIcon className="text-green-500" /></div>
                <CardDescription>Increase compared to last week</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Link className="text-indigo-600 hover:text-indigo-500" href="#">
                    Revenues report →
                </Link>
            </CardFooter>
        </Card>
    );
}

export default Revenues;