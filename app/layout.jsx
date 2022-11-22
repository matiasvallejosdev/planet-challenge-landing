import './globals.css'
import { Roboto } from '@next/font/google';
import Marquee from "../components/marquee/Marquee";
import Placeholder from "../components/placeholder/Placeholder";

const font = Roboto({
    weight: ['400', '700', '900']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={font.className}>
            {children}
            <Placeholder url={'https://manos-verdes.org/apoyenos/'} />
      </body>
    </html>
  )
}
