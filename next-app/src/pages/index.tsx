import type { NextPage } from 'next';

// import meta info
import { metaConfig } from '@/src/config/meta';

// import components
import { NavbarFooterLayoutTemplate } from '@/src/components/templates/navbar-footer-layout';
import { A1Template } from '@/src/components/templates/index';

const A1Page: NextPage = () => {
  return (
    <NavbarFooterLayoutTemplate meta={metaConfig.a1}>
      <A1Template />
    </NavbarFooterLayoutTemplate>
  );
};

export default A1Page;
