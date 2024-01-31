import { ResponsiveLine } from "@nivo/line";
import { ClassAttributes, HTMLAttributes, useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import axios from "axios";
import { useQuery } from "react-query";

const uri = 'https://toshiba-backend.vercel.app'

const fetchData = async (interval: any) => {
    const response = await axios.get(uri + `/api/data`);
    return response.data;
};

const Growth = () => {
    const [selectedInterval, setSelectedInterval] = useState('yearly');

    useEffect(() => {
        fetchData(selectedInterval);
    }, [selectedInterval]);

    function CurvedlineChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
        const { data, isLoading, isError } = useQuery(['chartData', selectedInterval], () => fetchData(selectedInterval));
        
        if (isLoading) return <div className="w-full h-[180px]">Loading...</div>;
        if (isError) return <div className="w-full h-[180px]">Error loading data</div>;
    
        const chartData = [
            {
                id: 'profitPercentage',
                data: data.map((entry: { ts: any; pp: any; }) => ({
                    x: entry.ts,
                    y: entry.pp,
                })),
            },
        ];
    
        return (
            <div {...props}>
                <ResponsiveLine
                    data={chartData}
                    margin={{ top: 5, right: 0, bottom: 35, left: 25 }}
                    xScale={{ type: 'time', format: '%Y-%m-%d %H:%M:%S' }}
                    xFormat="time:%Y-%m-%d %H:%M:%S"
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                    curve="monotoneX"
                    enableArea
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        format: '%Y',
                        tickSize: 5,
                        tickPadding: 15,
                        tickRotation: 0,
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        // legend: 'Profit Percentage',
                        // legendOffset: -40,
                        // legendPosition: 'middle',
                    }}
                    enablePoints={false}
                    enableSlices="x"
                    enableGridX
                    enableGridY
                    colors={["#00a36c"]}
                />
            </div>
        )
    }

    return (
        <div className="col-span-3">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Growth</CardTitle>
                    <div className="w-32">
                        <Select>
                            <SelectTrigger id="sort">
                                <SelectValue placeholder="Yearly" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="newest" onSelect={() => setSelectedInterval("yearly") }>Yearly</SelectItem>
                                <SelectItem value="oldest" onChange={() => setSelectedInterval("monthly") }>Monthly</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardHeader>
                <CardContent>
                    <CurvedlineChart className="w-full h-[180px]" />
                </CardContent>
            </Card>
            <br></br>
            <div className="grid grid-cols-3 gap-4">
                <Card className="flex justify-between flex-col">
                    <CardHeader>
                        <CardTitle className="text-lg text-gray-500">Top month</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl">November</p> 2019
                    </CardContent>
                </Card>
                <Card className="flex justify-between flex-col">
                    <CardHeader>
                        <CardTitle className="text-lg text-gray-500">Top year</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl">2023</p>
                        96K sold so far
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg text-gray-500">Top buyer</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center space-x-2">
                            <Avatar>
                                <AvatarImage alt="Maggie Johnson" src="/placeholder.svg?height=20&width=20" />
                                <AvatarFallback>MJ</AvatarFallback>
                            </Avatar>
                        </div>
                        <p className="mb-2"></p>
                        <p className="text-xs font-bold">Maggie Johnson</p>
                        <p className="text-xs text-gray-500">Oasis Organic Inc.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Growth;