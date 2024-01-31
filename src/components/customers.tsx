import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { JSX, SVGProps } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const Customers = () => {
    return (
        <Card className="col-span-3 flex flex-col justify-between">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>
                    Customers
                </CardTitle>
                <div className="w-32">
                    <Select>
                        <SelectTrigger id="sort">
                            <SelectValue placeholder="Newest" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="newest">Newest</SelectItem>
                            <SelectItem value="oldest">Oldest</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex rounded-lg p-3 items-center space-x-3  hover:bg-orange-200">
                        <Avatar>
                            <AvatarImage alt="Chris Friedkly" src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>CF</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium">Chris Friedkly</p>
                            <p className="text-sm text-gray-500">Supermarket Villanova</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-200 ">
                        <Avatar>
                            <AvatarImage alt="Maggie Johnson" src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>MJ</AvatarFallback>
                        </Avatar>
                        <div className="flex-grow">
                            <p className="font-medium">Maggie Johnson</p>
                            <p className="text-sm text-gray-500">Oasis Organic Inc.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-200">
                        <Avatar>
                            <AvatarImage alt="Gael Harry" src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>GH</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium">Gael Harry</p>
                            <p className="text-sm text-gray-500">New York Finest Fruits</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-200">
                        <Avatar>
                            <AvatarImage alt="Jenna Sullivan" src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>JS</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium">Jenna Sullivan</p>
                            <p className="text-sm text-gray-500">Walmart</p>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Link className="text-indigo-600 hover:text-indigo-500" href="#">
                    All customers →
                </Link>
            </CardFooter>
        </Card>
    )
}



function CircleEllipsisIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M17 12h.01" />
            <path d="M12 12h.01" />
            <path d="M7 12h.01" />
        </svg>
    )
}


function CircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
        </svg>
    )
}

function PencilIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            <path d="m15 5 4 4" />
        </svg>
    )
}


function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}


export default Customers;