import { ReactNode } from 'react';
import { NavbarTwoColumns } from './NavbarTwoColumns';
import { Section } from '../layout/Section';
import { Logo } from '../templates/Logo';
import Link from 'next/link';

const Navbar = () => (
  <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
);

export { Navbar };