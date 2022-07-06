import type { NextPage } from 'next';

// import meta info
import { metaConfig } from '@/src/config/meta';

// import components
import { NavbarFooterLayoutTemplate } from '@/src/components/templates/navbar-footer-layout';
import { B2Template } from '@/src/components/templates/users/show';

const B2Page: NextPage = () => {
  return (
    <NavbarFooterLayoutTemplate meta={metaConfig.b2}>
      <B2Template />
    </NavbarFooterLayoutTemplate>
  );
};

export default B2Page;
