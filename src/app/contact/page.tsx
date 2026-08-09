import type { Metadata } from 'next';
import ContactIcons from '@/components/ui/contact-icons';
import PageHeader from '@/components/ui/page-header';
import { CONTACT, metadataFor } from '@/data/routes';
import EmailLink from './email-link';

export const metadata: Metadata = metadataFor(CONTACT);

const Contact = () => (
  <>
    <PageHeader eyebrow={CONTACT.eyebrow} title={CONTACT.heading}>
      <p>{CONTACT.lede}</p>
    </PageHeader>

    <div className="flex flex-col items-start gap-8 border-t border-rule pt-11">
      <EmailLink />
      <ContactIcons />
    </div>
  </>
);

export default Contact;
