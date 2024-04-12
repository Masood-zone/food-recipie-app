import React from "react";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="w-80 h-80 shadow-lg rounded-lg flex my-10 flex-col items-center justify-center mx-auto">
      <p className="text-xl font-medium text-dark-blue">
        Something went wrong:
      </p>
      <pre className="text-red-500 text-lg">{error.message}</pre>
      <button className="btn btn-ghost" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}

export default ErrorFallback;
