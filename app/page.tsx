"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, TrendingUp, Users, CheckCircle, Star, Menu, X } from "lucide-react"
import { QuizModal } from "@/components/quiz-modal"
import { LanguageToggle } from "@/components/language-toggle"

const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre Nós",
      services: "Serviços",
      contact: "Contato",
    },
    hero: {
      badge: "Agência #1 em Tráfego Pago + IA",
      title: "Eleve Seus Resultados com",
      titleHighlight: "Tráfego Estratégico + IA",
      subtitle:
        "Somos especialistas em transformar investimento em tráfego pago em resultados reais. Nossa metodologia combina campanhas estratégicas com automações de IA para maximizar o retorno sobre investimento.",
      cta: "Quero Elevar Meus Resultados",
      watchDemo: "Ver Demonstração",
    },
    niches: {
      badge: "Nossos Nichos",
      title: "Especialistas em Setores de Alto Valor",
      subtitle: "Dominamos as estratégias específicas para cada segmento",
      items: [
        {
          title: "Clínicas & Estética",
          description: "Especialistas, clínicas gerais e centros de estética",
          icon: "🏥",
        },
        {
          title: "Advogados",
          description: "Escritórios e profissionais liberais do direito",
          icon: "⚖️",
        },
        {
          title: "Corretores de Imóveis",
          description: "Imobiliárias e corretores independentes",
          icon: "🏠",
        },
        {
          title: "Lojas em Geral",
          description: "E-commerce e varejo físico",
          icon: "🛍️",
        },
      ],
    },
    about: {
      badge: "Sobre a ELEV",
      title: "Elevamos Negócios ao Próximo Nível",
      description:
        "Somos especialistas em transformar investimento em tráfego pago em resultados reais. Nossa metodologia proprietária combina campanhas estratégicas com automações de IA para maximizar o retorno sobre investimento.",
      features: [
        "3 anos de experiência em tráfego pago",
        "Equipe certificada em Google Ads e Meta Ads",
        "Tecnologia proprietária de IA conversacional",
        "Estrutura completa de I.A Conversacional",
      ],
    },
    services: {
      badge: "Nossos Serviços",
      title: "Soluções Completas para Crescimento",
      subtitle: "Da atração à conversão, cuidamos de todo o funil de vendas do seu negócio",
      items: [
        {
          icon: TrendingUp,
          title: "Tráfego Pago Estratégico",
          description:
            "Campanhas otimizadas no Google Ads e Meta Ads focadas em atrair leads qualificados para seu nicho específico.",
          features: ["Segmentação avançada", "Funis personalizados", "Trackeamento avançado"],
        },
        {
          icon: Bot,
          title: "Agentes de IA 24/7",
          description:
            "Atendimento automatizado que recepciona, nutre e converte leads em vendas, mesmo fora do horário comercial.",
          features: ["Respostas instantâneas", "Qualificação automática", "Agendamento inteligente"],
        },
        {
          icon: Users,
          title: "CRM Automatizado",
          description:
            "Sistema completo de gestão de clientes com follow-up automático, lembretes e nutrição de relacionamento.",
          features: ["Follow-up inteligente", "Lembretes automáticos", "Relatórios detalhados"],
        },
        {
          icon: CheckCircle,
          title: "Websites e Landing Pages",
          description: "Desenvolvimento de sites e páginas de conversão otimizadas para performance e resultados.",
          features: ["Design responsivo", "Otimização SEO", "Alta conversão"],
        },
      ],
    },
    testimonials: {
      badge: "Depoimentos",
      title: "O Que Nossos Clientes Dizem",
      items: [
        {
          name: "Dr. Carlos Silva",
          role: "Clínica CardioVida",
          content:
            "Aumentamos significativamente nossa base de pacientes. O suporte é eficiente e as estratégias realmente funcionam!",
          rating: 5,
        },
        {
          name: "Dra. Ana Costa",
          role: "Escritório de Advocacia",
          content:
            "O atendimento automatizado revolucionou nosso escritório. Conseguimos mais clientes com estratégias que funcionam de verdade.",
          rating: 5,
        },
        {
          name: "Roberto Lima",
          role: "Imobiliária Premium",
          content:
            "O suporte é excepcional e o aumento de clientes foi impressionante. Estratégias eficientes que realmente entregam resultados!",
          rating: 5,
        },
      ],
    },
    cta: {
      badge: "Comece Hoje",
      title: "Pronto para Elevar Seus Resultados?",
      subtitle: "Agende uma consultoria gratuita e descubra como podemos elevar o seu marketing",
      button: "Quero Minha Consultoria Gratuita",
    },
    footer: {
      description: "Agência especializada em tráfego pago e automações com IA para negócios de alto valor.",
      rights: "Todos os direitos reservados.",
      links: {
        privacy: "Política de Privacidade",
        terms: "Termos de Uso",
      },
    },
    privacy: {
      title: "Política de Privacidade",
      content: `
        <h2>1. Informações que Coletamos</h2>
        <p>Coletamos informações que você nos fornece diretamente, como nome, e-mail, telefone e informações sobre seu negócio quando você preenche nossos formulários.</p>
        
        <h2>2. Como Usamos suas Informações</h2>
        <p>Utilizamos suas informações para entrar em contato, fornecer nossos serviços, enviar comunicações relevantes e melhorar nossa plataforma.</p>
        
        <h2>3. Compartilhamento de Informações</h2>
        <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços.</p>
        
        <h2>4. Segurança</h2>
        <p>Implementamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.</p>
        
        <h2>5. Seus Direitos</h2>
        <p>Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Entre em contato conosco para exercer esses direitos.</p>
        
        <h2>6. Contato</h2>
        <p>Para questões sobre esta política, entre em contato através do nosso site.</p>
      `,
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      badge: "#1 Agency in Paid Traffic + AI",
      title: "Elevate Your Results with",
      titleHighlight: "Strategic Traffic + AI",
      subtitle:
        "We are specialists in transforming paid traffic investment into real results. Our methodology combines strategic campaigns with AI automations to maximize return on investment.",
      cta: "Elevate My Results",
      watchDemo: "Watch Demo",
    },
    niches: {
      badge: "Our Niches",
      title: "Specialists in High-Value Sectors",
      subtitle: "We master specific strategies for each segment",
      items: [
        {
          title: "Clinics & Aesthetics",
          description: "Specialists, general clinics and aesthetic centers",
          icon: "🏥",
        },
        {
          title: "Lawyers",
          description: "Law firms and legal professionals",
          icon: "⚖️",
        },
        {
          title: "Real Estate Brokers",
          description: "Real estate agencies and independent brokers",
          icon: "🏠",
        },
        {
          title: "General Stores",
          description: "E-commerce and physical retail",
          icon: "🛍️",
        },
      ],
    },
    about: {
      badge: "About ELEV",
      title: "We Elevate Businesses to the Next Level",
      description:
        "We are specialists in transforming paid traffic investment into real results. Our proprietary methodology combines strategic campaigns with AI automations to maximize return on investment.",
      features: [
        "3 years of experience in paid traffic",
        "Team certified in Google Ads and Meta Ads",
        "Proprietary conversational AI technology",
        "Complete Conversational A.I Structure",
      ],
    },
    services: {
      badge: "Our Services",
      title: "Complete Solutions for Growth",
      subtitle: "From attraction to conversion, we handle your business's entire sales funnel",
      items: [
        {
          icon: TrendingUp,
          title: "Strategic Paid Traffic",
          description:
            "Optimized campaigns on Google Ads and Meta Ads focused on attracting qualified leads for your specific niche.",
          features: ["Advanced targeting", "Custom funnels", "Advanced tracking"],
        },
        {
          icon: Bot,
          title: "24/7 AI Agents",
          description:
            "Automated service that welcomes, nurtures and converts leads into sales, even outside business hours.",
          features: ["Instant responses", "Automatic qualification", "Smart scheduling"],
        },
        {
          icon: Users,
          title: "Automated CRM",
          description:
            "Complete customer management system with automatic follow-up, reminders and relationship nurturing.",
          features: ["Smart follow-up", "Automatic reminders", "Detailed reports"],
        },
        {
          icon: CheckCircle,
          title: "Websites & Landing Pages",
          description: "Development of websites and conversion pages optimized for performance and results.",
          features: ["Responsive design", "SEO optimization", "High conversion"],
        },
      ],
    },
    testimonials: {
      badge: "Testimonials",
      title: "What Our Clients Say",
      items: [
        {
          name: "Dr. John Smith",
          role: "CardioLife Clinic",
          content:
            "We significantly increased our patient base. The support is efficient and the strategies really work!",
          rating: 5,
        },
        {
          name: "Sarah Johnson",
          role: "Law Firm",
          content: "Automated service revolutionized our office. We get more clients with strategies that truly work.",
          rating: 5,
        },
        {
          name: "Michael Brown",
          role: "Premium Real Estate",
          content:
            "The support is exceptional and the increase in clients was impressive. Efficient strategies that really deliver results!",
          rating: 5,
        },
      ],
    },
    cta: {
      badge: "Start Today",
      title: "Ready to Elevate Your Results?",
      subtitle: "Schedule a free consultation and discover how we can elevate your marketing",
      button: "Get My Free Consultation",
    },
    footer: {
      description: "Agency specialized in paid traffic and AI automations for high-value businesses.",
      rights: "All rights reserved.",
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Use",
      },
    },
    privacy: {
      title: "Privacy Policy",
      content: `
        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as name, email, phone, and business information when you fill out our forms.</p>
        
        <h2>2. How We Use Your Information</h2>
        <p>We use your information to contact you, provide our services, send relevant communications, and improve our platform.</p>
        
        <h2>3. Information Sharing</h2>
        <p>We do not sell, rent, or share your personal information with third parties, except when necessary to provide our services.</p>
        
        <h2>4. Security</h2>
        <p>We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.</p>
        
        <h2>5. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.</p>
        
        <h2>6. Contact</h2>
        <p>For questions about this policy, contact us through our website.</p>
      `,
    },
  },
}

