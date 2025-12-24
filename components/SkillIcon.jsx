export default function SkillIcon({ icon, label, delay = 0 }) {
  return (
    <div
      className="group flex flex-col items-center animate-fadeInUp"
      style={{ animationDelay: `${delay}s` }}
      title={label}
    >
      <i
        className={`${icon} text-5xl text-accent-light transition-transform duration-200 group-hover:scale-110`}
      />
      <span className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition">
        {label}
      </span>
    </div>
  )
}
