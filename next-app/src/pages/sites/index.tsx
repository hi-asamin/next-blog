import type { NextPage } from 'next';

// import meta info
import { metaConfig } from '@/src/config/meta';

// import components
import { NavbarFooterLayoutTemplate } from '@/src/components/templates/navbar-footer-layout';
import { A2Template } from '@/src/components/templates/sites';

const A2Page: NextPage = () => {
  return (
    <NavbarFooterLayoutTemplate meta={metaConfig.a2}>
      <A2Template />
    </NavbarFooterLayoutTemplate>
  );
};

export default A2Page;
