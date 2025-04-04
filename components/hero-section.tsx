import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-950/50 dark:to-teal-900/30 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-800 dark:text-teal-400">
              Create Professional Documents & Badges
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-md">
              Design, customize, and download high-quality identification materials in minutes - no registration
              required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/document-maker">
                <Button size="lg" className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700">
                  Create Document
                </Button>
              </Link>
              <Link href="/badge-maker">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-teal-600 text-teal-600 hover:bg-teal-50"
                >
                  Create Badge
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=600&fit=crop"
                alt="Document and Badge Examples"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg">
                <div className="text-sm font-medium text-teal-600 flex items-center">
                  <span className="mr-1">✓</span> No registration required
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

