import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getWhatsappLink } from "@/lib/utils";
import {
  ArrowRight,
  Check,
  HeadphonesIcon,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export function Pricing() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "IA Avançada",
      description:
        "Triagem automática de clientes potenciais com análise inteligente de casos jurídicos",
      highlights: [
        "Análise de documentos",
        "Classificação de urgência",
        "Sugestões de estratégia",
      ],
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Segurança Total",
      description:
        "Proteção de dados em conformidade com LGPD e padrões internacionais de segurança",
      highlights: [
        "Criptografia militar",
        "Backups automáticos",
        "Compliance LGPD",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Atendimento 24/7",
      description:
        "Sistema automatizado que funciona mesmo quando você está dormindo ou em audiência",
      highlights: [
        "WhatsApp integrado",
        "Agendamento automático",
        "Follow-up inteligente",
      ],
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-orange-600" />,
      title: "Suporte Dedicado",
      description:
        "Equipe especializada em automação jurídica para te ajudar em cada passo",
      highlights: [
        "Onboarding personalizado",
        "Treinamento da equipe",
        "Suporte prioritário",
      ],
    },
  ];

  return (
    <section
      id="precos"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Alinhado à esquerda */}
        <div className="text-left mb-16">
          {/* Badge seguindo o padrão das outras seções */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50 rounded-full text-blue-700 dark:text-blue-300 text-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Preços Transparentes</span>
          </div>

          <h2
            id="pricing-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-slate-100 leading-tight"
          >
            Invista no Futuro do{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
              Seu Escritório
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-3xl">
            Tudo que você precisa para automatizar seu atendimento jurídico.
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              {" "}
              Sem pegadinhas.
            </span>
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left Side - Features Grid (4 cards in 2x2) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {feature.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Pricing Card - Voltando ao azul escuro original */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-slate-900 dark:border-blue-400 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-800 dark:via-blue-800 dark:to-slate-800 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
              <CardHeader className="text-center pb-4 pt-6">
                <div className="flex items-center justify-center mb-4">
                  <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 px-4 py-2">
                    ⭐ Plano Completo
                  </Badge>
                </div>

                <CardTitle className="text-3xl font-bold text-white mb-3">
                  Quero Direito Pro
                </CardTitle>

                <CardDescription className="text-blue-100 mb-6 leading-relaxed">
                  Todos os agentes de IA e funcionalidades para resolver 100%
                  seu atendimento jurídico
                </CardDescription>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-lg text-blue-200">a partir de</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl text-blue-200">R$</span>
                    <span className="text-6xl font-bold text-white">297</span>
                    <span className="text-blue-200 text-lg">/mês</span>
                  </div>
                  <p className="text-sm text-blue-200/80">
                    Planos flexíveis de acordo com seu escritório
                  </p>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6 mt-auto">
                <Link
                  href={getWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3 text-base font-bold rounded-xl group mb-4"
                    size="lg"
                  >
                    Começar Agora
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                {/* Frases de flexibilidade */}
                <div className="text-center space-y-1">
                  <p className="text-sm text-blue-200/80">Sem fidelidade</p>
                  <p className="text-sm text-blue-200/80">
                    Sem multa de rescisão
                  </p>
                  <p className="text-sm text-blue-200/80">
                    Cancele quando quiser
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA - Horizontal Layout */}
        <div className="mt-16">
          <Card className="border border-slate-200/50 dark:border-slate-700/50 bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Left Side - Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                    🎯 Quer saber mais sobre preços?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
                    Nossa equipe de especialistas pode personalizar uma proposta
                    especial para seu escritório.
                  </p>
                </div>

                {/* Right Side - CTA Button */}
                <div className="text-center flex-shrink-0">
                  <Link
                    href={getWhatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950/20 px-8 py-4 font-semibold rounded-xl text-lg whitespace-nowrap"
                    >
                      Falar com Especialista
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
