import * as React from "react";
import { Route, RouteProps, BrowserRouter, Redirect } from "react-router-dom";
import { Layout } from "src/components/layout";

const CandidateListPage = React.lazy(() =>
  import("../pages/candidateList/candidateList")
);
const ApplicantPage = React.lazy(() => import("../pages/applicant/applicant"));

const Routes: React.FC<RouteProps> = () => (
  <BrowserRouter>
    <Layout>
      <React.Suspense fallback={<div>Загрузка...</div>}>
        <Route exact path="/" render={() => <Redirect to="/applicant" />} />
        <Route exact path="/applicant" component={ApplicantPage} />
        <Route exact path="/candidates" component={CandidateListPage} />
      </React.Suspense>
    </Layout>
  </BrowserRouter>
);

export default Routes;
