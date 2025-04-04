import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-teal-50 dark:bg-teal-950/30 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-teal-700 dark:text-teal-400">Fipup Generator</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Create professional documents, badges, and identification materials in minutes with our intuitive online
              platform.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/fipup.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-teal-600"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com/fipup_online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-teal-600"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com/fipup.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-teal-600"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-teal-700 dark:text-teal-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-teal-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/document-maker" className="text-muted-foreground hover:text-teal-600">
                  Document Maker
                </Link>
              </li>
              <li>
                <Link href="/badge-maker" className="text-muted-foreground hover:text-teal-600">
                  Badge Maker
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-teal-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/verify" className="text-muted-foreground hover:text-teal-600">
                  Verify Document
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-teal-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-teal-700 dark:text-teal-400">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-teal-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-teal-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-teal-600">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-teal-700 dark:text-teal-400">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <a href="mailto:support@fipup.online" className="text-muted-foreground hover:text-teal-600">
                  support@fipup.online
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <a href="mailto:fipup@gmail.com" className="text-muted-foreground hover:text-teal-600">
                  fipup@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <a href="tel:+14159876543" className="text-muted-foreground hover:text-teal-600">
                  +1 (415) 987-6543
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">
                  456 Document Drive
                  <br />
                  Suite 789
                  <br />
                  Boston, MA 02108
                </span>
              </li>
              <li className="mt-4">
                <Link href="/contact" className="text-teal-600 hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Fipup Generator by Sarah Wilson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

