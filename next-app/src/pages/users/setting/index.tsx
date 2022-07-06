import type { NextPage } from 'next';

// import meta info
import { metaConfig } from '@/src/config/meta';

// import components
import { NavbarFooterLayoutTemplate } from '@/src/components/templates/navbar-footer-layout';
import { B1Template } from '@/src/components/templates/users/setting';

const B1Page: NextPage = () => {
  return (
    <NavbarFooterLayoutTemplate meta={metaConfig.b1}>
      <B1Template />
    </NavbarFooterLayoutTemplate>
  );
};

export default B1Page;
