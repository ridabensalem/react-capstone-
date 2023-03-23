import { useParams } from 'react-router-dom';
import Details from '../components/details';

function CompanyRoute() {
  const { company } = useParams();
  return (
    <section>
      <Details symbol={company} />
    </section>
  );
}

export default CompanyRoute;
