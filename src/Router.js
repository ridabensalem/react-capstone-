import { Routes, Route } from 'react-router-dom';
import SectorsRoute from './routes/sectorsRoute';
import CompaniesRoute from './routes/companiesRoute';
import CompanyRoute from './routes/companyRoute';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SectorsRoute />} />
        <Route path="sectors/:sector" element={<CompaniesRoute />} />
        <Route path="company/:company" element={<CompanyRoute />} />
      </Routes>
    </>
  );
}

export default Router;
