"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Пример данных для разных знаков
const signs: Record<string, {
  image: string;
  name: string;
  category: string;
  description: string;
  pitfalls: string;
  usage: string;
  errors: string[];
  testExample: { question: string; answer: string };
  similar: { slug: string; name: string; image: string }[];
  theory: string;
}> = {
  stop: {
    image: "/images/signs/stop.webp",
    name: "Знак STOP",
    category: "Запрещающие знаки",
    description: `Знак STOP — один из самых важных и узнаваемых дорожных знаков. Он требует от водителя полной остановки транспортного средства перед стоп-линией, пешеходным переходом или краем пересекаемой проезжей части. Даже если дорога кажется свободной, водитель обязан остановиться, убедиться в безопасности дальнейшего движения и только после этого продолжить путь. Нарушение этого требования может привести к аварийным ситуациям и штрафам. Знак часто используется для повышения безопасности на сложных перекрестках, железнодорожных переездах и в местах с ограниченной видимостью.`,
    pitfalls: "Часто водители не замечают знак из-за плохой видимости или невнимательности.",
    usage: `Знак STOP применяется в местах, где требуется обязательная остановка для предотвращения аварийных ситуаций.\n\nНаиболее часто его можно встретить:
- Перед сложными и опасными перекрестками, где ограничена видимость.
- Перед железнодорожными переездами, чтобы водитель мог убедиться в отсутствии приближающегося поезда.
- На выездах с прилегающих территорий, парковок, автозаправок, где обзор дороги ограничен.
- В местах с интенсивным движением пешеходов или велосипедистов.\n\nПример: если вы подъезжаете к перекрестку с плохим обзором, даже при отсутствии других машин вы обязаны полностью остановиться, посмотреть по сторонам и только после этого продолжить движение.`,
    errors: [
      "Остановка после стоп-линии.",
      "Игнорирование знака при отсутствии видимых помех.",
    ],
    testExample: {
      question: "Что должен сделать водитель, увидев знак STOP?",
      answer: "Полностью остановиться перед стоп-линией или перекрестком.",
    },
    similar: [
      { slug: "circle-road", name: "Круговое движение", image: "/images/signs/circle-road.webp" },
      { slug: "rotate", name: "Разрешен ли разворот", image: "/images/signs/rotate.webp" },
    ],
    theory: "Знак STOP — один из основных запрещающих знаков. Требует обязательной остановки.",
  },
  "circle-road": {
    image: "/images/signs/circle-road.webp",
    name: "Круговое движение",
    category: "Предписывающие знаки",
    description: "Знак указывает, что движение на перекрестке осуществляется только по кругу.",
    pitfalls: "Водители иногда не уступают дорогу автомобилям, движущимся по кругу.",
    usage: "Устанавливается на перекрестках с круговым движением.",
    errors: [
      "Не уступил дорогу автомобилю, движущемуся по кругу.",
    ],
    testExample: {
      question: "Что означает знак 'Круговое движение'?",
      answer: "Движение на перекрестке осуществляется только по кругу.",
    },
    similar: [
      { slug: "stop", name: "Знак STOP", image: "/images/signs/stop.webp" },
      { slug: "rotate", name: "Разрешен ли разворот", image: "/images/signs/rotate.webp" },
    ],
    theory: "Знак 'Круговое движение' регулирует приоритет и направление движения на перекрестке.",
  },
  rotate: {
    image: "/images/signs/rotate.webp",
    name: "Разрешен ли разворот",
    category: "Информационные знаки",
    description: "Знак информирует о возможности разворота на данном участке дороги.",
    pitfalls: "",
    usage: "Устанавливается на перекрестках и участках, где разрешен разворот.",
    errors: [
      "Разворот в неположенном месте.",
    ],
    testExample: {
      question: "Можно ли выполнить разворот под этим знаком?",
      answer: "Да, разворот разрешен.",
    },
    similar: [
      { slug: "stop", name: "Знак STOP", image: "/images/signs/stop.webp" },
      { slug: "circle-road", name: "Круговое движение", image: "/images/signs/circle-road.webp" },
    ],
    theory: "Информационный знак, разрешающий разворот на определенном участке дороги.",
  },
};

const otherSigns = [
  {
    slug: "stop",
    image: "/images/signs/stop.webp",
    name: "Знак STOP",
  },
  {
    slug: "circle-road",
    image: "/images/signs/circle-road.webp",
    name: "Круговое движение",
  },
  {
    slug: "rotate",
    image: "/images/signs/rotate.webp",
    name: "Разрешен ли разворот",
  },
];

