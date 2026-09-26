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
}

export function getWhatsappLink(message: string = siteConfig.whatsappMessage) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`
}

export function trackWhatsappContact() {
  const pixel = (window as Window & { fbq?: (...args: string[]) => void }).fbq
  pixel?.('track', 'Contact')
}
