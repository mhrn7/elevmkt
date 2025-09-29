"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, ArrowLeft, CheckCircle, Loader2 } from "lucide-react"

const translations = {
  pt: {
    title: "Consultoria Gratuita - Análise do Seu Negócio",
    steps: {
      1: {
        title: "Informações Básicas",
        fields: {
          name: "Nome Completo",
          phone: "Telefone para Contato",
        },
      },
      2: {
        title: "Sobre Seu Negócio",
        fields: {
          currency: "Moeda",
          revenue: "Faturamento Mensal Médio",
        },
        options: {
          currency: {
            brl: "Real (R$)",
            usd: "Dólar ($)",
          },
          revenue: {
            low: "10k - 30k",
            medium: "30k - 60k",
            high: "Acima de 60k",
          },
        },
      },
      3: {
        title: "Obrigado!",
        message:
          "Recebemos suas informações. Nossa equipe entrará em contato em até 24 horas para agendar sua consultoria gratuita.",
        submessage: "Prepare-se para descobrir como elevar o seu marketing!",
      },
    },
    buttons: {
      next: "Próximo",
      back: "Voltar",
      submit: "Enviar",
      close: "Fechar",
    },
  },
  en: {
    title: "Free Consultation - Your Business Analysis",
    steps: {
      1: {
        title: "Basic Information",
        fields: {
          name: "Full Name",
          phone: "Contact Phone",
        },
      },
      2: {
        title: "About Your Business",
        fields: {
          currency: "Currency",
          revenue: "Average Monthly Revenue",
        },
        options: {
          currency: {
            brl: "Real (R$)",
            usd: "Dólar ($)",
          },
          revenue: {
            low: "10k - 30k",
            medium: "30k - 60k",
            high: "Above 60k",
          },
        },
      },
      3: {
        title: "Thank You!",
        message:
          "We received your information. Our team will contact you within 24 hours to schedule your free consultation.",
        submessage: "Get ready to discover how to elevate your marketing!",
      },
    },
    buttons: {
      next: "Next",
      back: "Back",
      submit: "Submit",
      close: "Close",
    },
  },
}

interface QuizModalProps {
  isOpen: boolean
  onClose: () => void
  language: "pt" | "en"
}

export function QuizModal({ isOpen, onClose, language }: QuizModalProps) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    currency: "",
    revenue: "",
  })

  const t = translations[language]

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          currency: formData.currency.toUpperCase(),
          revenueRange: formData.revenue,
          language: language,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form")
      }

      console.log("Lead saved successfully:", result)
      setStep(3)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError(error instanceof Error ? error.message : "Erro ao enviar formulário")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setStep(1)
    setSubmitError(null)
    setIsSubmitting(false)
    setFormData({
      name: "",
      phone: "",
      currency: "",
      revenue: "",
    })
    onClose()
  }

  const isStep1Valid = formData.name && formData.phone
  const isStep2Valid = formData.currency && formData.revenue

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-xl border-2 border-cyan-300/30 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-lg font-bold">
            {t.title}
          </DialogTitle>
        </DialogHeader>

        <div className="py-6">
          {/* Progress Bar */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  step >= 1
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/30"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step > 1 ? <CheckCircle className="w-4 h-4" /> : "1"}
              </div>
              <div
                className={`w-8 h-1 transition-all duration-300 ${step >= 2 ? "bg-gradient-to-r from-cyan-400 to-blue-500" : "bg-gray-200"}`}
              ></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  step >= 2
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/30"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step > 2 ? <CheckCircle className="w-4 h-4" /> : "2"}
              </div>
              <div
                className={`w-8 h-1 transition-all duration-300 ${step >= 3 ? "bg-gradient-to-r from-cyan-400 to-blue-500" : "bg-gray-200"}`}
              ></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  step >= 3
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/30"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step >= 3 ? <CheckCircle className="w-4 h-4" /> : "3"}
              </div>
            </div>
          </div>

          {/* Step 1: Basic Information */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-lg font-semibold text-center">{t.steps[1].title}</h3>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">{t.steps[1].fields.name}</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="João Silva"
                    className="border-cyan-300/50 focus:border-cyan-400 bg-white/80"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">{t.steps[1].fields.phone}</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+55 (11) 99999-9999"
                    className="border-cyan-300/50 focus:border-cyan-400 bg-white/80"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Revenue Information */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-lg font-semibold text-center">{t.steps[2].title}</h3>

              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{submitError}</p>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <Label>{t.steps[2].fields.currency}</Label>
                  <RadioGroup
                    value={formData.currency}
                    onValueChange={(value) => setFormData({ ...formData, currency: value })}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="brl" id="brl" className="border-cyan-400/70 text-cyan-500" />
                      <Label htmlFor="brl">{t.steps[2].options.currency.brl}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="usd" id="usd" className="border-cyan-400/70 text-cyan-500" />
                      <Label htmlFor="usd">{t.steps[2].options.currency.usd}</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>{t.steps[2].fields.revenue}</Label>
                  <RadioGroup
                    value={formData.revenue}
                    onValueChange={(value) => setFormData({ ...formData, revenue: value })}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="low" id="low" className="border-cyan-400/70 text-cyan-500" />
                      <Label htmlFor="low">{t.steps[2].options.revenue.low}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medium" id="medium" className="border-cyan-400/70 text-cyan-500" />
                      <Label htmlFor="medium">{t.steps[2].options.revenue.medium}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="high" id="high" className="border-cyan-400/70 text-cyan-500" />
                      <Label htmlFor="high">{t.steps[2].options.revenue.high}</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Thank You */}
          {step === 3 && (
            <div className="text-center space-y-6 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-300/30 to-blue-500/30 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-cyan-400/20 floating-element">
                <CheckCircle className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold">{t.steps[3].title}</h3>
              <p className="text-muted-foreground">{t.steps[3].message}</p>
              <p className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {t.steps[3].submessage}
              </p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && step < 3 && (
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={isSubmitting}
                className="border-cyan-300/50 hover:bg-cyan-400/10 bg-white/80"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.buttons.back}
              </Button>
            )}

            {step < 3 && (
              <Button
                onClick={step === 1 ? handleNext : handleSubmit}
                disabled={step === 1 ? !isStep1Valid : !isStep2Valid || isSubmitting}
                className="ml-auto bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 shadow-lg hover:shadow-cyan-400/25"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {language === "pt" ? "Enviando..." : "Submitting..."}
                  </>
                ) : (
                  <>
                    {step === 2 ? t.buttons.submit : t.buttons.next}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            )}

            {step === 3 && (
              <Button
                onClick={handleClose}
                className="mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 shadow-lg hover:shadow-cyan-400/25"
              >
                {t.buttons.close}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
