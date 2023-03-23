import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchCompany } from '../API/financeAPI';
import style from '../styles/Company.module.css';

function Details({ symbol }) {
  const { company } = useSelector((state) => state.company);
  const location = useLocation();
  const { sector } = location.state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompany(symbol));
  }, [dispatch, symbol]);
  const url = encodeURI(`/sectors/${company}`);
  const backUrl = `/sectors/${sector}`;
  if (!Object.keys(company).length) {
    return (
      <section className="animated">
        <header>
          <div>
            <NavLink to={url}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </NavLink>
          </div>
          <div> Finance APP . Details </div>
          <div><FontAwesomeIcon icon={faGear} /></div>
        </header>
      </section>
    );
  }

  return (
    <section className="animated">
      <header>
        <div>
          <NavLink to={backUrl}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </NavLink>
        </div>
        <div>Stock Screaner</div>
        <div><FontAwesomeIcon icon={faGear} /></div>
      </header>

      <div className={style.companyWrapper}>
        <div className={style.companyContainer}>
          <div>
            <img src={company.image} alt={company.symbol} />
          </div>
          <div>
            <div className={style.companyTitle}>{company.symbol}</div>
            <div className={style.companyChanges}>{company.changes}</div>
          </div>
        </div>
      </div>
      <h2>Company name</h2>
      <div className={style.companyInfo}>{company.companyName}</div>
      <h2>Stock price</h2>
      <div className={style.companyInfo}>{company.price}</div>
      <h2>Currency</h2>
      <div className={style.companyInfo}>{company.currency}</div>
      <h2>Industry</h2>
      <div className={style.companyInfo}>{company.industry}</div>
      <h2>Sector</h2>
      <div className={style.companyInfo}>{company.sector}</div>
      <h2>Description</h2>
      <p className={style.companyDescription}>{company.description}</p>
    </section>
  );
}

Details.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Details;