export default function LandingPage() {
  const [language, setLanguage] = useState<"pt" | "en">("pt")
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const elements = document.querySelectorAll(".animate-on-scroll")
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate-fade-in-up")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black backdrop-blur-xl border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/elev-logo-clean.png" alt="ELEV Marketing" className="w-20 h-20" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                ELEV MARKETING
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-cyan-300 transition-colors">
                {t.nav.home}
              </a>
              <a href="#about" className="text-white hover:text-cyan-300 transition-colors">
                {t.nav.about}
              </a>
              <a href="#services" className="text-white hover:text-cyan-300 transition-colors">
                {t.nav.services}
              </a>
              <a href="#contact" className="text-white hover:text-cyan-300 transition-colors">
                {t.nav.contact}
              </a>
              <div className="flex items-center">
                <LanguageToggle language={language} setLanguage={setLanguage} />
              </div>
              <Button
                onClick={() => setIsQuizOpen(true)}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 shadow-lg hover:shadow-cyan-400/25"
              >
                {t.hero.cta}
              </Button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <LanguageToggle language={language} setLanguage={setLanguage} />
              <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800 backdrop-blur-xl">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-white hover:text-cyan-300 transition-colors">
                  {t.nav.home}
                </a>
                <a href="#about" className="text-white hover:text-cyan-300 transition-colors">
                  {t.nav.about}
                </a>
                <a href="#services" className="text-white hover:text-cyan-300 transition-colors">
                  {t.nav.services}
                </a>
                <a href="#contact" className="text-white hover:text-cyan-300 transition-colors">
                  {t.nav.contact}
                </a>
                <Button
                  onClick={() => setIsQuizOpen(true)}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 w-full"
                >
                  {t.hero.cta}
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center"
      >
        <div className="absolute inset-0 z-0 bg-black">
          {/* Estrelas animadas */}
          <div className="absolute inset-0 stars-background">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                }}
              />
            ))}
          </div>

          {/* Imagem da montanha com efeito de parallax */}
          <img
            src="/mountain-interactive.png"
            alt="Mountain background"
            className="w-full h-full object-cover opacity-40"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />

          {/* Gradientes sobrepostos */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10"></div>
        </div>

        {/* Elementos flutuantes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-300/20 to-blue-500/20 rounded-full blur-3xl animate-pulse floating-element"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000 floating-element"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-200/10 to-blue-400/10 rounded-full blur-2xl animate-pulse delay-500 floating-element"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center animate-on-scroll">
            <Badge
              variant="secondary"
              className="mb-6 text-sm font-medium bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border-cyan-300/30"
            >
              {t.hero.badge}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 animate-on-scroll text-white">
              {t.hero.title}{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>
            <p className="text-xl text-gray-300 text-pretty max-w-3xl mx-auto mb-8 animate-on-scroll">
              {t.hero.subtitle}
            </p>
            <div className="flex justify-center animate-on-scroll">
              <Button
                size="lg"
                onClick={() => setIsQuizOpen(true)}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-lg px-8 py-6 shadow-2xl hover:shadow-cyan-400/25 hover:scale-105 transition-all duration-300"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Niches Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-muted/60">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge
              variant="secondary"
              className="mb-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-cyan-400/30"
            >
              {t.niches.badge}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">{t.niches.title}</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">{t.niches.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.niches.items.map((niche, index) => (
              <Card
                key={index}
                className="animate-on-scroll hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-background to-muted/50 border-cyan-400/20"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{niche.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{niche.title}</h3>
                  <p className="text-sm text-muted-foreground">{niche.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <Badge
                variant="secondary"
                className="mb-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-cyan-400/30"
              >
                {t.about.badge}
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">{t.about.title}</h2>
              <p className="text-lg text-muted-foreground text-pretty mb-8">{t.about.description}</p>
              <div className="space-y-4">
                {t.about.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-blue-600/20 rounded-2xl blur-xl"></div>
                <img src="/robot-ai.png" alt="AI Technology" className="relative rounded-2xl shadow-2xl w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-muted/60">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge
              variant="secondary"
              className="mb-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-cyan-400/30"
            >
              {t.services.badge}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">{t.services.title}</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.items.map((service, index) => (
              <Card
                key={index}
                className="animate-on-scroll hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-background to-muted/50 border-cyan-400/20"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                    {service.icon && <service.icon className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge
              variant="secondary"
              className="mb-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-cyan-400/30"
            >
              {t.testimonials.badge}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">{t.testimonials.title}</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <Card
                key={index}
                className="animate-on-scroll hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-muted/30 border-cyan-400/20"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center animate-on-scroll relative z-10">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            {t.cta.badge}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance mb-6">{t.cta.title}</h2>
          <p className="text-xl text-white/90 text-pretty mb-8">{t.cta.subtitle}</p>
          <Button
            size="lg"
            onClick={() => setIsQuizOpen(true)}
            className="bg-white text-cyan-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {t.cta.button}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/elev-logo-footer.png" alt="ELEV Marketing" className="w-12 h-12" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  ELEV MARKETING
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">{t.footer.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">{t.nav.services}</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>Tráfego Pago</div>
                <div>Automações IA</div>
                <div>CRM Automatizado</div>
                <div>Consultoria</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>{t.footer.links.privacy}</div>
                <div>{t.footer.links.terms}</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-300">
            © 2024 ELEV MARKETING. {t.footer.rights}
          </div>
        </div>
      </footer>

      {/* Quiz Modal */}
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} language={language} />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5561999601534"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          {/* Pulse animation ring */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-50 scale-110"></div>

          {/* Main button */}
          <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group-hover:shadow-green-500/50">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  )
}
