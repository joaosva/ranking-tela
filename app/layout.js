import './globals.css';

export const metadata = {
  title: 'Ranking Tela',
  description: 'Ranking screen - Weekly / Monthly',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
