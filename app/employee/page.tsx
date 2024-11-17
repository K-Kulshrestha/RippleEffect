"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"; // import the Sidebar and its components
import { IconHome, IconUser, IconSettings } from "@tabler/icons-react"; // import icons from Tabler
import { cn } from "@/lib/utils"; // utility for combining classNames (if you have it set up)

const links = [
  {
    label: "Home",
    href: "/home",
    icon: <IconHome className="h-5 w-5" />,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: <IconUser className="h-5 w-5" />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <IconSettings className="h-5 w-5" />,
  },
];

const MyPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar component */}
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="flex flex-col">
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Main content (other part of the page) */}
      <div className="flex-1 p-10 bg-gray-50 dark:bg-neutral-800">
        <h1 className="text-2xl text-black dark:text-white">Welcome to the Dashboard</h1>
        {/* Add additional content here */}
      </div>
    </div>
  );
};

export default MyPage;
