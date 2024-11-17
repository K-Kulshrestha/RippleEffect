import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-gradient-to-r from-[#ff7f00] to-[#ffb300]">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Welcome to&nbsp;</span>
        <span className={title({ color: "violet" })}>GuardDog&nbsp;</span>
        <br />
        <span className={title()}>A Smart Dashboard for&nbsp;</span>
        <span className={title({ color: "violet" })}>
          Fraudulent Transactions&nbsp;
        </span>
        <br />
        <span className={title()}>
          Protect your bank from financial fraud with real-time metrics and
          alerts.
        </span>
        <div className={subtitle({ class: "mt-4 text-lg" })}>
          Secure, Intelligent, and Always On Guard.
        </div>
      </div>

      {/* Key Features */}
      <div className="text-center py-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">
          Track Fraudulent Transactions
        </h2>
        <div className="flex justify-evenly gap-8">
          <div className="flex flex-col items-center">
            <GithubIcon className="h-12 w-12 text-primary" />
            <h3 className="font-semibold mt-2">Real-time Metrics</h3>
            <p className="text-sm text-gray-600">
              Get live updates on suspicious transactions and trends, ensuring
              you never miss a thing.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Snippet className="h-12 w-12 text-primary" />
            <h3 className="font-semibold mt-2">Fraud Score Analytics</h3>
            <p className="text-sm text-gray-600">
              Analyze fraud scores based on transaction history to quickly
              identify risks and prevent losses.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Code className="h-12 w-12 text-primary" />
            <h3 className="font-semibold mt-2">Custom Alerts</h3>
            <p className="text-sm text-gray-600">
              Set up personalized alerts to notify you when suspicious activity
              is detected.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-action */}
      <div className="flex gap-4 mt-8">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Login to GuardDog
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          Sign Up Now
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-600">
          GuardDog is the most reliable tool to help you stay ahead of
          fraudulent money transfers.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          © 2024 GuardDog. All Rights Reserved.
        </p>
      </footer>
    </section>
  );
}
