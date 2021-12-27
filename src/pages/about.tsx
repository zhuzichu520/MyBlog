import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="关于" description="关于" />}>
    <Content>
      <p>
        我的头发，
        <br />
        它在手上，
        <br />
        在笔记本上，
        <br />
        在键盘上，
        <br />
        在枕头上，
        <br />
        就是不在头上，
        <br />
        风一吹，
        <br />
        它就像蒲公英一样，
        <br />
        飞向远方。
        <br />
      </p>
    </Content>
  </Main>
);

export default About;
