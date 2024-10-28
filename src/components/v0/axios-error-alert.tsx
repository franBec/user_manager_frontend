import { AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AxiosError } from "axios";

export default function AxiosErrorAlert({
  axiosError,
}: Readonly<{ axiosError: AxiosError<unknown, unknown> }>) {
  const [showDetails, setShowDetails] = useState(false);

  const errorMessage = axiosError?.response?.data
    ? JSON.stringify(axiosError.response.data, null, 2)
    : JSON.stringify(axiosError, null, 2);

  return (
    <Alert variant="default" className="bg-secondary">
      <AlertTriangle className="h-5 w-5" />
      <AlertTitle className=" text-lg font-semibold">{"Error"}</AlertTitle>
      <AlertDescription className="mt-2">
        <p>{"Something went wrong..."}</p>
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
              {errorMessage}
            </pre>
          )}
        </div>
      </AlertDescription>
    </Alert>
  );
}