// Получение slug из URL (app router)
function getSlug() {
  if (typeof window === "undefined") return "stop";
  const parts = window.location.pathname.split("/");
  return parts[parts.length - 1] || "stop";
}

export default function SignPage() {
  const [showPitfalls, setShowPitfalls] = useState(true);
  const slug = typeof window !== "undefined" ? getSlug() : "stop";
  const sign = signs[slug] || signs.stop;

  return (
    <div className="py-8">
      <div>
        {/* Картинка, название, категория, описание и где применяется */}
        <section className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 flex flex-col md:flex-row gap-10 mb-10 relative overflow-hidden">
          <div className="flex-shrink-0 flex justify-center items-start w-full md:w-auto md:pr-10 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:mb-0 mb-6">
            <Image src={sign.image} alt={sign.name} width={160} height={160} className="drop-shadow-xl" />
          </div>
          <div className="flex-1 w-full flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold mb-2 text-center md:text-left text-blue-900 tracking-tight">{sign.name}</h1>
            <span className="text-sm text-blue-700 px-3 py-1 bg-blue-100 rounded-full mb-4 inline-block text-center md:text-left font-medium">{sign.category}</span>
            <div className="mt-4 mb-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-900">Описание</h2>
              <p className="text-gray-800 text-base leading-relaxed mb-4">{sign.description}</p>
              <h2 className="text-lg font-semibold mb-2 text-gray-900">Где применяется</h2>
              <ul className="list-disc pl-6 text-gray-800 mb-3">
                {sign.usage.split('\n').map((line, idx) => {
                  if (line.trim().startsWith('- ')) {
                    return <li key={idx}>{line.replace('- ', '')}</li>;
                  }
                  return null;
                })}
              </ul>
              {sign.usage.includes('Пример:') && (
                <div className="mt-2 text-gray-600 text-sm bg-blue-50 border-l-4 border-blue-300 p-3 rounded">
                  {sign.usage.split('Пример:')[1]}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Подводные камни с интерактивом */}
        {sign.pitfalls ? (
          <section className="bg-yellow-50 rounded-2xl border-l-4 border-yellow-400 shadow p-6 mb-8">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-yellow-700 text-lg">Подводные камни</h3>
              <button
                className="text-yellow-700 text-sm underline hover:no-underline"
                onClick={() => setShowPitfalls((v) => !v)}
              >
                {showPitfalls ? "Скрыть" : "Показать"}
              </button>
            </div>
            {showPitfalls && <p className="text-yellow-800 text-base">{sign.pitfalls}</p>}
          </section>
        ) : (
          <section className="bg-gray-50 rounded-2xl border-l-4 border-gray-300 shadow p-6 mb-8">
            <h3 className="font-semibold text-gray-700 text-lg mb-2">Подводные камни</h3>
            <p className="text-gray-500 text-base">Для этого знака подводных камней не найдено.</p>
          </section>
        )}

        {/* Частные ошибки */}
        <section className="bg-white rounded-2xl shadow p-8 mb-8">
          <h2 className="text-xl font-semibold mb-3">Частные ошибки</h2>
          <ul className="list-disc pl-6 text-gray-800">
            {sign.errors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        </section>

        {/* Пример из тестов */}
        <section className="bg-white rounded-2xl shadow p-8 mb-8">
          <h2 className="text-xl font-semibold mb-3">Пример из тестов</h2>
          <div className="mb-2 text-gray-900 font-medium">{sign.testExample.question}</div>
          <div className="text-green-700">{sign.testExample.answer}</div>
        </section>

        {/* Похожие знаки */}
        <section className="bg-white rounded-2xl shadow p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Похожие знаки</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {sign.similar.map((s) => (
              <Link key={s.slug} href={`/signs/${s.slug}`}>
                <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white hover:shadow transition cursor-pointer">
                  <Image src={s.image} alt={s.name} width={66} height={66} />
                  <span className="mt-2 text-base text-gray-800 text-center">{s.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Другие знаки с выделением активного */}
        <section className="bg-white rounded-2xl shadow p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Другие знаки</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherSigns.map((s) => (
              <Link key={s.slug} href={`/signs/${s.slug}`}>
                <div
                  className={`flex flex-col items-center p-4 border rounded-lg bg-white hover:shadow transition cursor-pointer ${s.slug === slug ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-200"}`}
                >
                  <Image src={s.image} alt={s.name} width={66} height={66} />
                  <span className="mt-2 text-base text-gray-800 text-center">{s.name}</span>
                  {s.slug === slug && <span className="mt-1 text-xs text-blue-600">Вы просматриваете</span>}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 