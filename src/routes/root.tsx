import * as React from "react";
import { Switch, Route } from "wouter";
import { Layout } from "src/components/layout";

const CandidateListPage = React.lazy(() =>
  import("../pages/candidateList/candidateList")
);
const ApplicantPage = React.lazy(() => import("../pages/applicant/applicant"));

const Routes: React.FC = () => (
  <Layout>
    <React.Suspense fallback={<div>Загрузка...</div>}>
      <Switch>
        <Route path="/" component={ApplicantPage} />
        <Route path="/applicant" component={ApplicantPage} />
        <Route path="/candidates" component={CandidateListPage} />
      </Switch>
    </React.Suspense>
  </Layout>
);

export default Routes;
