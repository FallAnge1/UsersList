import React, { useState } from 'react'
import axios from 'axios'

const Contacts = () => {
  // Стилизация ползунка input [ не обращайте внимание ]
  const [value, setValue] = useState(0)
  // const handleInputChange = (event) => {

  // }
  const getBgStyle = () => {
    const min = 0
    const max = 5
    const calc = ((value - min) / (max - min)) * 100
    return `linear-gradient(to right, #fe5f55 ${calc}%, #f2f2f2 ${calc}%)`
  }
  // ------------------------------------------------------------------

  const [formData, setFormData] = useState({
    rate: '',
  })
  const [success, setSuccess] = useState(false)

  const TOKEN = import.meta.env.VITE_TOKEN
  const CHAT_ID = import.meta.env.VITE_CHAT_ID
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

  const handleChange = (e) => {
    setValue(Number(e.target.value))
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message =
      'Оценка Тестового Задания!\n' + 'Оценка: ' + formData.rate + '\n'

    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
      })
      .then((res) => {
        setSuccess(true)
        setFormData({
          rate: '',
          text: '',
        })
      })
      .catch((err) => console.error(err))
      .finally(() => {
        console.log('Оценка поставлена!')
      })
  }
  return (
    <div className="my-24">
      <h1 className="font-black text-3xl">{`${'⭐'} Дайте оценку ${'⭐'}`}</h1>
      <form
        id="form"
        action=""
        onSubmit={handleSubmit}>
        <input
          id="rate"
          name="rate"
          type="range"
          min="0"
          max="5"
          step="1"
          value={value}
          onChange={handleChange}
          style={{
            background: getBgStyle(),
          }}
          required
        />
        <div className="font-bold text-2xl text-center">
          Оценка: <span>{value}</span>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="py-2 px-5 my-5 rounded-full font-black text-3xl bg-primary text-dark hover:text-primary hover:bg-darker transition-colors">
            Отправить
          </button>
        </div>
      </form>
      {success && (
        <div className="success text-xs text-center text-danger p-6">
          Сообщение отправлено!
        </div>
      )}
    </div>
  )
}

export default Contacts
