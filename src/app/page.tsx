"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LlkIjWeViKM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardHeader, CardDescription, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"
import { JSX, SVGProps } from "react"
import Aside from "@/components/aside"
import Customers from "@/components/customers"
import Growth from "@/components/growth"
import Chats from "@/components/chats"
import TopStates from "@/components/topStates"
import NewDeals from "@/components/newDeals"
import Revenues from "@/components/revenues"
import LostDeals from "@/components/lostDeals"
import QuaterGoals from "@/components/quaterGoals"

export default function Component() {
  return (
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
  )
}


function TrendingUpIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}
