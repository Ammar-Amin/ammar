const items = [
  '★ ANGULAR', 'TYPESCRIPT', 'REACT', 'NODE.JS', 'POSTGRESQL',
  'TAILWIND CSS', 'RxJS', 'MERN STACK', 'REST APIs', 'JWT AUTH',
  'AWS S3', 'MONGODB', '★ CURRENTLY: FRONTEND DEV @ BLUE STAR',
]

export default function Ticker() {
  const allItems = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-border py-3.5">
      <div className="flex whitespace-nowrap animate-ticker font-mono text-xs text-muted tracking-[2px]">
        {allItems.map((item, i) => (
          <span key={i} className={`mr-[60px] ${item.startsWith('★') ? 'text-accent' : ''}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
