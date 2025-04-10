import "./globals.css";
import {Header} from '../components/Header'

export const metadata = {
  title: "Restaurante",
  description: "Explore nosso menu incrível e desfrute de pratos deliciosos no conforto da sua casa.",
  openGraph: {
    title: "Restaurante - Sabores Inesquecíveis",
    description: "Explore nosso menu incrível e desfrute de pratos deliciosos no conforto da sua casa.",
  },
  robots: {
    index: true, // Permite que a página seja indexada pelo Google
    follow: true, // Permite que os links sejam seguidos pelos robôs de busca
    nocache: true, // Impede que o conteúdo da página seja armazenado em cache
    googlebot: {
      index: true,  // Permite que o Googlebot indexe a página
      follow: true, // Permite que o Googlebot siga os links da página
    }
  }
};

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
