import {
  FilePenLine,
  LayoutList,
  FolderOpen,
  Sparkles,
  Settings,
} from "lucide-react";

const navItems = [
  { label: "New chat", icon: FilePenLine },
  { label: "Chats", icon: LayoutList },
  { label: "Library", icon: FolderOpen },
  { label: "Discover", icon: Sparkles },
  { label: "Settings", icon: Settings },
];

export default function LeftNav() {
  return (
    <aside className="hidden h-screen w-20 flex-col items-center justify-center gap-4 border-r border-white/5 bg-black/30 py-8 backdrop-blur md:flex">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            type="button"
            aria-label={item.label}
            className={`flex h-12 w-12 items-center justify-center rounded-full border transition ${
              index === 0
                ? "border-white/20 bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
            }`}
          >
            <Icon className="h-5 w-5" />
          </button>
        );
      })}
    </aside>
  );
}
