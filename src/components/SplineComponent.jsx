const SplineComponent = ({ className, url }) => {
  return (
    <div className={`${className || ""} flex items-center p-4 pr-6`}>
      <spline-viewer url={url}></spline-viewer>
    </div>
  );
};

export default SplineComponent;
