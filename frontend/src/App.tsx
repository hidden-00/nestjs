'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full px-4 lg:px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center justify-center">
          <BuildingIcon className="h-6 w-6" />
          <span className="ml-2 font-bold">CompanyPro</span>
        </a>
        <nav className="flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Streamline Your Company Management
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Empower your business with our all-in-one company management solution. Boost productivity, enhance collaboration, and drive growth.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Start Free Trial</Button>
                <Button variant="outline">Schedule Demo</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Employee Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Efficiently manage your workforce with comprehensive employee profiles, time tracking, and performance evaluations.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Keep your projects on track with real-time progress monitoring, task assignments, and deadline management.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Financial Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Gain insights into your company's financial health with expense tracking, budget management, and financial reporting.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Communication Hub</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Foster collaboration with integrated messaging, video conferencing, and file sharing capabilities.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Analytics Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Make data-driven decisions with customizable analytics dashboards and detailed performance reports.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Resource Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Optimize resource utilization with intelligent allocation suggestions and capacity planning tools.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Flexible Pricing Plans</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$99/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>Up to 10 employees</li>
                    <li>Basic project tracking</li>
                    <li>Employee profiles</li>
                    <li>5GB storage</li>
                  </ul>
                  <Button className="mt-6 w-full">Choose Plan</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$299/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>Up to 50 employees</li>
                    <li>Advanced project tracking</li>
                    <li>Financial reporting</li>
                    <li>25GB storage</li>
                  </ul>
                  <Button className="mt-6 w-full">Choose Plan</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">Custom</p>
                  <ul className="mt-4 space-y-2">
                    <li>Unlimited employees</li>
                    <li>Full feature access</li>
                    <li>Dedicated support</li>
                    <li>Custom integrations</li>
                  </ul>
                  <Button className="mt-6 w-full">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Clients Say</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-4">
                  <p className="italic">"CompanyPro has revolutionized how we manage our team and projects. It's an indispensable tool for our business."</p>
                  <p className="mt-4 font-bold">- Sarah Johnson, CEO of TechInnovate</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <p className="italic">"The analytics dashboard has given us invaluable insights into our operations. We've seen a 30% increase in productivity."</p>
                  <p className="mt-4 font-bold">- Michael Chen, COO of GrowthWave</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <p className="italic">"The customer support team is exceptional. They've been incredibly helpful in customizing the platform to our needs."</p>
                  <p className="mt-4 font-bold">- Emily Rodriguez, HR Director at InnovateCorp</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Company?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Get in touch with us to learn more about how CompanyPro can help your business thrive.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input className="max-w-lg flex-1" placeholder="Your Name" type="text" />
                  <Input className="max-w-lg flex-1" placeholder="Your Email" type="email" />
                  <Input className="max-w-lg flex-1" placeholder="Company Name" type="text" />
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="How can we help you?"
                  ></textarea>
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CompanyPro. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Privacy Policy
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Support
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}