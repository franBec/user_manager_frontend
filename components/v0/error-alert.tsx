import { AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface ServiceErrorAlertProps {
  title?: string;
  message?: string;
  errorDetails?: string;
}

export default function ErrorAlert({
  title = "Error",
  message = "Something went wrong...",
  errorDetails,
}: Readonly<ServiceErrorAlertProps>) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Alert variant="default" className="bg-secondary">
      <AlertTriangle className="h-5 w-5" />
      <AlertTitle className=" text-lg font-semibold">{title}</AlertTitle>
      <AlertDescription className="mt-2">
        <p>{message}</p>
        {errorDetails && (
          <div className="mt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide" : "Show"} Details
              {showDetails ? (
                <ChevronUp className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4" />
              )}
            </Button>
            {showDetails && (
              <pre className="mt-2 p-2  rounded text-sm  overflow-x-auto">
                {errorDetails}
              </pre>
            )}
          </div>
        )}
      </AlertDescription>
    </Alert>
  );
}
