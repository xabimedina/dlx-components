import Facebook from "./icons/facebook";
import Instagram from "./icons/instagram";
import LinkedIn from "./icons/linkedin";
import TikTok from "./icons/tiktok";
import YouTube from "./icons/youtube";
import { DlxLink } from "../dlx-link";
import { FooterSocialMedia } from "./footer-social-media";

interface FooterProps {
  showSocialMedia?: boolean;
  showServices?: boolean;
  showLastProjects?: boolean;
}

const socialMediaLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61591267977461",
  },
  {
    icon: Instagram,
    label: "Instagram",
    link: "https://www.instagram.com/despejalax/",
  },
  {
    icon: LinkedIn,
    label: "LinkedIn",
    link: "https://www.linkedin.com/company/130274084/",
  },
  {
    icon: YouTube,
    label: "YouTube",
    link: "https://www.youtube.com/@DespejalaXarquitectura",
  },
  {
    icon: TikTok,
    label: "TikTok",
    link: "https://www.tiktok.com/@despeja_la_x",
  },
] as const;

export function DlxFooter({ showSocialMedia = true, showServices = true, showLastProjects = true }: FooterProps) {
  return (
    <div className="w-full">
      {/* Footer Section */}
      <footer className="bg-jet text-smoke py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Logo and Brand */}
            <div className="lg:col-span-1">
              <div className="w-3/4 mb-6">
                <img src="/brand/dlx-logo-white.png" alt="DespejalaX Logo" />
              </div>
              <p className="text-smoke px-2 leading-relaxed">
                Soluciones innovadoras para tu hogar.
              </p>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {showServices && (
                <div>
                  <h3 className="font-semibold text-lg mb-4">Servicios</h3>
                  <ul className="space-y-3">
                    <li>
                      <DlxLink
                        href="https://www.despejalax.es#arquitectura">Arquitectura</DlxLink>
                    </li>
                    <li>
                      <DlxLink
                        href="https://www.despejalax.es#interiorismo">Interiorismo</DlxLink>
                    </li>
                    <li>
                      <DlxLink
                        href="https://www.despejalax.es#asesoramiento">Asesoramiento</DlxLink>
                    </li>
                  </ul>
                </div>)}

              {showLastProjects && (
                <div>
                  <h3 className="font-semibold text-lg mb-4">
                    Ultimos proyectos
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <DlxLink
                        href="https://www.despejalax.es/proyectos">RMNC</DlxLink>
                    </li>
                    <li>
                      <DlxLink
                        href="https://www.despejalax.es/proyectos">MGJA</DlxLink>
                    </li>
                    <li>
                      <DlxLink
                        href="https://www.despejalax.es/proyectos">XMYN</DlxLink>
                    </li>
                  </ul>
                </div>)}
            </div>

            {/* Social Media Icons */}
            {showSocialMedia && (
              <div className="lg:col-span-1">
                <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
                <div className="flex flex-wrap items-center gap-6 py-2">
                  {socialMediaLinks.map(({ icon: Icon, label, link }) => (
                    <FooterSocialMedia
                      key={label}
                      icon={<Icon className="h-5 w-5" />}
                      label={label}
                      link={link}
                    />
                  ))}
                </div>
              </div>)}
          </div>

          {/* Bottom Bar */}
          <div className=" mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 DespejalAX. Todos los derechos reservados.
              </p>
              {/* <div className='flex space-x-6 text-sm'>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Política de Privacidad
                </a>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Términos de Servicio
                </a>
              </div> */}
            </div>
          </div>

          {/* Accent Line */}
          <div className="mt-8">
            <div className="h-1 bg-saffron"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
