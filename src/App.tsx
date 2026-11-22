import { ArrowUpRight, ExternalLink, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { useMemo, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { CommandPalette } from "@/components/command-palette";
import { ContactDialog } from "@/components/contact-dialog";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { education, experience, profile, projects, proof, skillGroups, type Project } from "@/lib/portfolio";

function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [active, setActive] = useState<Project | null>(null);
  const featured = useMemo(() => projects.filter((p) => p.featured), []);
  const rest = useMemo(() => projects.filter((p) => !p.featured), []);
  return (
    <div id="top" className="min-h-screen bg-bg text-fg">
      <SiteHeader onContact={() => setContactOpen(true)} onCommand={() => setCmdOpen(true)} />
      <Hero onContact={() => setContactOpen(true)} />
      <Work featured={featured} rest={rest} onOpen={setActive} />
      <Experience />
      <Skills />
      <Proof />
      <Close onContact={() => setContactOpen(true)} />
      <SiteFooter />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
      <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} onContact={() => setContactOpen(true)} />
      <ProjectDialog project={active} onOpenChange={(o) => !o && setActive(null)} />
      <Analytics />
    </div>
  );
}

function Hero({ onContact }: { onContact: () => void }) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-fg-subtle">{profile.grad} · {profile.location}</p>
          <h1 className="mt-4 font-display text-5xl font-medium leading-[0.95] tracking-tight text-fg sm:text-7xl">{profile.name}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg-muted">I build web and mobile products end to end — React and Flutter up front, Node and Express behind them, Solidity when the work is on chain. Looking for a team that cares about the implementation, not just the demo.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={onContact}><Mail className="size-4" />Start a conversation</Button>
            <Button variant="ghost" asChild><a href={profile.resume} download><FileDown className="size-4" />Download resume</a></Button>
          </div>
        </div>
        <aside className="rounded-xl border border-line bg-bg-elevated p-5 sm:p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-subtle">Now</p>
          <p className="mt-3 text-sm leading-relaxed text-fg">{profile.availability}</p>
          <dl className="mt-6 grid gap-3 text-sm">
            <div className="flex items-baseline justify-between gap-4"><dt className="text-fg-subtle">School</dt><dd className="text-right">{profile.school}</dd></div>
            <div className="flex items-baseline justify-between gap-4"><dt className="text-fg-subtle">Focus</dt><dd className="text-right">React · Flutter · Node</dd></div>
            <div className="flex items-baseline justify-between gap-4"><dt className="text-fg-subtle">Recent</dt><dd className="text-right">Metacrafters · Solidity</dd></div>
          </dl>
          <div className="mt-6 flex gap-3 border-t border-line pt-4 text-fg-muted">
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="inline-flex size-11 items-center justify-center rounded-md border border-line hover:text-fg" aria-label="GitHub"><Github className="size-4" /></a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex size-11 items-center justify-center rounded-md border border-line hover:text-fg" aria-label="LinkedIn"><Linkedin className="size-4" /></a>
            <a href={`mailto:${profile.email}`} className="inline-flex size-11 items-center justify-center rounded-md border border-line hover:text-fg" aria-label="Email"><Mail className="size-4" /></a>
          </div>
        </aside>
      </div>
    </section>
  );
}
