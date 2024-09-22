"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { UserIcon, SunIcon, MoonIcon } from "lucide-react"
import Sidebar from './navigation/sidebar'
import React from "react"

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

export function StudentDashboardComponent() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  return (
    <div className={`flex h-screen overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <style>{`
        :root {
          --color-primary: ${darkMode ? '#613912' : '#AF835C'};
          --color-primary-foreground: ${darkMode ? '#D8DEB9' : '#FFFFFF'};
          --color-secondary: ${darkMode ? '#FF9653' : '#D8DEB9'};
          --color-secondary-foreground: ${darkMode ? '#FFFFFF' : '#613912'};
          --color-accent: ${darkMode ? '#D8DEB9' : '#FF9653'};
          --color-accent-foreground: ${darkMode ? '#613912' : '#FFFFFF'};
          --color-background: ${darkMode ? '#613912' : '#FFFFFF'};
          --color-foreground: ${darkMode ? '#FFFFFF' : '#613912'};
        }
      `}</style>
      
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold"></h1>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900">
            <CardHeader>
              <CardTitle>Assumed GP</CardTitle>
              <CardDescription className="text-neutral-50/70 dark:text-neutral-900/70">Based on current performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{data.assumed_GP}</div>
              <Progress value={parseFloat(data.assumed_GP) * 25} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900">
            <CardHeader>
              <CardTitle>Current GP</CardTitle>
              <CardDescription className="text-neutral-50/70 dark:text-neutral-900/70">Your GP as of now</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{data.current_GP}</div>
              <Progress value={parseFloat(data.current_GP) * 25} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900">
            <CardHeader>
              <CardTitle>Target GP</CardTitle>
              <CardDescription className="text-neutral-50/70 dark:text-neutral-900/70">Your goal for this semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{data.target_GP}</div>
              <Progress value={parseFloat(data.target_GP) * 25} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50">
          <CardHeader>
            <CardTitle>GP Progress</CardTitle>
            <CardDescription className="text-neutral-900/70 dark:text-neutral-50/70">Your GP change over semesters</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.gp_tracked}>
                <CartesianGrid strokeDasharray="3" stroke="var(--color-accent)" />
                <XAxis dataKey="semester" stroke="var(--color-secondary-foreground)" />
                <YAxis domain={[0, 4]} stroke="var(--color-secondary-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-primary-foreground)",
                    border: "none",
                  }}
                />
                <Line type="monotone" dataKey="gp" stroke="var(--color-accent)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="mt-6 bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50">
          <CardHeader>
            <CardTitle>User Details</CardTitle>
            <CardDescription className="text-neutral-900/70 dark:text-neutral-50/70">Your personal information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="font-semibold">Name</h3>
                <p>{data.user.name}</p>
              </div>
              <div>
                <h3 className="font-semibold">Student ID</h3>
                <p>{data.user.id}</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>{data.user.email}</p>
              </div>
              <div>
                <h3 className="font-semibold">Major</h3>
                <p>{data.user.major}</p>
              </div>
              <div>
                <h3 className="font-semibold">Year</h3>
                <p>{data.user.year}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
