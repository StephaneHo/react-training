import { PageContent } from "../components/PageContent";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  error.status
  return (
    <PageContent title="An error occurred">
      <p>Something went wrong !</p>
    </PageContent>
  );
};
