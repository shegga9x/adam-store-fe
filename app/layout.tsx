import GetMe from "@/components/templates/(auth)/GetMe";
import VisitCounter from "@/components/templates/VisitCounter";
import { Toaster } from "@/components/ui/toaster";
import { roboto } from "@/config/fonts";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/providers/theme-provider";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/png"
        sizes="32x32"
      />
      <body className={cn(roboto.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-white dark:bg-black">
            <GetMe>
              <VisitCounter>{children}</VisitCounter>
              <Toaster />
            </GetMe>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}