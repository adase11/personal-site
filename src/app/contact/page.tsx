import type { Metadata } from 'next';
import ContactIcons from '@/components/ui/contact-icons';
import PageHeader from '@/components/ui/page-header';
import { pageMetadata } from '@/lib/metadata';
import EmailLink from './email-link';

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description:
    'Get in touch with Austin Dase — email hi@dase.dev, or find him on ' +
    'GitHub, LinkedIn, and X.',
  path: '/contact'
});

const Contact = () => (
  <>
    <PageHeader eyebrow="Contact" title="Get in touch">
      <p>
        The fastest way to reach me is email. I read everything, and reply to
        most of it.
      </p>
    </PageHeader>

    <div className="flex flex-col items-start gap-8 border-t border-rule pt-11">
      <EmailLink />
      <ContactIcons />
    </div>
  </>
);

export default Contact;
