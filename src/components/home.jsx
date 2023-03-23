import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { fetchSectors } from '../API/financeAPI';
import Sector from './sector';
import style from '../styles/Sectors.module.css';

function Sectors() {
  const { sectors } = useSelector((state) => state.sectors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSectors());
  }, [dispatch]);

  const isLight = [0, 3, 4, 7, 8];

  return (
    <section className="animated">
      <header>
        <div />
        <div> Finance APP . Home </div>
        <div><FontAwesomeIcon icon={faGear} /></div>
      </header>
      <div className={style.sectorContainer}>
        <section className={style.sectorsContainer}>
          {
            sectors.map((sector, index) => {
              let className = '';

              if (index < 10 || (index / 10) % 2 === 0) {
                className = isLight.includes(index % 10)
                  ? 'is-light'
                  : 'is-dark';
              } else {
                className = isLight.includes(index % 10)
                  ? 'is-dark'
                  : 'is-light';
              }

              return (
                <Sector
                  key={sector.sector}
                  sector={sector.sector}
                  change={sector.changesPercentage}
                  className={className}
                />
              );
            })
          }
        </section>
      </div>
    </section>
  );
}

export default Sectors;
