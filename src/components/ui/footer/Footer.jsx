import cls from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={cls.footer}>
      <div className={cls.container}>
        <div className={cls.info}>
          <p className={cls.info}>
            <strong>Мы находимся:</strong>&nbsp;МЭИ, корпус М, 3-й этаж.
          </p>
          <a href="#" className={cls.map}>
            Карта сайта
          </a>
        </div>
        <p className={cls.title}>
          2025 ©&nbsp;
          <strong>Кафедра управления и интеллектуальных технологий МЭИ.</strong>
        </p>
      </div>
    </div>
  )
}

export default Footer
