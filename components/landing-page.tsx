"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { BookOpenIcon, UserIcon, StarIcon, TrendingUpDown } from "lucide-react"

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <BookOpenIcon className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Grade watch</span>
            </div>
            <div className="flex items-center">
              <Link href="/dashboard" passHref>
                  <Button variant="ghost" className="mr-2 text-blue-300">Login</Button>
                </Link>
                <Link href="/dashboard" passHref>
                <Button>Sign Up</Button>
                </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Flipping Book */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Welcome to Grade Watch</h1>
            <p className="text-xl mb-6">Unlock your potential with our innovative learning platform.</p>
            <Button size="lg" variant="secondary">Get Started</Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              style={{ perspective: "1000px" }}
            >
              <div className="w-64 h-80 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <BookOpenIcon className="h-32 w-32 text-blue-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">About Grade Watch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <TrendingUpDown className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Predictive Grade system</h3>
                <p>Make use of the specially trained AI model at our disposal and see what grade you are more likely to get </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <UserIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                <p>Learn from industry professionals and experienced educators in your field of interest.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <StarIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
                <p>Engage with interactive content and collaborate with peers for a dynamic learning experience.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <p className="mb-4">"Grade Watch has transformed my learning experience. The courses are engaging and the instructors are top-notch!"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-sm text-gray-500">Web Development Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Grade Watch</h3>
              <p>Empowering learners worldwide</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Courses</a></li>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">Facebook</a>
                <a href="#" className="hover:text-blue-400">Twitter</a>
                <a href="#" className="hover:text-blue-400">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 coffeeRoom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage