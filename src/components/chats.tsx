import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Chats = () => {
    return (
        <Card className="col-span-2">
            <CardHeader>
                <CardTitle>Chats</CardTitle>
                <CardDescription>2 unread messages</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-3">
                    <Avatar>
                        <AvatarImage alt="User 1" src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>U1</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage alt="User 2" src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>U2</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage alt="User 3" src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>U3</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage alt="User 4" src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>U4</AvatarFallback>
                    </Avatar>
                </div>
            </CardContent>
        </Card>
    );
}


export default Chats;