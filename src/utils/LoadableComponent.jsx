import React, { Suspense, lazy } from 'react';

function LoadableComponent(importFunc) {
  const LazyComponent = lazy(importFunc);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

export default LoadableComponent;