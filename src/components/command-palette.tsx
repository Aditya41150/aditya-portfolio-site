import { Command } from "cmdk";
import { ArrowUpRight, FileDown, FolderGit2, Mail } from "lucide-react";
import { useEffect } from "react";
import { profile, projects } from "@/lib/portfolio";

export function CommandPalette({
  open,
  onOpenChange,
  onContact,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContact: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button type="button" className="absolute inset-0 bg-bg/70" aria-label="Close search" onClick={() => onOpenChange(false)} />
      <Command className="absolute left-1/2 top-[18%] w-[min(36rem,calc(100vw-1.5rem))] -translate-x-1/2 overflow-hidden rounded-xl border border-line bg-bg-elevated shadow-lift" loop>
        <Command.Input autoFocus placeholder="Jump to a project, page, or link…" className="h-12 w-full border-b border-line bg-transparent px-4 text-sm text-fg outline-none placeholder:text-fg-subtle" />
        <Command.List className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-sm text-fg-muted">Nothing matches.</Command.Empty>
          {[["Work", "#work"], ["Experience", "#experience"], ["Stack", "#skills"], ["Proof", "#proof"]].map(([label, href]) => (
            <Command.Item key={href} value={label} onSelect={() => { onOpenChange(false); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); }} className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2.5 text-sm text-fg aria-selected:bg-bg-subtle">{label}</Command.Item>
          ))}
          {projects.map((p) => (
            <Command.Item key={p.slug} value={p.title} onSelect={() => { onOpenChange(false); document.querySelector(`#project-${p.slug}`)?.scrollIntoView({ behavior: "smooth" }); }} className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2.5 text-sm text-fg aria-selected:bg-bg-subtle">
              <FolderGit2 className="size-3.5 text-fg-muted" />{p.title}
            </Command.Item>
          ))}
          <Command.Item value="contact email" onSelect={() => { onOpenChange(false); onContact(); }} className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2.5 text-sm text-fg aria-selected:bg-bg-subtle">
            <Mail className="size-3.5 text-fg-muted" />Write a note
          </Command.Item>
          <Command.Item value="resume" onSelect={() => { onOpenChange(false); window.open(profile.resume, "_blank"); }} className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2.5 text-sm text-fg aria-selected:bg-bg-subtle">
            <FileDown className="size-3.5 text-fg-muted" />Resume
          </Command.Item>
          <Command.Item value="github" onSelect={() => window.open(profile.links.github, "_blank")} className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2.5 text-sm text-fg aria-selected:bg-bg-subtle">
            <ArrowUpRight className="size-3.5 text-fg-muted" />GitHub
          </Command.Item>
        </Command.List>
      </Command>
    </div>
  );
}
