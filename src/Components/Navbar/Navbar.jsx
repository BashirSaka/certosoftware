import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../../assets/logo.png";
import Button from "../../Components/Button/Button";

// hidden {breakpoint}:flex     →  hidden on mobile, shown on desktop (nav links, Sign In)
// {breakpoint}:hidden          →  shown on mobile, hidden on desktop (the hamburger button)
// bg-[#F3F8FF] nav background color
// link color : text-[#02033B]   on hover -- text-[#4335DE]
// button color bg-[#4335DE]

// tailwind class number

//   Class number	Pixels	rem
// 0	0px	0
// 0.5	2px	0.125rem
// 1	4px	0.25rem
// 1.5	6px	0.375rem
// 2	8px	0.5rem
// 2.5	10px	0.625rem
// 3	12px	0.75rem
// 3.5	14px	0.875rem
// 4	16px	1rem
// 5	20px	1.25rem
// 6	24px	1.5rem
// 7	28px	1.75rem
// 8	32px	2rem
// 9	36px	2.25rem
// 10	40px	2.5rem
// 11	44px	2.75rem
// 12	48px	3rem
// Wide range (14+) — jumps by 4 from here on
// Class number	Pixels
// 14	56px
// 16	64px
// 20	80px
// 24	96px
// 28	112px
// 32	128px
// 36	144px
// 40	160px
// 44	176px
// 48	192px
// 52	208px
// 56	224px
// 60	240px
// 64	256px
// 72	288px
// 80	320px
// 96	384px

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-[#F3F8FF] flex justify-between items-center py-4 px-6 min-[769px]:px-20">
      <div>
        <img
          src={Logo}
          className="w-24 min-[769px]:w-28"
          alt="certosoftware logo"
        />
      </div>

      {/* Desktop nav links + Sign In — hidden at 768px and below */}
      <div className="hidden min-[769px]:flex items-center gap-10">
        <ul className="text-base font-Inter flex gap-8 font-bold items-center text-[#02033B] min-[769px]:pr-16">
          <li className="cursor-pointer hover:text-[#4335DE] transition-colors">
            iPhone
          </li>
          <li className="cursor-pointer hover:text-[#4335DE] transition-colors">
            Android
          </li>
          <li className="cursor-pointer hover:text-[#4335DE] transition-colors">
            Help
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-[#4335DE] transition-colors">
            Company <ChevronDown size={16} />
          </li>
        </ul>

        <Button
          className="bg-[#4335DE] cursor-pointer px-6 py-2 rounded-lg text-white whitespace-nowrap shrink-0"
          text="Sign In"
        />
      </div>

      {/* Hamburger toggle — visible at 768px and below */}
      <button
        className="cursor-pointer min-[769px]:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F3F8FF] shadow-md flex flex-col gap-6 p-6 min-[769px]:hidden z-50">
          <ul className="flex flex-col gap-4 font-bold text-[#02033B]">
            <li>iPhone</li>
            <li>Android</li>
            <li>Help</li>
            <li className="flex items-center gap-1">
              Company <ChevronDown size={16} />
            </li>
          </ul>

          <Button
            className="cursor-pointer bg-[#4335DE] px-4 py-2 rounded-lg text-white w-full"
            text="Sign In"
          />
        </div>
      )}
    </nav>
  );
}
