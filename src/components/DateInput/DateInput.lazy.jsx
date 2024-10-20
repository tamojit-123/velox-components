import React, { lazy, Suspense } from 'react'

const LazyDateInput = lazy(() => import('./DateInput'))

const DateInput = (props) => (
  <Suspense fallback={null}>
    <LazyDateInput {...props} />
  </Suspense>
)

export default DateInput
