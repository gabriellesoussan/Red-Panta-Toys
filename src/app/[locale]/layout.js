import { Inter, Caveat, ABeeZee, Roboto, Francois_One } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const caveat = Caveat({
    subsets: ["latin"],
    variable: '--font-caveat',
    weight: ['400', '500', '600', '700']
})

const abz = ABeeZee({
    subsets: ["latin"],
    variable: '--font-abz',
    weight: ['400']
})

const roboto = Roboto({
    subsets: ["latin"],
    variable: '--font-roboto',
    weight: ['100', '300', '400', '500', '700', '900']
})

const francois = Francois_One({
    subsets: ["latin"],
    variable: '--font-francois',
    weight: ['400']
})

export const metadata = {
  title: "Red Panda Toys",
  description: "a Contentstack Fake Company",
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${caveat.variable} ${abz.variable} ${roboto.variable} ${francois.variable}`}>
        {children}
      </body>
    </html>
  );
}
