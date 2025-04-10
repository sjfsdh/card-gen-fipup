import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { AdSpace } from "@/components/ad-space"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        <AdSpace className="max-w-5xl" />

        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-teal-800 dark:text-teal-400">
            Create Professional Materials in Minutes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-teal-500 hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle>Document Maker</CardTitle>
                <CardDescription>Create professional documents for various purposes and organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=400&fit=crop"
                  alt="Document Preview"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="mr-2 text-teal-500">✓</span>
                    Multiple templates and styles
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-teal-500">✓</span>
                    QR code and barcode generation
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-teal-500">✓</span>
                    Customizable fields and design
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/document-maker" className="w-full">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Create Document</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-2 hover:border-teal-500 hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle>Badge Maker</CardTitle>
                <CardDescription>Design professional badges for employees, events, visitors, and more</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1471970394675-613138e45da3?w=600&h=400&fit=crop"
                  alt="Badge Preview"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="mr-2 text-teal-500">✓</span>
                    Professional badge templates
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-teal-500">✓</span>
                    Verification system with unique codes
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-teal-500">✓</span>
                    Customizable text, colors, and images
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/badge-maker" className="w-full">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Create Badge</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>

        <FeatureSection />

        <AdSpace className="max-w-5xl" />

        <HowItWorks />
        <Testimonials />

        <AdSpace className="max-w-5xl" />
      </main>
    </div>
  )
}

