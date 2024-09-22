"use client"

import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { FacebookIcon, TwitterIcon, InstagramIcon, UserIcon, SunIcon, MoonIcon } from "lucide-react"
import Sidebar from './navigation/sidebar'

const data = {
  assumed_GP: "3.5",
  current_GP: "2.8",
  target_GP: "4.0",
  user: {
    id: "12345",
    name: "John Doe",
    email: "john.doe@example.com",
    major: "Computer Science",
    year: "3"
  },
  gp_tracked: [
    { semester: 1, gp: 2.8 },
    { semester: 2, gp: 3.1 },
    { semester: 3, gp: 3.4 },
    { semester: 4, gp: 3.6 }
  ]
}

const ComingSoonPage: React.FC = () => {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState("dashboard")
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  useEffect(() => {
    if (pathname === "/dashboard") {
      setActiveTab("dashboard")
    } else if (["/waitlist", "/schedule", "/student-dashboard", "/messages", "/assignments", "/notifications", "/settings", "/support"].includes(pathname)) {
      setActiveTab("waitlist")
    } else {
      setActiveTab("dashboard")
    }
  }, [pathname])

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [email, setEmail] = useState("")

  useEffect(() => {
    const targetDate = new Date("2025-12-30T00:00:00")

    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted email:", email)
    setEmail("")
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-4 bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50 shadow">
          <h1 className="text-3xl font-bold">Welcome</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <UserIcon className="h-4 w-4" />
              {data.user.name}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
            </Button>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center p-4 md:p-8 bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Coming Soon</CardTitle>
              <CardDescription className="text-center">
                We&apos;re working hard to bring you something amazing. Stay tuned!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 mb-8">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center">
                    <div className="text-4xl font-bold">{value >= 0 ? value : 0}</div>
                    <div className="text-sm uppercase">{unit}</div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full">
                  Notify Me
                </Button>
              </form>
              <div className="flex justify-center space-x-4 mt-8">
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <FacebookIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <TwitterIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <InstagramIcon className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

export default ComingSoonPage
