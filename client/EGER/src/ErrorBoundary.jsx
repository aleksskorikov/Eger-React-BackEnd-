import React, { useState, useEffect } from "react";
import Error from "./Components/error";

    const errorHandler = (error, info) => {
    console.error(`ErrorBoundary caught an error: ${(error, info)}`);
    };

    const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const handleError = (error, info) => {
        errorHandler(error, info);
        setHasError(true);
        };

        window.addEventListener("error", handleError);

        return () => {
        window.removeEventListener("error", handleError);
        };
    }, []);

    if (hasError) {
        return <Error/>;
    }
    return children;
    };

export default ErrorBoundary;