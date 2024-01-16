import Link from "next/link";
import Container from "../Container";
import ThemeSwitch from "./ThemeSwitch";
import { Redressed } from "next/font/google";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-slate-200 shadow-sm text-emerald-700  dark:text-white dark:bg-slate-600">
      <div className="py-4 broder-b-[1px]">
        <Container>
          <div
            className="flex items-center justify-between
                gap-3 md:gap-0"
          >
            <Link
              href={"/"}
              className={`${redressed.className} font-bold text-2xl
                     sm:text-xl`}
            >
              Takobee
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12 ">
              <div>Cart</div>
              <div>UserMenu</div>
              <div className="cursor-pointer">
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
