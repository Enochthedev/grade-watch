/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { NavItem } from './navItem'
import { 
  LayoutDashboardIcon, 
  BookOpenIcon, 
  UserIcon, 
  GraduationCapIcon, 
  SettingsIcon,
  CalendarIcon,
  MessageCircleIcon,
  FileTextIcon,
  BellIcon,
  HelpCircleIcon
} from "lucide-react"
import { ScrollArea } from "../../components/ui/scroll-area"
import { Separator } from "../../components/ui/separator"

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void; 
}
type RouteMapKeys = '/dashboard' | '/courses' | '/schedule' | '/course-advisor' | '/grade' | '/messages' | '/assignments' | '/notifications' | '/settings' | '/support';

// Update your navItems array to be typed with RouteMapKeys
const navItems: Array<{ icon: React.ReactNode, label: string, href: RouteMapKeys }> = [
  { icon: <LayoutDashboardIcon className="h-5 w-5" />, label: "Dashboard", href: "/dashboard" },
  { icon: <BookOpenIcon className="h-5 w-5" />, label: "Courses", href: "/courses" },
  { icon: <CalendarIcon className="h-5 w-5" />, label: "Schedule", href: "/schedule" },
  { icon: <UserIcon className="h-5 w-5" />, label: "Course Advisor", href: "/course-advisor" },
  { icon: <GraduationCapIcon className="h-5 w-5" />, label: "Grades", href: "/grade" },
  { icon: <MessageCircleIcon className="h-5 w-5" />, label: "Messages", href: "/messages" },
  { icon: <FileTextIcon className="h-5 w-5" />, label: "Assignments", href: "/assignments" },
  { icon: <BellIcon className="h-5 w-5" />, label: "Notifications", href: "/notifications" },
  { icon: <SettingsIcon className="h-5 w-5" />, label: "Settings", href: "/settings" },
  { icon: <HelpCircleIcon className="h-5 w-5" />, label: "Help & Support", href: "/support" },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="w-64 bg-gray-900 text-white h-screen flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Grade Watch</h1>
        <Separator className="my-4" />
      </div>
      <ScrollArea className="flex-grow px-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href  as RouteMapKeys}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>
      </ScrollArea>
      <div className="p-4">
        <Separator className="my-4" />
        <p className="text-sm text-gray-400">© 2024 Coffeeroom</p>
      </div>
    </nav>
  );
}

export default Sidebar
