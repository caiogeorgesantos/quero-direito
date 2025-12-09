import { Button } from "@/components/ui/button";
import { getWhatsappLink } from "@/lib/utils";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 dark:from-muted/10 dark:via-background dark:to-blue-950/20">
      {/* Background Grid - Fixed for light mode */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50 rounded-full text-blue-700 dark:text-blue-300 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Tecnologia jurídica de nova geração</span>
            </div>

            {/* Main Title - Updated with new pattern */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-slate-100 leading-tight"
            >
              Automatize seu atendimento jurídico com{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
                inteligência artificial
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mb-8 text-xl text-slate-600 dark:text-muted-foreground leading-relaxed">
              Da primeira mensagem até o contrato assinado. Nossa IA gerencia
              todo o ciclo de atendimento do seu escritório, 24 horas por dia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Agendar demonstração
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              {/* <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg rounded-xl border-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                
              >
                <Play className="w-5 h-5 mr-2" />
                Ver demonstração
              </Button> */}
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              {[
                "IA que qualifica seus leads e atendimentos",
                "Integração nativa com WhatsApp e Google Agenda",
                "Automação completa do ciclo de vendas",
                "Planos flexíveis a partir de R$ 297/mês",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Mockups Ultra Realistas */}
          <div className="lg:pl-16 relative h-[520px] flex items-start">
            {/* iPhone 15 Pro Realista à esquerda */}
            <div className="relative z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-500 mt-16">
              {/* Sombra realista do iPhone */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10 rounded-[3rem] blur-2xl transform translate-x-3 translate-y-4 scale-105"></div>

              {/* Corpo do iPhone 15 Pro - Silver/White */}
              <div
                className="relative rounded-[3rem] p-3 shadow-2xl"
                style={{
                  width: "250px",
                  height: "500px",
                  background: "linear-gradient(145deg, #F8F9FA, #E9ECEF)",
                  border: "3px solid #DEE2E6",
                }}
              >
                {/* Tela OLED Super Retina XDR */}
                <div className="bg-black rounded-[2.5rem] overflow-hidden h-full relative">
                  {/* Live Chat Dashboard Interface - Fixed for light mode */}
                  <div className="bg-gradient-to-br from-slate-50 to-white dark:from-background dark:to-muted/20 h-full relative z-10">
                    {/* Header profissional do Live Chat */}
                    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-4 py-3.5 flex items-center gap-3 shadow-lg">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg p-1">
                        <Image
                          src={"/quero-direito-logo.png"}
                          alt="Quero Direito"
                          className="w-full h-full object-contain"
                          width={32}
                          height={32}
                        />
                      </div>

                      <div className="flex-1">
                        <div className="font-semibold text-sm">Live Chat</div>
                        <div className="text-xs text-slate-300 flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                          12 conversas
                        </div>
                      </div>

                      <div className="flex">
                        <button className="w-6 h-6 bg-slate-700 hover:bg-slate-600 rounded-md flex items-center justify-center transition-colors">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                          <span className="sr-only">Mais opções</span>
                        </button>
                      </div>
                    </div>

                    {/* Stats Bar - Fixed for light mode */}
                    <div className="bg-gradient-to-r from-slate-50 to-white dark:from-muted/50 dark:to-background border-b border-slate-200 dark:border-border px-4 py-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-center">
                            <div className="text-base font-bold text-slate-900 dark:text-foreground">
                              47
                            </div>
                            <div className="text-xs text-slate-500 dark:text-muted-foreground">
                              Hoje
                            </div>
                          </div>
                          <div className="w-px h-5 bg-slate-200 dark:bg-border"></div>
                          <div className="text-center">
                            <div className="text-base font-bold text-emerald-600">
                              12
                            </div>
                            <div className="text-xs text-slate-500 dark:text-muted-foreground">
                              Ativas
                            </div>
                          </div>
                          <div className="w-px h-5 bg-slate-200 dark:bg-border"></div>
                          <div className="text-center">
                            <div className="text-base font-bold text-blue-600">
                              94%
                            </div>
                            <div className="text-xs text-slate-500 dark:text-muted-foreground">
                              Taxa
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white dark:bg-card rounded-full px-3 py-1 shadow-sm border border-slate-200 dark:border-border">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <div className="w-px h-3 bg-slate-300 dark:bg-border"></div>
                          <span className="text-xs text-slate-600 dark:text-muted-foreground font-medium">
                            Tempo real
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Lista de conversas - Fixed for light mode */}
                    <div className="flex-1 overflow-y-auto">
                      {/* Conversa 1 - Ativa */}
                      <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 px-4 py-3 border-b border-slate-100 dark:border-border hover:bg-blue-100/50 dark:hover:bg-blue-950/50 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="relative">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                              CR
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-white"></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm text-slate-900 dark:text-foreground truncate">
                                Carlos Roberto
                              </span>
                              <span className="text-xs text-slate-700 dark:text-muted-foreground">
                                14:32
                              </span>
                            </div>
                            <div className="text-xs text-slate-800 dark:text-muted-foreground truncate">
                              Preciso de ajuda com questão trabalhista...
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-full text-xs">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                Respondendo
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Conversa 2 */}
                      <div className="px-4 py-3 border-b border-slate-100 dark:border-border hover:bg-slate-50 dark:hover:bg-muted/30 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="relative">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                              MS
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-slate-300 dark:bg-muted rounded-full border border-white"></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm text-slate-900 dark:text-foreground truncate">
                                Maria Silva
                              </span>
                              <span className="text-xs text-slate-500 dark:text-muted-foreground">
                                14:18
                              </span>
                            </div>
                            <div className="text-xs text-slate-600 dark:text-muted-foreground truncate">
                              Obrigada pelo atendimento! Muito esclarecedor.
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 rounded-full text-xs">
                                <svg
                                  className="w-3 h-3"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  />
                                </svg>
                                Resolvido
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Conversa 3 */}
                      <div className="px-4 py-3 border-b border-slate-100 dark:border-border hover:bg-slate-50 dark:hover:bg-muted/30 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="relative">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                              JO
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-white"></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm text-slate-900 dark:text-foreground truncate">
                                João Oliveira
                              </span>
                              <span className="text-xs text-slate-500 dark:text-muted-foreground">
                                14:05
                              </span>
                            </div>
                            <div className="text-xs text-slate-600 dark:text-muted-foreground truncate">
                              Quando posso agendar uma consulta?
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 rounded-full text-xs">
                                <svg
                                  className="w-3 h-3"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                  />
                                </svg>
                                Aguardando
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Conversa 4 */}
                      <div className="px-4 py-3 border-b border-slate-100 dark:border-border hover:bg-slate-50 dark:hover:bg-muted/30 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="relative">
                            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                              AF
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-slate-300 dark:bg-muted rounded-full border border-white"></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm text-slate-900 dark:text-foreground truncate">
                                Ana Ferreira
                              </span>
                              <span className="text-xs text-slate-500 dark:text-muted-foreground">
                                13:47
                              </span>
                            </div>
                            <div className="text-xs text-slate-600 dark:text-muted-foreground truncate">
                              Preciso revisar meu contrato de trabalho
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 dark:bg-muted text-slate-700 dark:text-muted-foreground rounded-full text-xs">
                                <svg
                                  className="w-3 h-3"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                  />
                                </svg>
                                Triagem
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Conversa 5 */}
                      <div className="px-4 py-3 border-b border-slate-100 dark:border-border hover:bg-slate-50 dark:hover:bg-muted/30 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="relative">
                            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                              RS
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-white"></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm text-slate-900 dark:text-foreground truncate">
                                Ricardo Santos
                              </span>
                              <span className="text-xs text-slate-500 dark:text-muted-foreground">
                                13:22
                              </span>
                            </div>
                            <div className="text-xs text-slate-600 dark:text-muted-foreground truncate">
                              Consultoria sobre direitos trabalhistas
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-full text-xs">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                Em andamento
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions Bar - Fixed for light mode */}
                    <div className="bg-white dark:bg-card border-t border-slate-200 dark:border-border px-4 py-3 flex items-center justify-between">
                      <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-100 dark:hover:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-lg transition-colors text-xs font-medium">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          />
                        </svg>
                        Nova conversa
                      </button>
                      <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-muted hover:bg-slate-100 dark:hover:bg-muted/80 text-slate-700 dark:text-muted-foreground rounded-lg transition-colors text-xs font-medium">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                          />
                        </svg>
                        Relatórios
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard SaaS Ultra Profissional à direita - Fixed for light mode */}
            <div
              className="absolute right-0 top-0 transform rotate-1 hover:rotate-0 transition-transform duration-500 z-10"
              style={{ width: "440px", height: "520px" }}
            >
              {/* Sombra profissional */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/5 rounded-2xl blur-2xl transform translate-x-2 translate-y-3"></div>

              {/* Container principal */}
              <div className="relative bg-white dark:bg-card rounded-2xl shadow-2xl border border-slate-200/60 dark:border-border overflow-hidden">
                {/* Sidebar simulada */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center py-5 gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">QD</span>
                  </div>
                  <div className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Área principal do dashboard */}
                <div className="ml-16 h-full">
                  {/* Header premium - Fixed for light mode */}
                  <div className="bg-gradient-to-r from-slate-50 via-white to-blue-50/40 dark:from-muted/20 dark:via-background dark:to-blue-950/20 px-6 py-4 border-b border-slate-200/60 dark:border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-semibold text-slate-900 dark:text-foreground text-lg">
                          Analytics Dashboard
                        </h2>
                        <div className="text-xs text-slate-500 dark:text-muted-foreground flex items-center gap-2">
                          Quero Direito • Tempo real
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 rounded-full text-xs">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            Live
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="w-8 h-8 bg-slate-100 dark:bg-muted hover:bg-slate-200 dark:hover:bg-muted/80 rounded-lg flex items-center justify-center transition-colors">
                          <svg
                            className="w-4 h-4 text-slate-600 dark:text-muted-foreground"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                            />
                          </svg>
                          <span className="sr-only">Mais opções</span>
                        </button>
                        <button className="w-8 h-8 bg-slate-100 dark:bg-muted hover:bg-slate-200 dark:hover:bg-muted/80 rounded-lg flex items-center justify-center transition-colors">
                          <svg
                            className="w-4 h-4 text-slate-600 dark:text-muted-foreground"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                          <span className="sr-only">Mais opções</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo com métricas realistas */}
                  <div className="p-6 space-y-5 h-full overflow-hidden">
                    {/* Cards KPI - Fixed for light mode */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100/60 dark:from-blue-950/30 dark:to-blue-950/60 rounded-xl p-4 border border-blue-200/40 dark:border-blue-800/40 hover:shadow-lg transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                            </svg>
                          </div>
                          <span className="text-xs bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full font-medium">
                            +18%
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-slate-900 dark:text-foreground mb-1">
                          247
                        </div>
                        <div className="text-xs text-slate-600 dark:text-muted-foreground font-medium">
                          Leads Hoje
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/60 dark:from-emerald-950/30 dark:to-emerald-950/60 rounded-xl p-4 border border-emerald-200/40 dark:border-emerald-800/40 hover:shadow-lg transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                              />
                            </svg>
                          </div>
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        </div>
                        <div className="text-2xl font-bold text-slate-900 dark:text-foreground mb-1">
                          12
                        </div>
                        <div className="text-xs text-slate-600 dark:text-muted-foreground font-medium">
                          IA Ativas
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-purple-100/60 dark:from-purple-950/30 dark:to-purple-950/60 rounded-xl p-4 border border-purple-200/40 dark:border-purple-800/40 hover:shadow-lg transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                            </svg>
                          </div>
                          <span className="text-xs bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full font-medium">
                            94%
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-slate-900 dark:text-foreground mb-1">
                          R$ 52k
                        </div>
                        <div className="text-xs text-slate-600 dark:text-muted-foreground font-medium">
                          Revenue Mês
                        </div>
                      </div>
                    </div>

                    {/* Gráfico simplificado - Fixed for light mode */}
                    <div className="bg-white dark:bg-card rounded-xl p-5 border border-slate-200/50 dark:border-border shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-foreground text-sm">
                            Conversões Últimos 7 Dias
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-muted-foreground">
                            Leads → Clientes
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-medium">
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                              />
                            </svg>
                            +23%
                          </span>
                        </div>
                      </div>

                      {/* Barras de progresso simulando gráfico */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-500 dark:text-muted-foreground w-8">
                            S
                          </span>
                          <div className="flex-1 bg-slate-100 dark:bg-muted rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000"
                              style={{ width: "87%" }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-600 dark:text-muted-foreground font-medium">
                            87%
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-500 dark:text-muted-foreground w-8">
                            T
                          </span>
                          <div className="flex-1 bg-slate-100 dark:bg-muted rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full rounded-full transition-all duration-1000"
                              style={{ width: "94%" }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-600 dark:text-muted-foreground font-medium">
                            94%
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-500 dark:text-muted-foreground w-8">
                            Q
                          </span>
                          <div className="flex-1 bg-slate-100 dark:bg-muted rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full transition-all duration-1000"
                              style={{ width: "76%" }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-600 dark:text-muted-foreground font-medium">
                            76%
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-500 dark:text-muted-foreground w-8">
                            Q
                          </span>
                          <div className="flex-1 bg-slate-100 dark:bg-muted rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all duration-1000"
                              style={{ width: "89%" }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-600 dark:text-muted-foreground font-medium">
                            89%
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-500 dark:text-muted-foreground w-8">
                            S
                          </span>
                          <div className="flex-1 bg-slate-100 dark:bg-muted rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-pink-500 to-pink-600 h-full rounded-full transition-all duration-1000"
                              style={{ width: "91%" }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-600 dark:text-muted-foreground font-medium">
                            91%
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-500 dark:text-muted-foreground w-8">
                            S
                          </span>
                          <div className="flex-1 bg-slate-100 dark:bg-muted rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-full rounded-full transition-all duration-1000"
                              style={{ width: "85%" }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-600 dark:text-muted-foreground font-medium">
                            85%
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-500 dark:text-muted-foreground w-8">
                            D
                          </span>
                          <div className="flex-1 bg-slate-100 dark:bg-muted rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000"
                              style={{ width: "96%" }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-600 dark:text-muted-foreground font-medium">
                            96%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Lista de últimas atividades - Fixed for light mode - Hidden on mobile */}
                    <div className="hidden md:block bg-white dark:bg-card rounded-xl p-5 border border-slate-200/50 dark:border-border shadow-sm">
                      <h3 className="font-semibold text-slate-900 dark:text-foreground text-sm mb-4">
                        Atividade Recente
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-muted/30 transition-colors">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                            IA
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-slate-900 dark:text-foreground font-medium">
                              Lead qualificado automaticamente
                            </p>
                            <p className="text-xs text-slate-500 dark:text-muted-foreground">
                              Carlos Roberto • Direito Trabalhista
                            </p>
                            <span className="text-xs text-slate-400 dark:text-muted-foreground">
                              há 2 min
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-muted/30 transition-colors">
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                            AG
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-slate-900 dark:text-foreground font-medium">
                              Consulta agendada automaticamente
                            </p>
                            <p className="text-xs text-slate-500 dark:text-muted-foreground">
                              João Oliveira • Amanhã 14:30
                            </p>
                            <span className="text-xs text-slate-400 dark:text-muted-foreground">
                              há 5 min
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-muted/30 transition-colors">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                            CO
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-slate-900 dark:text-foreground font-medium">
                              Contrato enviado para assinatura
                            </p>
                            <p className="text-xs text-slate-500 dark:text-muted-foreground">
                              Maria Silva • Contrato 2025/001
                            </p>
                            <span className="text-xs text-slate-400 dark:text-muted-foreground">
                              há 8 min
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
