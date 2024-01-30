import { ResponsiveLine } from "@nivo/line";
import { ClassAttributes, HTMLAttributes } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Growth = () => {
    return (
        <div className="col-span-3">
            <Card>
                <CardHeader>
                    <CardTitle>Growth</CardTitle>
                </CardHeader>
                <CardContent>
                    <CurvedlineChart className="w-full h-[200px]" />
                </CardContent>
            </Card>
            <br></br>
            <div className="grid grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Top month</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="text-2xl">November</p> 2019
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Top year</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="text-2xl">2023</p>
                        96K sold so far
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Top buyer</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center space-x-2">
                            <Avatar>
                                <AvatarImage alt="Maggie Johnson" src="/placeholder.svg?height=20&width=20" />
                                <AvatarFallback>MJ</AvatarFallback>
                            </Avatar>
                        </div>
                        <p className="text-sm font-bold">Maggie Johnson</p>
                        <p className="text-sm text-gray-500">Oasis Organic Inc.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}


function CurvedlineChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>
            <ResponsiveLine
                data={[
                    {
                        id: "Desktop",
                        data: [
                            { x: "Jan", y: 43 },
                            { x: "Feb", y: 137 },
                            { x: "Mar", y: 61 },
                            { x: "Apr", y: 145 },
                            { x: "May", y: 26 },
                            { x: "Jun", y: 154 },
                        ],
                    }
                ]}
                margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
                xScale={{
                    type: "point",
                }}
                yScale={{
                    type: "linear",
                    min: 0,
                    max: "auto",
                }}
                curve="monotoneX"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 16,
                }}
                axisLeft={{
                    tickSize: 0,
                    tickValues: 5,
                    tickPadding: 16,
                }}
                colors={["#00a36c"]}
                pointSize={0}
                enableArea={true}
                areaOpacity={0.5}
                gridYValues={6}
                theme={{
                    grid: {
                        line: {
                            stroke: "#f3f4f6",
                        },
                    },
                }}
                role="application"
            />
        </div>
    )
}

export default Growth;