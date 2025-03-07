import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="ru">
            <Head />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Jura:wght@400;500;700&display=swap"
                rel="stylesheet"
            ></link>
            <link rel="icon" href="/users-list_test/favicon.ico" />
            <body className="antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
