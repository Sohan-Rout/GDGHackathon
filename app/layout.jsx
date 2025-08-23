import "./globals.css";

export const metadata = {
  title: "Hack'O'Relay 4.0",
  description: "A 36 hour hacathon oragnized by gdg gurugram",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins bg-neutral-100">
        {children}
      </body>
    </html>
  );
}
