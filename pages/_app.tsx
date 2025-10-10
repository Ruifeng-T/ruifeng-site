import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // ✅ 改成全屏宽度
    <main className="w-full px-8">
      <Component {...pageProps} />
    </main>
  );
}
