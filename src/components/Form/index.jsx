import { useCallback, useEffect, useState } from 'react';
import styled from './Form.module.scss'
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [subject, setSubject] = useState('physical')
  const {telegram} = useTelegram()

const onSendData = useCallback(() => {
  const data = {
    country,
    street,
    subject
  }
  telegram.sendData(JSON.stringify(data))
}, [country, street, subject])

  useEffect(() => {
    telegram.onEvent('mainButtonClicked', onSendData)
    return () => {
      telegram.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData])

  useEffect(() => {
    telegram.MainButton.setParams({
      text: 'Send datas'
    })
  }, [])

  useEffect(() => {
    if(!street || !country){
      telegram.MainButton.hide()
    } else {
      telegram.MainButton.show()
    }
  }, [country, street])

  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }
  const onChangeStreet = (e) => {
    setStreet(e.target.value)
  }
  const onChangeSubject = (e) => {
    setSubject(e.target.value)
  }


  return(
    <>
      <div className={styled.form}>
        <h3>Write your datas</h3>
        <input value={country} onChange={onChangeCountry} className={styled.input} type="text" placeholder='Country' />
        <input value={street} onChange={onChangeStreet} className={styled.input} type="text" placeholder='Street' />
        <select value={subject} onChange={onChangeSubject} className={styled.select}>
          <option value="physical">Physical</option>
          <option value="legal">Legal</option>
        </select>
      </div>
    </>
  )
}

export default Form;