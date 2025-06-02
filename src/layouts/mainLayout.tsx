import type { ReactNode } from "react";
import { ThemeProvider } from "@mui/material";

import theme from "@/styles/theme";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";
import { Footer } from "@/components/Footer/Footer";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </ThemeProvider>
  );
}
