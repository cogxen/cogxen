import Link from "next/link"
/** Utilities */
import { cn } from "@/lib/utils"
/** Components */
import DotPattern from "@/components/Backgrounds/DotPattern"
import ShimmerButton from "@/components/Buttons/ShimmerButton"

export default function Home() {
  return (
    <main className="relative h-full flex justify-center items-center">
      <DotPattern
        className={cn("[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]")}
      />

      <div className="relative flex flex-col gap-2 items-center">
        <div className="z-10 flex items-center justify-center">
          <Link
            href={"https://learn.cogxen.quest"}
            target="_blank"
            className="flex flex-row items-center gap-2"
          >
            <div className="z-10 flex items-center justify-center">
              <div
                className={cn(
                  "group rounded-full border border-black/5 bg-slate-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-slate-200 dark:border-white/5 dark:bg-slate-900 dark:hover:bg-slate-800",
                )}
              >
                <ShimmerButton className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-slate-400">
                  <span>✨ Learn with Cogxen</span>
                </ShimmerButton>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="text-5xl md:text-6xl lg:text-8xl text-slate-300 font-light">cogxen.</div>
          <span className="px-8 text-sm md:text-base lg:text-base text-slate-500 font-light max-w-md md:max-w-lg lg:max-w-xl text-center">
            Join our collaborative quest to unlock the power of data, one insightful project at a
            time. Together, we can build a thriving community where everyone can learn, grow, and
            make an impact with data science.
          </span>
        </div>
      </div>
    </main>
  )
}
