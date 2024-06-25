import Link from "next/link"
/** Data (Configuratiion) */
import menuData from "@/data/menu.json"

export default function Footer() {
  const getCurrentYear = new Date().getFullYear()
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-8 ">
      <div className="text-slate-500 w-full mx-auto max-w-screen-xl flex flex-col gap-4 md:flex-row lg:flex-row items-center justify-between">
        <span className="text-sm sm:text-center ">
          © {getCurrentYear} Cogxen. All Rights Reserved.
        </span>
        <ul className="hidden md:flex lg:flex flex-wrap items-center text-sm font-medium">
          {menuData.menus[0].footer.map((item) => (
            <li key={item.title}>
              <Link href={item.url} target="_blank" className="hover:underline">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
