import { ArrowUpRight, ExternalLink, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { useMemo, useState } from "react";
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
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg-muted">I ship web and mobile products end to end — React and Flutter on the surface, Node and C when the work needs to go lower. Currently looking for a team that cares about architecture as much as polish.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={onContact}><Mail className="size-4" />Start a conversation</Button>
            <Button variant="ghost" asChild><a href={profile.resume} download><FileDown className="size-4" />Download resume</a></Button>
          </div>
        </div>
        <aside className="rounded-xl border border-line bg-bg-elevated p-5 sm:p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-subtle">Now</p>
          <p className="mt-3 text-sm leading-relaxed text-fg">{profile.availability}</p>
          <dl className="mt-6 grid gap-3 text-sm">
            <div className="flex items-baseline justify-between gap-4"><dt className="text-fg-subtle">School</dt><dd>{profile.school}</dd></div>
            <div className="flex items-baseline justify-between gap-4"><dt className="text-fg-subtle">Focus</dt><dd className="text-right">Full-stack · Flutter · systems</dd></div>
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

function Work({ featured, rest, onOpen }: { featured: Project[]; rest: Project[]; onOpen: (p: Project) => void }) {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Things that shipped.</h2>
        <div className="mt-10 grid gap-4">
          {featured.map((p) => (
            <article key={p.slug} id={`project-${p.slug}`} className="rounded-xl border border-line bg-bg-elevated p-5 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl sm:text-3xl">{p.title}</h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">{p.tag} · {p.year}</p>
              </div>
              <p className="mt-3 max-w-3xl text-sm text-fg-muted sm:text-base">{p.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full border border-line px-2.5 py-1 text-xs text-fg-muted">{t}</li>)}</ul>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button size="sm" variant="ghost" onClick={() => onOpen(p)}>Case notes</Button>
                <Button size="sm" variant="ghost" asChild><a href={p.github} target="_blank" rel="noreferrer"><Github className="size-3.5" />Code</a></Button>
                {p.live ? <Button size="sm" variant="ghost" asChild><a href={p.live} target="_blank" rel="noreferrer"><ExternalLink className="size-3.5" />Live</a></Button> : null}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {rest.map((p) => (
            <button key={p.slug} id={`project-${p.slug}`} type="button" onClick={() => onOpen(p)} className="rounded-lg border border-line bg-bg-elevated p-5 text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle">{p.tag}</p>
              <h3 className="mt-2 font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-fg-muted">{p.summary}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const job = experience[0];
  return (
    <section id="experience" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl">Shipped under review.</h2>
        <article className="mt-10 rounded-xl border border-line bg-bg-elevated p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl">{job.role}</h3>
              <p className="mt-1 text-sm text-fg-muted">{job.company} · {job.place}</p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">{job.dates}</p>
          </div>
          <ul className="mt-6 grid gap-3 text-sm text-fg-muted">{job.points.map((pt) => <li key={pt} className="border-l border-line pl-4">{pt}</li>)}</ul>
        </article>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl">Tools I actually use.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-lg border border-line bg-bg-elevated p-5">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">{g.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">{g.items.map((item) => <li key={item} className="rounded-full border border-line px-2.5 py-1 text-sm">{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section id="proof" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl">Signals, not slogans.</h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-xl border border-line bg-bg-elevated p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">{education.dates}</p>
            <h3 className="mt-2 font-display text-2xl">{education.degree}</h3>
            <p className="mt-1 text-sm text-fg-muted">{education.school}</p>
          </article>
          <ul className="grid gap-3">
            {proof.map((item) => (
              <li key={item.title} className="rounded-lg border border-line bg-bg-elevated p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-medium">{item.title}</h3>
                  <span className="font-mono text-[11px] text-fg-subtle">{item.year}</span>
                </div>
                <p className="mt-1 text-sm text-fg-muted">{item.org}</p>
                <p className="mt-2 text-sm text-fg-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Close({ onContact }: { onContact: () => void }) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">If you need someone who can own a slice of product — write.</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={onContact}><Mail className="size-4" />{profile.email}</Button>
          <Button variant="ghost" asChild><a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn<ArrowUpRight className="size-4" /></a></Button>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-fg-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <div className="flex flex-wrap gap-4">
        <a href={profile.links.github} className="hover:text-fg">GitHub</a>
        <a href={profile.links.leetcode} className="hover:text-fg">LeetCode</a>
        <a href={profile.links.medium} className="hover:text-fg">Medium</a>
      </div>
    </footer>
  );
}

function ProjectDialog({ project, onOpenChange }: { project: Project | null; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={!!project} onOpenChange={onOpenChange}>
      {project ? (
        <DialogContent>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">{project.tag} · {project.year}</p>
          <DialogTitle className="mt-1">{project.title}</DialogTitle>
          <DialogDescription>{project.summary}</DialogDescription>
          <dl className="mt-6 grid gap-4 text-sm">
            <div><dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle">Problem</dt><dd className="mt-1 text-fg-muted">{project.problem}</dd></div>
            <div><dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle">Approach</dt><dd className="mt-1 text-fg-muted">{project.approach}</dd></div>
            <div><dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle">Result</dt><dd className="mt-1 text-fg-muted">{project.result}</dd></div>
          </dl>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild><a href={project.github} target="_blank" rel="noreferrer">Source</a></Button>
            {project.live ? <Button variant="ghost" asChild><a href={project.live} target="_blank" rel="noreferrer">Live demo</a></Button> : null}
          </div>
        </DialogContent>
      ) : null}
    </Dialog>
  );
}

export default function App() {
  return <Home />;
}
