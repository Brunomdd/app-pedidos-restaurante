import "./globals.css";
import {Header} from '../components/Header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      > 
       <Header/>
     
        {children}
      </body>
    </html>
  );
}
