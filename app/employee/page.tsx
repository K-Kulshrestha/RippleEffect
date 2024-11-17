"use client";

import * as React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  AlertCircle,
  BarChart3,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Define types for the fraud metrics
interface FraudMetric {
  title: string;
  metric: string;
  icon: React.ComponentType<any>;
  description: string;
}

// Define types for the customer data
interface Customer {
  customerID: number;
  name: string;
  email: string;
  fraudScore: number;
  transactionVolume: string;
  lastTransaction: string;
}

// Dummy data for fraud metrics
const fraudMetrics: FraudMetric[] = [
  {
    title: "Total Customers",
    metric: "2,543",
    icon: Users,
    description: "Total number of registered customers",
  },
  {
    title: "Transaction Volume",
    metric: "$45,231.89",
    icon: DollarSign,
    description: "24h transaction volume",
  },
  {
    title: "Fraud Score",
    metric: "0.03",
    icon: AlertCircle,
    description: "Average fraud score (lower is better)",
  },
  {
    title: "Chargeback Rate",
    metric: "0.8%",
    icon: CreditCard,
    description: "Percentage of disputed transactions",
  },
];

// Dummy customer data
const customers: Customer[] = [
  {
    customerID: 1,
    name: "John Doe",
    email: "john@example.com",
    fraudScore: 0.02,
    transactionVolume: "$1,234.56",
    lastTransaction: "2023-04-01",
  },
  {
    customerID: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    fraudScore: 0.05,
    transactionVolume: "$2,345.67",
    lastTransaction: "2023-03-30",
  },
  {
    customerID: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    fraudScore: 0.01,
    transactionVolume: "$3,456.78",
    lastTransaction: "2023-04-02",
  },
  {
    customerID: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    fraudScore: 0.03,
    transactionVolume: "$4,567.89",
    lastTransaction: "2023-03-29",
  },
  {
    customerID: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    fraudScore: 0.04,
    transactionVolume: "$5,678.90",
    lastTransaction: "2023-04-03",
  },
];

// Dummy data for charts
const dailyTransactions = [
  { name: "Mon", total: 1200 },
  { name: "Tue", total: 1500 },
  { name: "Wed", total: 1800 },
  { name: "Thu", total: 2000 },
  { name: "Fri", total: 2400 },
  { name: "Sat", total: 1800 },
  { name: "Sun", total: 1600 },
];

const fraudScoreDistribution = [
  { score: "0.00-0.02", count: 1200 },
  { score: "0.02-0.04", count: 800 },
  { score: "0.04-0.06", count: 600 },
  { score: "0.06-0.08", count: 400 },
  { score: "0.08-0.10", count: 200 },
  { score: ">0.10", count: 100 },
];

const FraudMonitoringDashboard: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar className="p-4">
          {" "}
          {/* Added padding here */}
          <SidebarHeader>
            <h2 className="px-6 text-lg font-semibold tracking-tight">
              GuardDog
            </h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Users className="mr-2 h-4 w-4" />
                  Customers
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Alerts
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Settings</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 overflow-y-auto bg-background p-6">
          {" "}
          {/* Padding added here */}
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">Customer Monitoring</h1>
          </header>
          <main className="container mx-auto py-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {fraudMetrics.map((item) => (
                <Card key={item.title}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {item.title}
                    </CardTitle>
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent className="p-4">
                    {" "}
                    {/* Padding added here */}
                    <div className="text-2xl font-bold">{item.metric}</div>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Tabs className="mt-6 space-y-4" defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="customers">Customers</TabsTrigger>
              </TabsList>
              <TabsContent className="space-y-4" value="overview">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Daily Transactions</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2 p-4">
                      {" "}
                      {/* Padding added here */}
                      <ChartContainer
                        className="h-[200px]"
                        config={{
                          total: {
                            label: "Total",
                            color: "hsl(var(--chart-1))",
                          },
                        }}
                      >
                        <ResponsiveContainer height="100%" width="100%">
                          <BarChart data={dailyTransactions}>
                            <XAxis
                              axisLine={false}
                              dataKey="name"
                              fontSize={12}
                              stroke="#888888"
                              tickLine={false}
                            />
                            <YAxis
                              axisLine={false}
                              fontSize={12}
                              stroke="#888888"
                              tickFormatter={(value) => `$${value}`}
                              tickLine={false}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar
                              dataKey="total"
                              fill="var(--color-total)"
                              radius={[4, 4, 0, 0]}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Fraud Score Distribution</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2 p-4">
                      {" "}
                      {/* Padding added here */}
                      <ChartContainer
                        className="h-[200px]"
                        config={{
                          count: {
                            label: "Count",
                            color: "hsl(var(--chart-2))",
                          },
                        }}
                      >
                        <ResponsiveContainer height="100%" width="100%">
                          <BarChart data={fraudScoreDistribution}>
                            <XAxis
                              axisLine={false}
                              dataKey="score"
                              fontSize={12}
                              stroke="#888888"
                              tickLine={false}
                            />
                            <YAxis
                              axisLine={false}
                              fontSize={12}
                              stroke="#888888"
                              tickFormatter={(value) => value}
                              tickLine={false}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar
                              dataKey="count"
                              fill="var(--color-count)"
                              radius={[4, 4, 0, 0]}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default FraudMonitoringDashboard;
