import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-col py-20 px-16 items-center justify-start gap-[80px] bg-[url('/footer--7@3x.png')] bg-cover bg-no-repeat bg-[top]">
      <div className="hidden flex-col items-center justify-start">
        <div className="overflow-hidden hidden flex-col items-start justify-start">
          <img
            className="relative w-[63px] h-[27px] overflow-hidden shrink-0"
            alt=""
            src="/logo1.svg"
          />
        </div>
      </div>
      <footer className="self-stretch flex flex-col items-center justify-start gap-[32px] text-left text-sm text-white font-text-small-link">
        <div className="self-stretch relative bg-white h-px" />
        <div className="self-stretch flex flex-row items-start justify-between">
          <div className="relative leading-[150%]">
            © 2023 All rights reserved.
          </div>
          <div className="flex flex-row items-start justify-between">
            <div className="relative [text-decoration:underline] leading-[150%]">
              Privacy Policy
            </div>
            <div className="relative [text-decoration:underline] leading-[150%]">
              Terms and Conditions
            </div>
            <div className="relative [text-decoration:underline] leading-[150%]">
              Cookie Policy
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
