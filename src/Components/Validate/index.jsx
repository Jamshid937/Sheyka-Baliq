import React from 'react'
import { useTranslation } from 'react-i18next';

import Container from '../../layout/container'
import './validate.css'
const Validate = () => {
  const { t, i18n } = useTranslation();
  return (
    <Container>
      <div className="validate" id='input' >
        <h2><p>{t('h7')}</p></h2>
        <p><p>{t('h9')}</p></p>

        <div className='validate__form'>
            <form>
                <input type="tel" placeholder='999 99 999 99 99'/>
                <button><p>{t('btn')}</p></button>
            </form>
        </div>
      </div>
    </Container>
  )
}

export default Validate