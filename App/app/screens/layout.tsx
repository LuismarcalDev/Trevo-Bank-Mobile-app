import { ReactNode } from "react";
import { MeuProvider } from "@/app/Context/AppContext";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <MeuProvider>{children}</MeuProvider>;
}
