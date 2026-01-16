import ChatPanel from "@/components/ChatPanel";
import ChatSidebar from "@/components/ChatSidebar";
import LeftNav from "@/components/LeftNav";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <LeftNav />
      <ChatSidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <MobileNav />
        <ChatPanel />
      </div>
    </div>
  );
}
