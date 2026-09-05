import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { profile } from "@/lib/portfolio";

export function ContactDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [body, setBody] = useState("");

  const copy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(name ? `Hello from ${name}` : "Hello from your portfolio");
    const text = encodeURIComponent(`${body}\n\n— ${name || "Someone"}${from ? ` · ${from}` : ""}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${text}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>Let’s talk</DialogTitle>
        <DialogDescription>Roles, internships, or a project. Email is the fastest path.</DialogDescription>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <a href={`mailto:${profile.email}`} className="inline-flex h-11 items-center gap-2 rounded-md border border-line px-3 text-sm text-fg hover:bg-bg-subtle">
            <Mail className="size-4" />
            {profile.email}
          </a>
          <Button variant="ghost" size="sm" type="button" onClick={copy}>
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
        <form onSubmit={send} className="mt-6 grid gap-3">
          <label className="grid gap-1.5 text-xs text-fg-muted">Name<input value={name} onChange={(e) => setName(e.target.value)} className="h-11 rounded-md border border-line bg-bg px-3 text-sm text-fg outline-none focus:ring-2 focus:ring-accent/40" name="name" autoComplete="name" /></label>
          <label className="grid gap-1.5 text-xs text-fg-muted">Your email<input value={from} onChange={(e) => setFrom(e.target.value)} className="h-11 rounded-md border border-line bg-bg px-3 text-sm text-fg outline-none focus:ring-2 focus:ring-accent/40" name="email" type="email" autoComplete="email" /></label>
          <label className="grid gap-1.5 text-xs text-fg-muted">Note<textarea value={body} onChange={(e) => setBody(e.target.value)} required rows={4} className="rounded-md border border-line bg-bg px-3 py-2 text-sm text-fg outline-none focus:ring-2 focus:ring-accent/40" name="message" /></label>
          <Button type="submit">Open mail draft</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
