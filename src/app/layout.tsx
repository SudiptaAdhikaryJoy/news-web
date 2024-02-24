import "@/styles/globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import { BackgroundGradient } from "@/components/ui/backgroundGradient";
// import Header from "./Header";

export const metadata = {
  title: "News Website",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className=" max-w-2xl mx-auto px-5 ">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
