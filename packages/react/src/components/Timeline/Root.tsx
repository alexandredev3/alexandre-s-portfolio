import type { CommonProps } from '../../types/CommonProps';

export function Root({ children }: CommonProps) {
  return (
    <div className="flex flex-col">
      {children}
    </div>
  )
}
