import type { NextPage } from 'next';

// import meta info
import { metaConfig } from '@/src/config/meta';

// import components
import { NavbarFooterLayoutTemplate } from '@/src/components/templates/navbar-footer-layout';
import { C1Template } from '@/src/components/templates/signup';

const C1Page: NextPage = () => {
  return (
    <NavbarFooterLayoutTemplate meta={metaConfig.c1}>
      <C1Template />
    </NavbarFooterLayoutTemplate>
  );
};

export default C1Page;
