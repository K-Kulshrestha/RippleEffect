"use client"

import * as React from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Scatter, ScatterChart } from "recharts"
import { AlertCircle, BarChart3, CreditCard, DollarSign, HelpCircle, Settings, Users, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
} from "@/components/ui/sidebar"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface FraudMetric {
  title: string
  metric: string
  icon: React.ComponentType<any>
  description: string
}

const FraudMonitoringDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("overview")
  const [showOnboarding, setShowOnboarding] = React.useState(false)
  const [currentStep, setCurrentStep] = React.useState(0)
  const [fraudMetrics, setFraudMetrics] = React.useState<FraudMetric[]>([
    {
      title: "Total Fraud Cases",
      metric: "82",
      icon: AlertCircle,
      description: "Total number of fraud cases detected in the last 30 days",
    },
    {
      title: "Average Fraud Amount",
      metric: "$4,300.12",
      icon: DollarSign,
      description: "Average amount involved in fraudulent transactions",
    },
    {
      title: "Fraud Detection Rate",
      metric: "92%",
      icon: BarChart3,
      description: "Percentage of fraudulent transactions successfully identified",
    },
    {
      title: "High-Risk Customers",
      metric: "156",
      icon: Users,
      description: "Number of customers flagged as high-risk",
    },
  ])

  const [dailyTransactions, setDailyTransactions] = React.useState([
    { name: "Mon", total: 1200 },
    { name: "Tue", total: 1500 },
    { name: "Wed", total: 1800 },
    { name: "Thu", total: 2000 },
    { name: "Fri", total: 2400 },
    { name: "Sat", total: 1800 },
    { name: "Sun", total: 1600 },
  ])

  const [fraudByVelocity, setFraudByVelocity] = React.useState([
    { name: "Customer 1", velocity: 2.3, fraud: 1 },
    { name: "Customer 2", velocity: 5.1, fraud: 1 },
    { name: "Customer 3", velocity: 1.2, fraud: 0 },
    { name: "Customer 4", velocity: 4.7, fraud: 1 },
    { name: "Customer 5", velocity: 3.3, fraud: 0 },
    { name: "Customer 6", velocity: 0.8, fraud: 0 },
    { name: "Customer 7", velocity: 6.2, fraud: 1 },
    { name: "Customer 8", velocity: 2.9, fraud: 0 },
  ])

  const [fraudByZipcode, setFraudByZipcode] = React.useState([
    { zipcode: "75001", fraudCount: 5 },
    { zipcode: "75002", fraudCount: 2 },
    { zipcode: "75003", fraudCount: 7 },
    { zipcode: "75004", fraudCount: 3 },
    { zipcode: "75005", fraudCount: 6 },
    { zipcode: "75006", fraudCount: 4 },
    { zipcode: "75007", fraudCount: 8 },
  ])

  const [creditRiskScores, setCreditRiskScores] = React.useState([
    { score: "Very Low", fraudRate: 0.01 },
    { score: "Low", fraudRate: 0.03 },
    { score: "Medium", fraudRate: 0.07 },
    { score: "High", fraudRate: 0.15 },
    { score: "Very High", fraudRate: 0.25 },
  ])

  const onboardingSteps = [
    { element: "#fraud-metrics", title: "Fraud Metrics", description: "These cards show key fraud metrics at a glance." },
    { element: "#daily-transactions", title: "Daily Transactions", description: "This chart shows the total transaction volume for each day of the week." },
    { element: "#fraud-by-velocity", title: "Fraud by Velocity", description: "This scatter plot shows the relationship between transaction velocity and fraud occurrence." },
    { element: "#fraud-by-zipcode", title: "Fraud by Zipcode", description: "This chart displays the number of fraud cases by zipcode." },
    { element: "#credit-risk-scores", title: "Credit Risk Scores", description: "This chart shows the fraud rate for different credit risk categories." },
  ]

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowOnboarding(false)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const startTour = () => {
    setShowOnboarding(true)
    setCurrentStep(0)
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Update fraud metrics
      setFraudMetrics(prevMetrics => prevMetrics.map(metric => ({
        ...metric,
        metric: metric.title === "Total Fraud Cases" 
          ? (parseInt(metric.metric) + Math.floor(Math.random() * 5)).toString()
          : metric.title === "Average Fraud Amount"
          ? `$${(parseFloat(metric.metric.slice(1)) + Math.random() * 100 - 50).toFixed(2)}`
          : metric.title === "Fraud Detection Rate"
          ? `${(parseFloat(metric.metric.slice(0, -1)) + Math.random() * 2 - 1).toFixed(1)}%`
          : (parseInt(metric.metric) + Math.floor(Math.random() * 10) - 5).toString()
      })))

      // Update daily transactions
      setDailyTransactions(prevData => {
        const newData = [...prevData.slice(1), { name: prevData[prevData.length - 1].name, total: Math.floor(Math.random() * 1000) + 1000 }]
        return newData
      })

      // Update fraud by velocity
      setFraudByVelocity(prevData => prevData.map(item => ({
        ...item,
        velocity: parseFloat((Math.random() * 5 + 0.5).toFixed(1)),
        fraud: Math.random() > 0.7 ? 1 : 0
      })))

      // Update fraud by zipcode
      setFraudByZipcode(prevData => prevData.map(item => ({
        ...item,
        fraudCount: Math.floor(Math.random() * 10)
      })))

      // Update credit risk scores
      setCreditRiskScores(prevData => prevData.map(item => ({
        ...item,
        fraudRate: parseFloat((item.fraudRate + (Math.random() * 0.02 - 0.01)).toFixed(2))
      })))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <SidebarProvider>
      <div className="flex flex-col h-screen overflow-hidden lg:flex-row">
        <Sidebar className="w-full lg:w-64 p-4">
          <SidebarHeader>
            <h2 className="px-6 text-lg font-semibold tracking-tight">GuardDog</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveTab("overview")}>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveTab("customers")}>
                  <Users className="mr-2 h-4 w-4" />
                  Customers
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveTab("alerts")}>
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Alerts
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={startTour}>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveTab("settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 overflow-y-auto bg-background p-4 lg:p-6">
          <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 lg:px-6">
            <div className="flex items-center">
              <SidebarTrigger className="lg:hidden" />
              <h1 className="text-xl font-semibold">Fraud Monitoring Dashboard</h1>
            </div>
            <Button variant="outline" onClick={startTour}>
              <HelpCircle className="mr-2 h-4 w-4" />
              Tour
            </Button>
          </header>
          <main className="container mx-auto py-4 lg:py-6">
            {activeTab === "overview" && (
              <>
                <div id="fraud-metrics" className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {fraudMetrics.map((item, index) => (
                    <Card key={item.title} className="h-full relative">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold">{item.metric}</div>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </CardContent>
                      {showOnboarding && currentStep === 0 && index === 0 && (
                        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                          <div className="bg-card p-4 rounded-lg shadow-lg max-w-sm">
                            <h3 className="text-lg font-semibold mb-2">{onboardingSteps[currentStep].title}</h3>
                            <p className="text-sm mb-4">{onboardingSteps[currentStep].description}</p>
                            <div className="flex justify-between">
                              <Button onClick={prevStep} disabled={currentStep === 0}>Previous</Button>
                              <Button onClick={nextStep}>Next</Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
                <div className="mt-6 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card id="daily-transactions" className="relative">
                      <CardHeader>
                        <CardTitle>Daily Transactions</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <ChartContainer className="h-[300px]" config={{ total: { label: "Total", color: "hsl(var(--chart-1))" } }}>
                          <ResponsiveContainer height="100%" width="100%">
                            <BarChart data={dailyTransactions}>
                              <XAxis axisLine={false} dataKey="name" fontSize={12} stroke="#888888" tickLine={false} />
                              <YAxis axisLine={false} fontSize={12} stroke="#888888" tickFormatter={(value) => `$${value}`} tickLine={false} />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Bar dataKey="total" fill="var(--color-total)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </CardContent>
                      {showOnboarding && currentStep === 1 && (
                        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                          <div className="bg-card p-4 rounded-lg shadow-lg max-w-sm">
                            <h3 className="text-lg font-semibold mb-2">{onboardingSteps[currentStep].title}</h3>
                            <p className="text-sm mb-4">{onboardingSteps[currentStep].description}</p>
                            <div className="flex justify-between">
                              <Button onClick={prevStep}>Previous</Button>
                              <Button onClick={nextStep}>Next</Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Card>
                    <Card id="fraud-by-velocity" className="relative">
                      <CardHeader>
                        <CardTitle>Fraud by Velocity</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <ChartContainer
                          className="h-[300px]"
                          config={{
                            fraud: { label: "Fraud", color: "hsl(var(--chart-2))" },
                            noFraud: { label: "No Fraud", color: "hsl(var(--chart-3))" },
                          }}
                        >
                          <ResponsiveContainer height="100%" width="100%">
                            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                              <XAxis axisLine={false} dataKey="velocity" fontSize={12} stroke="#888888" tickLine={false} name="Velocity" />
                              <YAxis
                                axisLine={false}
                                fontSize={12}
                                stroke="#888888"
                                tickLine={false}
                                name="Fraud"
                                tickFormatter={(value) => (value === 1 ? "Fraud" : "No Fraud")}
                              />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Scatter
                                name="Fraud by Velocity"
                                data={fraudByVelocity}
                                fill={(entry) => (entry.fraud === 1 ? "var(--color-fraud)" : "var(--color-noFraud)")}
                                shape="circle"
                              />
                            </ScatterChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </CardContent>
                      {showOnboarding && currentStep === 2 && (
                        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                          <div className="bg-card p-4 rounded-lg shadow-lg max-w-sm">
                            <h3 className="text-lg font-semibold mb-2">{onboardingSteps[currentStep].title}</h3>
                            <p className="text-sm mb-4">{onboardingSteps[currentStep].description}</p>
                            <div className="flex justify-between">
                              <Button onClick={prevStep}>Previous</Button>
                              <Button onClick={nextStep}>Next</Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Card>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card id="fraud-by-zipcode" className="relative">
                      <CardHeader>
                        <CardTitle>Fraud by Zipcode</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <ChartContainer className="h-[300px]" config={{ fraudCount: { label: "Fraud Count", color: "hsl(var(--chart-3))" } }}>
                          <ResponsiveContainer height="100%" width="100%">
                            <BarChart data={fraudByZipcode}>
                              <XAxis axisLine={false} dataKey="zipcode" fontSize={12} stroke="#888888" tickLine={false} />
                              <YAxis axisLine={false} fontSize={12} stroke="#888888" tickLine={false} />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Bar dataKey="fraudCount" fill="var(--color-fraudCount)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </CardContent>
                      {showOnboarding && currentStep === 3 && (
                        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                          <div className="bg-card p-4 rounded-lg shadow-lg max-w-sm">
                            <h3 className="text-lg font-semibold mb-2">{onboardingSteps[currentStep].title}</h3>
                            <p className="text-sm mb-4">{onboardingSteps[currentStep].description}</p>
                            <div className="flex justify-between">
                              <Button onClick={prevStep}>Previous</Button>
                              <Button onClick={nextStep}>Next</Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Card>
                    <Card id="credit-risk-scores" className="relative">
                      <CardHeader>
                        <CardTitle>Credit Risk Scores</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <ChartContainer className="h-[300px]" config={{ fraudRate: { label: "Fraud Rate", color: "hsl(var(--chart-4))" } }}>
                          <ResponsiveContainer height="100%" width="100%">
                            <BarChart data={creditRiskScores}>
                              <XAxis axisLine={false} dataKey="score" fontSize={12} stroke="#888888" tickLine={false} />
                              <YAxis axisLine={false} fontSize={12} stroke="#888888" tickLine={false} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Bar dataKey="fraudRate" fill="var(--color-fraudRate)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </CardContent>
                      {showOnboarding && currentStep === 4 && (
                        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                          <div className="bg-card p-4 rounded-lg shadow-lg max-w-sm">
                            <h3 className="text-lg font-semibold mb-2">{onboardingSteps[currentStep].title}</h3>
                            <p className="text-sm mb-4">{onboardingSteps[currentStep].description}</p>
                            <div className="flex justify-between">
                              <Button onClick={prevStep}>Previous</Button>
                              <Button onClick={nextStep}>Finish</Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Card>
                  </div>
                </div>
              </>
            )}
            {activeTab === "customers" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Customer Management</h2>
                <p>Here you can view and manage customer information, risk profiles, and transaction history.</p>
                {/* Add customer management components here */}
              </div>
            )}
            {activeTab === "alerts" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Fraud Alerts</h2>
                <p>View and manage real-time fraud alerts and notifications.</p>
                {/* Add alert management components here */}
              </div>
            )}
            {activeTab === "settings" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold"> Settings</h2>
                <p>Customize your dashboard preferences, notification settings, and user access controls.</p>
                {/* Add settings components here */}
              </div>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default FraudMonitoringDashboard