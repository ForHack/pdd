"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const theory = {
  name: "Знак STOP (2.5)",
  type: "Знак приоритета",
  view: "Обязательная остановка",
  description:
    "Требует полной остановки перед линией STOP или перекрёстком. Движение разрешено только после полной остановки и убедившись в безопасности.",
};

const pitfalls = [
  "🚫 Многие останавливаются не полностью, что считается нарушением.",
  "🚫 Остановка за стоп-линией — тоже ошибка.",
  "⚠️ На некоторых перекрёстках знак STOP дублируется светофором — в таком случае при работающем светофоре ориентируемся на него.",
];

const locations = [
  "На нерегулируемых перекрёстках с ограниченной видимостью",
  "На выездах со второстепенных дорог",
  "На участках с высокой аварийностью",
];

const driverActions = [
  "Замедлиться заранее",
  "Полностью остановиться перед стоп-линией",
  "Осмотреть обе стороны",
  "Двигаться только при полной уверенности в безопасности",
];

const quiz = [
  {
    question: "Что должен сделать водитель при виде знака STOP, если нет других машин?",
    options: [
      "Замедлиться и проехать",
      "Притормозить и проехать, если никого нет",
      "Полностью остановиться и только потом проехать",
    ],
    answer: 2,
  },
  {
    question: "Где чаще всего встречается знак STOP?",
    options: [
      "На автомагистралях",
      "На перекрёстках с плохой видимостью",
      "На платных парковках",
    ],
    answer: 1,
  },
];

export default function LearnStopPage() {
  const [quizAnswers, setQuizAnswers] = useState<(number | null)[]>(Array(quiz.length).fill(null));
  const allAnswered = quizAnswers.every((a) => a !== null);
  const allCorrect = quizAnswers.every((a, i) => a === quiz[i].answer);

  return (
    <div className="min-h-screen bg-[#f7f7f8] py-8">
      <div className="px-4 space-y-8">
        {/* Теория */}
        <section className="bg-white rounded-2xl shadow p-6 flex flex-col gap-2 border-l-4 border-blue-400">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🧠</span>
            <h2 className="text-xl font-bold">Теория</h2>
          </div>
          <div className="text-lg font-semibold text-blue-900 mb-1">{theory.name}</div>
          <div className="text-sm text-gray-600 mb-1">Тип: <span className="font-medium text-gray-800">{theory.type}</span></div>
          <div className="text-sm text-gray-600 mb-1">Вид: <span className="font-medium text-gray-800">{theory.view}</span></div>
          <div className="text-gray-800 mt-2">{theory.description}</div>
        </section>

        {/* Подводные камни */}
        <section className="bg-yellow-50 rounded-2xl shadow p-6 border-l-4 border-yellow-400">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">⚠️</span>
            <h2 className="text-xl font-bold text-yellow-800">Подводные камни</h2>
          </div>
          <ul className="list-disc pl-6 text-yellow-900 space-y-1">
            {pitfalls.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>

        {/* Где устанавливается */}
        <section className="bg-white rounded-2xl shadow p-6 border-l-4 border-blue-300">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🏙️</span>
            <h2 className="text-xl font-bold text-blue-800">Где устанавливается</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            {locations.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </section>

        {/* Что должен сделать водитель */}
        <section className="bg-white rounded-2xl shadow p-6 border-l-4 border-green-400">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">📌</span>
            <h2 className="text-xl font-bold text-green-800">Что должен сделать водитель</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            {driverActions.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>

        {/* Мини-тест */}
        <section className="bg-white rounded-2xl shadow p-6 border-l-4 border-purple-400">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🧪</span>
            <h2 className="text-xl font-bold text-purple-800">Мини-тест</h2>
          </div>
          <div className="space-y-6">
            {quiz.map((q, i) => (
              <div key={i}>
                <div className="font-medium mb-2">{q.question}</div>
                <div className="flex flex-col gap-2">
                  {q.options.map((opt, j) => (
                    <label key={j} className={`rounded border px-4 py-2 cursor-pointer flex items-center gap-2 transition ${quizAnswers[i] === j ? 'border-purple-600 bg-purple-50' : 'border-gray-200 bg-white hover:bg-gray-50'}` }>
                      <input
                        type="radio"
                        name={`quiz${i}`}
                        checked={quizAnswers[i] === j}
                        onChange={() => setQuizAnswers(a => { const copy = [...a]; copy[i] = j; return copy; })}
                        className="accent-purple-600"
                      />
                      <span>{opt}</span>
                      {quizAnswers[i] !== null && j === q.answer && quizAnswers[i] === j && (
                        <span className="ml-2 text-green-600 font-bold">✔</span>
                      )}
                      {quizAnswers[i] !== null && quizAnswers[i] === j && j !== q.answer && (
                        <span className="ml-2 text-red-500 font-bold">✗</span>
                      )}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Button
            className="mt-8 w-full"
            disabled={!allAnswered}
            onClick={() => window.location.reload()}
          >
            Завершить тему
          </Button>
          {allAnswered && (
            <div className={`mt-4 text-center font-semibold ${allCorrect ? 'text-green-700' : 'text-red-600'}`}>{allCorrect ? 'Все ответы верны! Отлично!' : 'Есть ошибки, попробуйте ещё раз.'}</div>
          )}
        </section>
      </div>
    </div>
  );
} 