import Link from "next/link"

/** Dependencies */
import { Github } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="fixed md:hidden lg:hidden w-full z-20 top-0">
      <div className="max-w-screen-xl flex justify-end mx-auto p-4 text-slate-500 text-sm">
        <Link
          href={"https://github.com/cogxen"}
          target="_blank"
          className="flex flex-row items-center gap-2 border border-slate-500 px-2 py-0.5 rounded-full"
        >
          <Github className="h-4 w-4" />
          <span>GitHub</span>
        </Link>
      </div>
    </nav>
  )
}
