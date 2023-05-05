import indexStyle from "styles/index.module.scss";

export default function Home() {
    return (
        <div>
            <header className={indexStyle.header}>
                <nav className={indexStyle.nav}>
                    <a href="/" className={indexStyle.logo}>
                        <img src="/images/img.png" alt="Your custom logo" />
                    </a>
                    <ul className={indexStyle.menu}>
                        <li><a href="/fsdfsd">Главная</a></li>
                        <li><a href="#">Документация</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">О нас</a></li>
                    </ul>
                    <div className={indexStyle.buttons}>
                        <button className={indexStyle.signIn}>Авторизация</button>
                    </div>
                </nav>
            </header>
        </div>
    );
}
