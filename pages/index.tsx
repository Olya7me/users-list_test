import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FC } from "react";

const Home: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main className="flex flex-col min-h-screen">
            <div className="my-auto">
                <div className="text-center w-full flex justify-center items-center flex-col flex-1 container-xl mx-auto h-[400px]">
                    <h1 className="text-center mb-20 text-4xl font-bold tracking-wide uppercase slide-in-effect">
                        <span className="custom-logo">Users-list</span> -
                        Приложение для просмотра пользователей
                    </h1>
                    <Link href="/users">
                        <Button
                            size="lg"
                            className="slide-in-button uppercase tracking-[2px] text-xl text-bold"
                        >
                            <span className="text">Начать</span>
                            <span className="arrow">❯</span>
                        </Button>
                    </Link>
                </div>
                <p
                    className={`w-1/2 text-xl mx-auto transition-all duration-500 ease-in-out transform ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    Приложение выполнено в рамках тестового задания, отображает
                    список пользователей с возможностью просмотра подробной
                    информации. Используется Next.js для серверного рендеринга,
                    TypeScript для строгой типизации и Tailwind CSS для
                    стилизации. Данные запрашиваются с тестового API
                    JSONPlaceholder.
                </p>
            </div>
        </main>
    );
};

export default Home;
