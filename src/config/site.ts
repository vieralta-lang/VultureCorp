// Dados centrais do site — troque aqui número de WhatsApp, Instagram e afins.
export const siteConfig = {
  name: "TNP",
  fullName: "TNP Method",
  role: "Training • Nutrition • Performance",
  whatsappNumber: "5547999800963", // formato: 55 + DDD + número
  whatsappDisplay: "+55 47 99980-0963",
  whatsappMessage: "Olá, TNP! Quero começar minha consultoria fitness.",
  instagramHandle: "@tnpmethod",
  instagramUrl: "https://instagram.com/tnpmethod",
}

export function getWhatsappLink(message: string = siteConfig.whatsappMessage) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`
}
