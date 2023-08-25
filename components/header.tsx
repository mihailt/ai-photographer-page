import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <header className="self-stretch bg-black h-[72px] overflow-hidden shrink-0 flex flex-col py-0 px-16 box-border items-center justify-center text-left text-base text-white font-text-small-link sm:hidden">
      <div className="self-stretch flex flex-row items-center justify-end gap-[32px]">
        <div className="flex-1 hidden flex-row items-start justify-start">
          <img
            className="relative w-[63px] h-[27px] overflow-hidden shrink-0 hidden"
            alt=""
            src="/logo.svg"
          />
        </div>
        <div className="flex-1 flex flex-row items-center justify-end">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-end gap-[32px]">
            <div className="flex-1 relative leading-[150%]">
              Explore Services
            </div>
            <div className="flex-1 relative leading-[150%]">Portfolio</div>
            <div className="flex-1 relative leading-[150%]">About Me</div>
            <div className="flex-1 flex flex-row items-center justify-center gap-[4px]">
              <div className="relative leading-[150%]">Contact</div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/chevron-down.svg"
              />
            </div>
            <button className="cursor-pointer py-2 px-5 bg-white flex flex-row items-center justify-center border-[1px] border-solid border-white">
              <div className="relative text-base leading-[150%] font-text-small-link text-black text-left">{`Book `}</div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
