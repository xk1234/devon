import Link from 'next/link';

import { TButton } from '../button/TButton';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Unlock the full potential of our quiz creation platform."
      subtitle="Get creating!"
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <TButton>Get Started</TButton>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
