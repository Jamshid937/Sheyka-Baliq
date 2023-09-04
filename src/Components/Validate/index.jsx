import React from 'react'
import { useState } from 'react'
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';
import Container from '../../layout/container';
import './validate.css';

const initialData ={
  tell: ''
}


const Validate = () => {
  const [fields,setFields] = useState(initialData)
  const [error, setError] = useState({})
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    const {name, value} = e.target
    setFields({
       ...fields, [name] : value
   })
   }
var sendtelegram = function(e) {
e.preventDefault()
const fieldsEror = {}



if(!fields.tell.trim()){
fieldsEror.tell = 'tell is required'
} else if(!/^(\+998\d{9}|\d{9})$/.test(fields.tell)){
  fieldsEror.tell = 'telefon raqamingizni to`liq kiriting'
}


setError(fieldsEror)

    if(Object.keys(fieldsEror).length === 0){
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      button: "Jo`natildi!",
    });

    setFields(initialData)
  }
    
};
  return (
    <Container>
      <div className="validate" id='input' >
        <h2><p>{t('h7')}</p></h2>
        <p><p>{t('h9')}</p></p>

        <div className='validate__form'>
            <form onSubmit={sendtelegram}>
                <input type="tel" name='tell' value={fields.tell} placeholder='telefon raqamingizni' onChange={handleChange}/>
                 {error.tell && <span className='validate__form__span'>{error.tell}</span>}
                <button><p>{t('btn')}</p></button>
            </form>
        </div>
      </div>
    </Container>
  )
}

export default Validate