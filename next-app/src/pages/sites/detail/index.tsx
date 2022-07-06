import type { NextPage } from 'next';

// import meta info
import { metaConfig } from '@/src/config/meta';

// import components
import { NavbarFooterLayoutTemplate } from '@/src/components/templates/navbar-footer-layout';
import { A3Template } from '@/src/components/templates/sites/detail';

const A3Page: NextPage = () => {
  return (
    <NavbarFooterLayoutTemplate meta={metaConfig.a3}>
      <A3Template />
    </NavbarFooterLayoutTemplate>
  );
};

export default A3Page;
