import { m as M, LazyMotion, domMax } from 'framer-motion';

const MotionLazy = ({ children }) => {
  return (
    <LazyMotion strict features={domMax}>
      <M.div style={{ height: "100%" }}>{children}</M.div>
    </LazyMotion>
  );
};
export default MotionLazy;
