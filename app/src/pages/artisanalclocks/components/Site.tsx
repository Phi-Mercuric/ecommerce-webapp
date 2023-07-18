import { ReactNode } from "react";

type ParentComponentProps = {
  title: string;
  children: ReactNode;
};

export default function Site({ title, children }: ParentComponentProps) {
  return (
    <section className="flex flex-row mt-20 items-center justify-center">
      <h2 className="text-orange-600 text-[13px] sm:text-[40px] w-[10vw] mr-20 text-center">
        {title}
      </h2>
      <p className="text-gray-300 w-[30vw] mt-3">
        {children}
      </p>
    </section>
  )
}