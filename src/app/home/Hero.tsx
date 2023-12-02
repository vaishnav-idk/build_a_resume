import Link from "next/link";
// import { FlexboxSpacer } from "components/FlexboxSpacer";
// import { AutoTypingResume } from "home/AutoTypingResume";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen  ">
  <><h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-yellow-800 mx-auto text-center">
        Build a Resume  </h1><Link href="/resume-import" className="btn-primary mt-6 lg:mt-14">
          Create Resume <span aria-hidden="true">→</span>
        </Link></>
</section>

  );
};
