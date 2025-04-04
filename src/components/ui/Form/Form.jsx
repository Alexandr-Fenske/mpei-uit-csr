import { useState } from "react"
import cls from "./Form.module.css"

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const isDisabled = !form.name || !form.email || !form.message

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Заявка успешно отправлена!")
    setForm({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <form className={cls.form} onSubmit={handleSubmit}>
      <div className={cls.title}>
        Если у вас есть вопросы и <br /> предложения по работе кафедры, оставьте
        заявку
      </div>
      <div className={cls.content}>
        <input
          type="text"
          className={cls.input}
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Имя"
        />
        <input
          type="text"
          className={cls.input}
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          className={cls.input}
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Телефон"
        />
        <textarea
          className={cls.textarea}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Сообщение"
        ></textarea>
      </div>
      <div className={cls.wrapBtn}>
        <button className={cls.btn} disabled={isDisabled} type="sumbit">
          Отправить заявку
        </button>
      </div>
    </form>
  )
}

export default Form
