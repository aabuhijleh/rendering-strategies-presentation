import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <div>
          <Link href="/">
            <a>csr</a>
          </Link>
        </div>
        <div>
          <Link href="/ssr">
            <a>ssr</a>
          </Link>
        </div>
        <div>
          <Link href="/ssg">
            <a>ssg</a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
