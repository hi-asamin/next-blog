import type { NextPage } from 'next';

// import meta info
import { metaConfig } from '@/src/config/meta';

// import components
import { NavbarFooterLayoutTemplate } from '@/src/components/templates/navbar-footer-layout';
import { C2Template } from '@/src/components/templates/signin';

const C2Page: NextPage = () => {
  return (
    <NavbarFooterLayoutTemplate meta={metaConfig.c2}>
      <C2Template />
    </NavbarFooterLayoutTemplate>
  );
};

export default C2Page;
