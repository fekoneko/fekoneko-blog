import { MouseEvent, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import LogInForm from '../components/LogInForm';
import { GlobalContext } from '../contexts/GlobalContext';

const LogInModal = () => {
  const { langData } = useContext(GlobalContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleTipAction = (e: MouseEvent): void => {
    e.preventDefault();
    setSearchParams((prev) => {
      prev.set('m', 'r');
      return prev;
    });
  };

  return (
    <>
      <Helmet>
        <title>{`${langData.LogInModal_title} - ${langData.SiteName}`}</title>
      </Helmet>

      <h1>{langData.LogInModal_header}</h1>
      <LogInForm />
      <p>
        {langData.LogInModal_tip}{' '}
        <a href="#" onClick={handleTipAction}>
          {langData.LogInModal_tipAction}
        </a>
      </p>
    </>
  );
};
export default LogInModal;
