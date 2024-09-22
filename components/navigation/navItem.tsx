import Link from 'next/link';
import { Button } from "../../components/ui/button";
import React, { ReactNode } from 'react';

type RouteMapKeys = "/dashboard" | "/courses" | "/schedule" | "/course-advisor" | "/grade" | "/messages" | "/assignments" | "/notifications" | "/settings" | "/support";
interface NavItemProps {
  icon: ReactNode; 
  label: string; 
  href: RouteMapKeys;
  activeTab: string; 
  setActiveTab: (tab: string) => void; 
}
const routeMap = {
  "/dashboard": "dashboard",
  "/courses": "courses",
  "/schedule": "schedule",
  "/course-advisor": "course advisor",
  "/grade": "grades",
  "/messages": "messages",
  "/assignments": "assignments",
  "/notifications": "notifications",
  "/settings": "settings",
  "/support": "help & support",
}

export const NavItem: React.FC<NavItemProps> = ({ icon, label, href, activeTab, setActiveTab }) => {
  const isActive = activeTab === routeMap[href]; // Check against route map

  return (
    <Link href={href} passHref>
      <Button
        variant={isActive ? "secondary" : "ghost"}
        className="w-full justify-start"
        onClick={() => setActiveTab(routeMap[href])} // Set active tab based on route map
      >
        {icon}
        <span className="ml-2">{label}</span>
      </Button>
    </Link>
  );
};
