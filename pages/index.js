import indexStyle from "styles/index.module.scss";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Lapayment - Крипто-платежная система</title>
                <meta name="description" content="Lapayment - это быстрая и безопасная крипто-платежная система." />
                <meta property="og:title" content="Lapayment - Крипто-платежная система" />
                <meta property="og:description" content="Lapayment - это быстрая и безопасная крипто-платежная система." />
                {/*<meta property="og:image" content="https://example.com/og-image.jpg" />*/}
                {/*<meta property="og:url" content="https://example.com/" />*/}
            </Head>
            <header className={indexStyle.header}>
                <nav className={indexStyle.nav}>
                    <Link legacyBehavior  href="/">
                    <a className={indexStyle.logo}>
                        <img src="/images/img.png" alt="Lapay Image" />
                    </a>
                    </Link>
                    <ul className={indexStyle.menu}>
                        <Link legacyBehavior  href="/">
                        <li><a>Главная</a></li>
                        </Link>
                        <Link legacyBehavior  href="/api">
                        <li><a>Документация</a></li>
                        </Link>
                        <Link legacyBehavior  href="/faq">
                        <li><a>FAQ</a></li>
                        </Link>
                        <Link legacyBehavior  href="/about">
                        <li><a>О&nbsp;нас</a></li>
                        </Link>
                    </ul>
                    <div className={indexStyle.buttons}>
                        <button className={indexStyle.signIn}>Авторизация</button>
                    </div>
                </nav>
            </header>
        </>
    );
}
