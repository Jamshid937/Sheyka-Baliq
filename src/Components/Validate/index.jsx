import React from 'react'
import Container from '../../layout/container'
import './validate.css'
const Validate = () => {
  return (
    <Container>
      <div className="validate">
        <h2>Telefon raqamingizni qoldiring biz siz bilan aloqaga chiqamiz</h2>
        <p>Bizning raqam:+998 90 809 89 89</p>

        <div className='validate__form'>
            <form>
                <input type="tel" placeholder='999 99 999 99 99'/>
                <button>Tasdiqlash</button>
            </form>
        </div>
      </div>
    </Container>
  )
}

export default Validate