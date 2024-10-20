import React, { lazy, Suspense } from 'react';

const LazyCheckBox = lazy(() => import('./CheckBox'));

const CheckBox = props => (
  <Suspense fallback={null}>
    <LazyCheckBox {...props} />
  </Suspense>
);

export default CheckBox;
