import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CompAI - Análise Estratégica para Pedreira',
  description: 'Dashboard inteligente com IA para análise de custos, margens, produção e insights estratégicos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-BR'>
      <body className='antialiased'>{children}</body>
    </html>
  )
}