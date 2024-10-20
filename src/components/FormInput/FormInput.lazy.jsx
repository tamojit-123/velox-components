import React, { lazy, Suspense } from 'react';

const LazyFormInput = lazy(() => import('./FormInput'));

const FormInput = props => (
  <Suspense fallback={null}>
    <LazyFormInput {...props} />
  </Suspense>
);

export default FormInput;
