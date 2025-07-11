import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen py-8">
      <div>
       
        {/* Hero Section */}
        <section className="bg-white rounded-2xl shadow flex flex-col md:flex-row items-center px-12 py-10 mb-8 gap-8">
          <div className="flex-1 min-w-[320px]">
            <h1 className="text-5xl font-bold mb-4 leading-tight text-gray-900">Учите ПДД<br />Узбекистана легко</h1>
            <p className="text-lg text-gray-700 mb-7">Простой язык. Практические  примеры. Актуальные тесты.</p>
            <div className="flex gap-4 mb-7">
              <Button size="lg" className="px-6  text-base font-semibold bg-blue-700 hover:bg-blue-800 text-white rounded-md shadow-none">Начать обучение</Button>
              <Button size="lg" variant="outline" className="px-6 text-base font-semibold border-gray-300 text-gray-900 bg-white hover:bg-gray-50 rounded-md shadow-none">Пройти тест</Button>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm text-gray-600">Уровень знаний.</span>
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
            </div>
          </div>
          <div className="flex-1 flex justify-center min-w-[260px]">
            <Image src="/images/logo.png" alt="Иллюстрация" width={600} height={240} />
          </div>
        </section>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow px-8 py-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Sidebar: Теория */}
          <aside className="md:col-span-3">
            <h2 className="text-xl font-semibold mb-4">Теория</h2>
            <ul className="space-y-2 text-gray-800 text-base">
              <li className="hover:text-blue-600 cursor-pointer">Введение</li>
              <li className="hover:text-blue-600 cursor-pointer">Общие обязанности водителя</li>
              <li className="hover:text-blue-600 cursor-pointer">Дорожные знаки</li>
              <li className="hover:text-blue-600 cursor-pointer">Разметка</li>
              <li className="hover:text-blue-600 cursor-pointer">Скорость</li>
              <li className="hover:text-blue-600 cursor-pointer">Перекрестки</li>
              <li className="hover:text-blue-600 cursor-pointer">Пешеходы</li>
            </ul>
          </aside>

          {/* Введение */}
          <section className="md:col-span-9">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-2">Введение</h3>
              <p className="mb-4 text-gray-800 text-base">Правила Узбекистана. Водящему важно знать регламенты, сигналы и основные знания.</p>
              <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-3 text-gray-700 border border-gray-200">
                <span className="material-symbols-outlined text-xl text-gray-500">info</span>
                <span>Применяйте знания и соблюдайте правила всегда.</span>
              </div>
            </div>
          </section>
        </div>

        {/* Тесты */}
        <section className="bg-white rounded-2xl shadow px-8 py-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Тесты</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button variant="outline" className="w-full h-16 text-base font-medium border-gray-300 bg-white hover:bg-gray-50 rounded-lg shadow-none">Пройти билет №1</Button>
            <Button variant="outline" className="w-full h-16 text-base font-medium border-gray-300 bg-white hover:bg-gray-50 rounded-lg shadow-none">Пройти билет по теме</Button>
            <Button variant="outline" className="w-full h-16 text-base font-medium border-gray-300 bg-white hover:bg-gray-50 rounded-lg shadow-none sm:col-span-2">Экзамен по всем темам (30 вопросов)</Button>
          </div>
        </section>

        {/* Типичные ошибки */}
        <section className="bg-white rounded-2xl shadow px-8 py-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Типичные ошибки</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/signs/stop" className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white">
              <Image src="/images/signs/stop.webp" alt="Знак STOP" width={66} height={66} />
              <span className="mt-2 text-base text-gray-800">Знак STOP</span>
            </Link>
            <Link href="/signs/circle" className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white">
              <Image src="/images/signs/circle-road.webp" alt="Круговое движение" width={66} height={66} />
              <span className="mt-2 text-base text-gray-800">Круговое движение</span>
            </Link>
            <Link href="/signs/turn" className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white">
              <Image src="/images/signs/rotate.webp" alt="Разрешен ли разворот" width={66} height={66} />
              <span className="mt-2 text-base text-gray-800">Разрешен ли разворот</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
