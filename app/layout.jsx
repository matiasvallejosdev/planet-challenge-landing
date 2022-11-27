import './globals.css'
import Placeholder from "../components/placeholder/Placeholder";
import MeFooter from "../components/me-footer/MeFooter";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <title>Desafio planeta - Juega y aprende del cambio climatico</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/logo.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap" rel="stylesheet" />
        </head>
          <body style={{position: "relative"}}>
                {children}
                <div className="container">
                    <MeFooter />
                </div>
          </body>
    </html>
  )
}
