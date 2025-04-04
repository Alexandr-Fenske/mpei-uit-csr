import Form from "../../ui/Form/Form"
import cls from "./Contacts.module.css"
import one from "./images/1.jpg"
import two from "./images/2.jpg"

const Contacts = () => {
  return (
    <div className={cls.contacts}>
      <div className={cls.container}>
        <div className={cls.title}>
          Контакты
        </div>
        <div className={cls.content}>
          <strong>Наши координаты</strong>
          <p>
            <b> Расположение:</b> 111250, Москва, ул. Красноказарменная, д.13а
            (корпус М), 3-й этаж, ауд. М-313
          </p>
          <p>
            <b>Телефон:</b> +7 495 362-74-07, 74-07 (местный)
          </p>
          <p>
            <b>e-mail:</b> <a href="mailto:ui@mpei.ru">ui@mpei.ru</a>
          </p>
        </div>
        <div className={cls.images}>
          <img width={500}  src={one} alt="" />
          <img width={500} src={two} alt="" />
        <Form />
        </div>
      </div>
    </div>
  )
}

export default Contacts
