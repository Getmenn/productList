import '@/shared/configs/css/globals.scss'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100','200','300', '400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
          <main className={'main'}>
              {children}
          </main>
      </body>
    </html>
  )
}
