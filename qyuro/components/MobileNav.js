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

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <div className="mx-4 mt-6 flex items-center justify-between gap-3 rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              type="button"
              aria-label={item.label}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
                index === 0
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-white/5 bg-white/5 text-white/60 hover:border-white/20 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
