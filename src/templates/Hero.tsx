import Link from 'next/link';

import { Background } from '../background/Background';
import { TButton } from '../button/TButton';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The most incredible\n'}
            <span className="text-primary-500">Quiz Creation Tool</span>
          </>
        }
        description="Create engaging and interactive quizzes for any occasion with our easy-to-use platform"
        button={
          <Link href="/signup">
            <a>
              <TButton xl>Make A Free Quiz!</TButton>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
