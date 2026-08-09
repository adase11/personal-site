import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import Section from '@/components/ui/section';
import work, { byCompany } from '@/data/resume/work';

const prose =
  'text-[0.92rem] leading-[1.65] text-muted [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:text-fg';

const span = (startDate: string, endDate?: string) =>
  `${dayjs(startDate).format('MMM YYYY')} — ${
    endDate ? dayjs(endDate).format('MMM YYYY') : 'Present'
  }`;

const companies = byCompany(work);

/**
 * Grouped by employer, roles nested inside. The dateline column carries the
 * per-role span; the company header carries the whole tenure.
 */
const Experience = () => (
  <Section id="experience" title="Experience">
    <div className="flex flex-col gap-12 print:gap-5">
      {companies.map((company) => (
        <div key={company.name}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-rule pb-3 print:break-after-avoid">
            <h3 className="font-serif text-[1.35rem]">
              <a href={company.url} className="hover:text-accent">
                {company.name}
              </a>
            </h3>
            <p className="font-mono text-[0.76rem] text-faint">
              {span(company.startDate, company.endDate)}
            </p>
          </div>

          {company.roles.map((role) => (
            <article
              key={role.position}
              className="grid grid-cols-1 gap-2 border-b border-rule py-6 last:border-b-0 sm:grid-cols-[104px_1fr] sm:gap-6 print:py-2.5"
            >
              <div className="pt-1 font-mono text-[0.76rem] text-faint">
                {span(role.startDate, role.endDate)}
              </div>

              <div>
                <h4 className="font-serif text-[1.1rem]">{role.position}</h4>

                {role.summary && (
                  <div className={`mt-2 ${prose}`}>
                    <Markdown>{role.summary}</Markdown>
                  </div>
                )}

                {role.highlights.length > 0 && (
                  <ul
                    className={`mt-3 flex list-disc flex-col gap-1.5 pl-5 marker:text-accent-soft ${prose}`}
                  >
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>
                        <Markdown options={{ forceInline: true }}>
                          {highlight}
                        </Markdown>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      ))}
    </div>
  </Section>
);

export default Experience;
