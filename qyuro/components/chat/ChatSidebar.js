import { chatThreads } from "@/data/chatThreads";

export default function ChatSidebar() {
  return (
    <aside className="hidden h-screen w-72 flex-col gap-6 border-r border-white/5 bg-black/20 px-6 py-8 backdrop-blur lg:flex">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          Recent chats
        </p>
        <div className="mt-4 space-y-3">
          {chatThreads.map((chat, index) => (
            <div
              key={chat.title}
              className={`rounded-xl border px-4 py-3 text-sm transition ${
                index === 0
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-white/5 bg-black/30 text-white/70 hover:border-white/20 hover:text-white"
              }`}
            >
              <p className="font-medium">{chat.title}</p>
              <p className="mt-1 text-xs text-white/40">{chat.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          Spaces
        </p>
        <div className="mt-4 space-y-2">
          <div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2">
            Workspace Alpha
          </div>
          <div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2">
            Qyuro Labs
          </div>
        </div>
      </div>
    </aside>
  );
}
