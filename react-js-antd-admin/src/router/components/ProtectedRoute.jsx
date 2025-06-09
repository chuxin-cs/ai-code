import { ErrorBoundary } from "react-error-boundary";

// components
import PageError from "@/pages/sys/error/PageError";

const ProtectedRoute = ({ children }) => {
  return <ErrorBoundary FallbackComponent={PageError}>{children}</ErrorBoundary>
};

export default ProtectedRoute;
