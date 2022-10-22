import { ThemeProvider } from 'next-themes'
import Gallery from "../components/Gallery";

export default function Home() {
  return <ThemeProvider enableSystem={true} attribute="class">
    <Gallery />
  </ThemeProvider>
}
