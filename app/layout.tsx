import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Developer Portfolio | Your Name",
  description: "A professional portfolio showcasing my projects, skills, and growth journey as a developer.",
  keywords: ["portfolio", "developer", "web development", "projects"],
  openGraph: {
    title: "Developer Portfolio | Your Name",
    description: "Explore my latest projects and learning journey",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
