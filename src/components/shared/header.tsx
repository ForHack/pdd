import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <>
         {/* Header */}
         <header className="bg-white rounded-2xl shadow flex items-center px-8 py-3">
          <div className="font-bold text-xl mr-12">
            <Link href="/">
              <Image src="/images/logo.png" alt="Lozo" width={100} height={70} />
            </Link>
          </div>
          <nav className="flex-1">
            <ul className="flex gap-8 text-base font-medium text-gray-800">
              <li><a href="#" className="hover:text-blue-600">Теория</a></li>
              <li><a href="#" className="hover:text-blue-600">Тесты</a></li>
              <li><a href="#" className="hover:text-blue-600">Знаки</a></li>
              <li><a href="#" className="hover:text-blue-600">Ошибки</a></li>
              <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
            </ul>
          </nav>
          <div className="flex items-center gap-2 ml-4">
            <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
              <span className="material-symbols-outlined text-[22px] text-gray-700">search</span>
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
              <span className="material-symbols-outlined text-[22px] text-gray-700">person</span>
            </button>
          </div>
        </header>
    </>
  )
}

export default Header