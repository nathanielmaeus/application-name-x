import * as React from 'react';
import { Route, RouteProps, BrowserRouter, Redirect } from 'react-router-dom';

const CandidateListPage = React.lazy(() => import('../pages/candidateList/candidateList'));
const ApplicantPage = React.lazy(() => import('../pages/applicant/applicant'));

const Routes: React.FC<RouteProps> = () => (
  <BrowserRouter>
    <React.Suspense fallback={<div>Загрузка...</div>}>
        <Route exact path="/" render={() => <Redirect to="/applicant" />} />
        <Route exact path="/applicant" component={ApplicantPage} />
        <Route exact path="/candidates" component={CandidateListPage} />
    </React.Suspense>
  </BrowserRouter>
);

export default Routes;
