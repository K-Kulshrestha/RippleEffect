import "@/styles/globals.css";
import { ReactNode } from "react";
import clsx from "clsx";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx("min-h-screen bg-[#171721] antialiased")}>
        <div className="relative flex flex-col h-screen">
        <header className="w-full bg-[#13131E] shadow-md">
  <nav className="flex justify-between items-center p-4 text-white">
    <div className="text-xl font-semibold">GuardDog</div>
    <div className="space-x-6">
    </div>
  </nav>
</header>
          <main className="container mx-auto max-w-screen pt-16 px-6 bg-[#171721]">
            {children}
          </main>
          <footer className="bg-[#13131E] py-6">
  <div className="flex justify-center items-center text-white">
    <p className="text-sm text-center">
      © 2024 <span className="font-semibold">Your Company Name</span>. All rights reserved.
    </p>
  </div>
</footer>
        </div>
      </body>
    </html>
  );
}
