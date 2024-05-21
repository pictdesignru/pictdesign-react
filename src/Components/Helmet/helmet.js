import React from 'react';
import { Helmet } from "react-helmet";

const HelmetHead = ({name, description}) => {

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      ></meta>
      <title>{description}</title>
      <meta name='description' content={`${description}`}/>
      <meta
        name="keywords"
        content="дизайн-бюро, агентство графического дизайна, студия графического дизайна, дизайн агентство, портфолио, презентации, фирменный стиль, брендинг, веб-дизайн, создание сайтов"
        data-react-helmet="true"
      />
      <meta property="og:type" content="website" data-react-helmet="true" />
      <link rel="canonical" href="https://pict.design" />
    </Helmet>
  );
};

export default HelmetHead;
