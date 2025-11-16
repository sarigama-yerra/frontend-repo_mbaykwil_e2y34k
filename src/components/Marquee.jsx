import { useEffect, useRef } from 'react'

export default function Marquee({ items = [] }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const clone = el.innerHTML
    el.innerHTML += clone
  }, [])

  return (
    <div className="relative overflow-hidden py-6">
      <div
        ref={ref}
        className="flex gap-8 whitespace-nowrap animate-[marquee_30s_linear_infinite] text-white/70"
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {item}
          </span>
        ))}
      </div>
      <style>
        {`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}
      </style>
    </div>
  )
}
