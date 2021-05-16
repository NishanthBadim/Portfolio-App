import React from 'react';
import { Layout, Content } from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const Template = (props) => {
  return (
      <Layout fixedHeader >
        {props.header}
        {props.drawer}
        <Content>
          {props.main}
        </Content>
      </Layout>

  );
}

export default Template;
