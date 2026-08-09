import Section from '@/components/ui/section';
import skillGroups from '@/data/resume/skills';

/**
 * Server Component. The rated version needed a client filter to be navigable;
 * the grouping does that work statically, so nothing here crosses into the
 * client bundle.
 */
const Skills = () => (
  <Section id="skills" title="Skills">
    <dl className="flex flex-col gap-7 print:gap-2.5">
      {skillGroups.map((group) => (
        <div
          key={group.name}
          className="grid grid-cols-1 gap-2 sm:grid-cols-[104px_1fr] sm:gap-6"
        >
          <dt className="label pt-[3px] text-faint">{group.name}</dt>
          <dd className="sep-slash font-mono text-[0.85rem] text-muted">
            {group.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Skills;
