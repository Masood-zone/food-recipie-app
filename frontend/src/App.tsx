import { ThemeProvider } from "./components/ui/theme-provider";

export default function App({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
