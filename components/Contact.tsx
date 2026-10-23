import { MAILTO, SITE } from "@/lib/site";
import { Avatar } from "./Avatar";
import { CopyEmailButton } from "./CopyEmailButton";
import { ExternalLink } from "./ExternalLink";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-border">
      <div className="mx-auto flex max-w-[1120px] justify-center px-5 py-16 md:px-8 md:py-24">
        <div className="flex w-full max-w-[640px] flex-col items-center gap-5 rounded-lg border border-t-2 border-border border-t-accent bg-surface p-6 text-center shadow-[0_1px_2px_rgba(11,13,16,.04)] dark:shadow-none md:p-12">
          <Avatar size={64} />
          <p className="text-mono-label text-accent">04 / Contact</p>
          <h2 id="contact-title" className="text-h2">Have a data collection or automation problem?</h2>
          <p className="text-body-lg max-w-[480px] text-muted">
            Send me a short description and I&apos;ll reply within one business day with questions or a pilot proposal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <a
              href={MAILTO}
              className="btn-primary inline-flex h-11 max-w-full items-center rounded-md bg-accent px-5 text-[15px] font-medium"
            >
              <span className="truncate">Email {SITE.email}</span>
            </a>
            <CopyEmailButton email={SITE.email} />
          </div>
          <div className="flex gap-6">
            <ExternalLink href={SITE.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={SITE.github}>GitHub</ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}
