import "./globals.css";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};
export const metadata = {
  title: "Hack'O'Relay 4.0",
  description: "A 36 hour hacathon oragnized by gdg gurugram",

  openGraph: {
    title: 'Hack\'O\'relay-4.0',
    description: 'Code. Create. Conquer. 36-Hour Innovation Challenge. A Hackathon for the Next Generation of Developers.',
    url: 'gdg-hackathon-five.vercel.app',
    icons: {
    icon: '/icon.png',
    },
    siteName: 'HackORelay',
    images: [
      {
        url: '/og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Preview Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-neutral-100 font-poppins min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
