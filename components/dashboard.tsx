/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect } from "react"
import { Bell, ChevronDown,UserIcon, SunIcon, MoonIcon } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { PieChart, Pie, Cell } from "recharts"
import Sidebar from "./navigation/sidebar"
import React from "react"

const weekData = [
  { day: "Mon", hours: 3 },
  { day: "Tue", hours: 2 },
  { day: "Wed", hours: 5 },
  { day: "Thu", hours: 4 },
  { day: "Fri", hours: 3 },
  { day: "Sat", hours: 2 },
  { day: "Sun", hours: 2 },
]

const activityData = [
  { name: "Study", value: 57 },
  { name: "Exams", value: 19 },
  { name: "Other", value: 24 },
]

const COLORS = ["#FF6B8A", "#FFC777", "#47B4FF"]

export function DashboardComponent() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  return (
    <div className={`flex h-screen overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-8 h-auto overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-black">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5 text-black" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
               {darkMode ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4 text-black" />}
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8/10</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12 tasks</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">You have new messages!</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" size="sm">
                View messages
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weekData}>
                  <CartesianGrid strokeDasharray="3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="hours" fill="#FF6B8A" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={activityData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {activityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 flex justify-between">
                {activityData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index] }}></div>
                    <span>{entry.name}: {entry.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>My Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Web Design</span>
                  <span className="text-sm font-medium">50%</span>
                </div>
                <Progress value={50} className="w-full" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">JavaScript</span>
                  <span className="text-sm font-medium">27%</span>
                </div>
                <Progress value={27} className="w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <aside className={`w-80 p-4 hidden lg:block ${darkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
        <div className="mb-8">
          <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Calendar</h3>
          <div className="space-y-2">
            <div className={`flex justify-between items-center ${darkMode ? 'text-white' : 'text-black'}`}>
              <span className="font-medium">10:00 AM</span>
              <span>Meeting: New learning formats</span>
            </div>
            <div className={`flex justify-between items-center ${darkMode ? 'text-white' : 'text-black'}`}>
              <span className="font-medium">11:00 AM</span>
              <span>Lecture: Web Design Trends</span>
            </div>
            <div className={`flex justify-between items-center ${darkMode ? 'text-white' : 'text-black'}`}>
              <span className="font-medium">2:00 PM</span>
              <span>Lesson: JavaScript Features</span>
            </div>
            <div className={`flex justify-between items-center ${darkMode ? 'text-white' : 'text-black'}`}>
              <span className="font-medium">4:30 PM</span>
              <span>Exam: JavaScript</span>
            </div>
          </div>
          <Button className="w-full mt-4 text-black" variant="outline">
            All events
          </Button>
        </div>

        
      </aside>
      
    </div>
  )
}
