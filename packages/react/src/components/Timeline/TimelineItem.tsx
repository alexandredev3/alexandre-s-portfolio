import type { CommonProps } from "../../types/CommonProps";

export function TimelineItem({ children, time }: CommonProps<{ time: string; }>) {
  return (
    <div className="flex">
      <span className="max-w-[82px] w-full">{time}</span>
      <div
        className="flex before:content-[''] before:block before:ml-[52px] before:mr-[42px] before:bg-yellow-300 before:h-full before:w-[1px]"
      >
        {children}
      </div>
    </div>
  )
}
