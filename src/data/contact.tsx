import { Mail } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/ui/icons';
import { email } from '@/data/bio';
import { PROFILES } from '@/lib/site';

export interface ContactLink {
  link: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
}

/** Profile URLs come from lib/site so the JSON-LD `sameAs` cannot drift. */
const data: ContactLink[] = [
  {
    link: PROFILES.github,
    label: 'GitHub',
    icon: GithubIcon
  },
  {
    link: PROFILES.linkedin,
    label: 'LinkedIn',
    icon: LinkedinIcon
  },
  {
    link: PROFILES.x,
    label: 'X',
    icon: XIcon
  },
  {
    link: `mailto:${email}`,
    label: 'Email',
    icon: Mail
  }
];

export default data;
