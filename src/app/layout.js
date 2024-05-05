import "./app.scss";
import headerBackground from "@/../public/header-background.png";

export const metadata = {
   title: "Visual ~ Harmonies",
   description: "Majid's art gallery?",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="flex flex-col min-h-[100dvh] lg:items-center justify-center bg-no-repeat bg-fixed bg-cover" style={{ backgroundImage: `url(${headerBackground.src})`}}>{children}</body>
      </html>
   );
}
