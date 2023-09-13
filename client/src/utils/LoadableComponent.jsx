import React, { Suspense, lazy } from 'react';
import BounceLoader from "react-spinners/BounceLoader";

function LoadableComponent(importFunc) {
  const LazyComponent = lazy(importFunc);

  return (
    <Suspense fallback={<BounceLoader color="hsla(136, 34%, 44%, 1)" />}>
      <LazyComponent />
    </Suspense>
  );
}

export default LoadableComponent;