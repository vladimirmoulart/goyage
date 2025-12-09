import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  explorer: [
    { label: "Toutes les expériences", href: "/explorer" },
    { label: "Destinations", href: "/destinations" },
    { label: "Catégories", href: "/categories" },
    { label: "Carte interactive", href: "/carte" },
  ],
  hotes: [
    { label: "Devenir hôte", href: "/devenir-hote" },
    { label: "Ressources hôtes", href: "/ressources-hotes" },
    { label: "Standards de qualité", href: "/standards" },
    { label: "Forum communauté", href: "/communaute" },
  ],
  support: [
    { label: "Centre d'aide", href: "/aide" },
    { label: "Confiance & sécurité", href: "/securite" },
    { label: "Conditions d'annulation", href: "/annulation" },
    { label: "Contactez-nous", href: "/contact" },
  ],
  apropos: [
    { label: "Notre histoire", href: "/a-propos" },
    { label: "Notre mission", href: "/mission" },
    { label: "Carrières", href: "/carrieres" },
    { label: "Presse", href: "/presse" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Restez inspiré</h3>
              <p className="text-white/70 mt-1">Recevez nos meilleures expériences et conseils de voyage.</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:border-coral w-64"
              />
              <Button className="bg-coral hover:bg-coral/90 text-white rounded-full px-6">S'inscrire</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-coral">
              GOYAGE
            </Link>
            <p className="mt-4 text-white/70 text-sm">Voyagez autrement, vivez vraiment.</p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-coral transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-coral transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-coral transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-coral transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Explorer</h4>
            <ul className="space-y-3">
              {footerLinks.explorer.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-coral transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hôtes</h4>
            <ul className="space-y-3">
              {footerLinks.hotes.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-coral transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-coral transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">À propos</h4>
            <ul className="space-y-3">
              {footerLinks.apropos.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-coral transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2025 GOYAGE. Tous droits réservés.</p>
            <div className="flex gap-6">
              <Link href="/confidentialite" className="hover:text-coral transition-colors">
                Confidentialité
              </Link>
              <Link href="/conditions" className="hover:text-coral transition-colors">
                Conditions
              </Link>
              <Link href="/cookies" className="hover:text-coral transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
