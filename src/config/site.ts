// Dados centrais do site — troque aqui número de WhatsApp, Instagram e afins.
export const siteConfig = {
  name: "TNP",
  footerName: "TNP Corp",
  fullName: "TNP Method",
  role: "Training • Nutrition • Performance",
  whatsappNumber: "5547999800963", // formato: 55 + DDD + número
  whatsappDisplay: "+55 47 99980-0963",
  whatsappMessage: "Olá, TNP! Estou pronto para entrar no jogo e quero conhecer os planos.",
  instagramHandle: "@tnpmethod",
  instagramUrl: "https://instagram.com/tnp_method",
  siteUrl: "https://tnpmethod.com",
}

export function getWhatsappLink(message: string = siteConfig.whatsappMessage) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`
}

type Gtag = (
  command: 'event',
  eventName: string,
  options: { event_callback: () => void; event_timeout: number },
) => void

export function trackWhatsappContact(url: string) {
  const pixel = (window as Window & { fbq?: (...args: string[]) => void }).fbq
  pixel?.('track', 'Contact')

  const openWhatsapp = () => {
    if (typeof url === 'string') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }
  const gtag = (window as Window & { gtag?: Gtag }).gtag

  if (typeof gtag === 'function') {
    gtag('event', 'whatsapp_click', {
      event_callback: openWhatsapp,
      event_timeout: 2000,
    })
  } else {
    openWhatsapp()
  }
}
