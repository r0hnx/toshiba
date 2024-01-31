"use client"
import Aside from "@/components/aside"
import Customers from "@/components/customers"
import Growth from "@/components/growth"
import Chats from "@/components/chats"
import TopStates from "@/components/topStates"
import NewDeals from "@/components/newDeals"
import Revenues from "@/components/revenues"
import LostDeals from "@/components/lostDeals"
import QuaterGoals from "@/components/quaterGoals"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient();

export default function Component() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-100 p-8">
        <div className="flex gap-4">
          <aside className="lg:w-64 flex-shrink-0">
            <Aside />
          </aside>
          <div className="flex-1 grid grid-cols-6 gap-4">
            <Revenues />
            <LostDeals />
            <QuaterGoals />
            <Customers />
            <Growth />
            <Chats />
            <TopStates />
            <NewDeals />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  )
}