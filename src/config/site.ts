// Dados centrais do site — troque aqui número de WhatsApp, Instagram e afins.
export const siteConfig = {
  name: "Guilherme Posanski",
  role: "Personal Trainer & Consultor Fitness",
  whatsappNumber: "5511999999999", // formato: 55 + DDD + número
  whatsappMessage: "Olá, Guilherme! Quero começar minha consultoria fitness.",
  instagramHandle: "@guilhermeposanski",
  instagramUrl: "https://instagram.com/guilhermeposanski",
}

export function getWhatsappLink(message: string = siteConfig.whatsappMessage) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`
}
