import { Command, FileDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Stack" },
  { href: "#proof", label: "Proof" },
];

export function SiteHeader({
  onContact,
  onCommand,
}: {
  onContact: () => void;
  onCommand: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-display text-lg tracking-tight text-fg">
          {profile.handle}
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-fg-muted transition-colors duration-150 hover:text-fg">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" onClick={onCommand} className="hidden h-9 items-center gap-2 rounded-md border border-line px-2.5 text-xs text-fg-muted hover:text-fg md:inline-flex" aria-label="Open command palette">
            <Command className="size-3.5" />
            <span>Search</span>
            <kbd className="rounded border border-line px-1 font-mono text-[10px]">⌘K</kbd>
          </button>
          <Button variant="ghost" size="sm" asChild>
            <a href={profile.resume} download>
              <FileDown className="size-3.5" />
              Resume
            </a>
          </Button>
          <Button size="sm" onClick={onContact} className="hidden sm:inline-flex">Contact</Button>
          <button type="button" className="inline-flex size-11 items-center justify-center md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <div className={cn("border-t border-line bg-bg px-4 py-4 md:hidden", open ? "block" : "hidden")}>
        <div className="flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-base text-fg">{l.label}</a>
          ))}
          <Button onClick={() => { setOpen(false); onContact(); }}>Contact</Button>
        </div>
      </div>
    </header>
  );
}
