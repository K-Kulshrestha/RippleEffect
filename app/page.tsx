import { Link } from "@nextui-org/link"
import { siteConfig } from "@/config/site"
import { button as buttonStyles } from "@nextui-org/theme"

export default function Home() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#ff7f00] to-[#ffb300]">
      {/* Centered Container */}
      <div className="text-center max-w-xl px-6">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold text-white sm:text-6xl mb-4">
          Welcome to <span className="text-violet-200">GuardDog</span>
        </h1>
        <p className="mt-4 text-xl text-white">
          A Smart Dashboard for Fraudulent Transactions
        </p>
        <p className="mt-2 text-lg text-white">
          Protect your bank from fraud with real-time alerts and metrics.
        </p>

        {/* Call-to-action */}
        <div className="mt-10 flex gap-6 justify-center">
          <Link
            href="/employee"
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              className: "px-6 py-3 text-lg"
            })}
          >
            Login
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <p className="text-sm text-white">
            GuardDog helps you stay ahead of fraudulent transactions.
          </p>
          <p className="text-xs text-gray-200 mt-2">
            © 2024 GuardDog. All Rights Reserved.
          </p>
        </footer>
      </div>
    </section>
  )
}
