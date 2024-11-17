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
      <body className={clsx("min-h-screen bg-background antialiased")}>
        <div className="relative flex flex-col h-screen">
          <header className="w-full">
            {/* You can replace this with a general navigation component */}
            <nav className="p-4">OmniVault</nav>
          </header>
          <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
            {children}
          </main>
          <footer className="w-full flex items-center justify-center py-3">
            <p>© 2024 Your Company Name</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
