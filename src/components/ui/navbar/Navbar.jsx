import { NavLink } from "react-router"
import cls from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={cls.navbar}>
      <div className={cls.header}>
        <div className={cls.container}>
          <div className={cls.wrapper}>
            <div className={cls.logo}>
              <a href="#">
                <img width={50} src="./logo.jpg" alt="UIT" />
              </a>
              <a href="https://mpei.ru/Pages/default.aspx">
                <img src="./mpei.png" alt="MPEI" />
              </a>
            </div>
            <div className={cls.contacts}>
              <a className={cls.phone} href="tel:+74953627407">
                +7 (495) 362-74-07
              </a>
              <a className={cls.mail} href="mailto:ui@mpei.ru">
                ui@mpei.ru
              </a>
            </div>
            <div className={cls.params}>
              <button className={cls.search}></button>
              <button className={cls.contrast}></button>
            </div>
          </div>
          <nav className={cls.nav}>
            <ul className={cls.links}>
              <li>
                <NavLink className={cls.link} to="/news">
                  Новости
                </NavLink>
              </li>
              <li>
                <NavLink className={cls.link} to="/ads">
                  Объявления
                </NavLink>
              </li>
              <li>
                <NavLink className={cls.link} to="/department">
                  О кафедре
                </NavLink>
              </li>
              <li>
                <NavLink className={cls.link} to="/entrant">
                  Поступление
                </NavLink>
              </li>
              <li>
                <NavLink className={cls.link} to="/study">
                  Обучение
                </NavLink>
              </li>
              <li>
                <NavLink className={cls.link} to="/science">
                  Наука
                </NavLink>
              </li>
              <li>
                <NavLink className={cls.link} to="/POU">
                  Платные обр.услуги
                </NavLink>
              </li>
              <li>
                <NavLink className={cls.link} to="/photo">
                  Фотогалерея
                </NavLink>
              </li>
              <li>
                <NavLink className={cls.link} to="/references">
                  Ссылки
                </NavLink>
              </li>
              <li>
                <NavLink className={cls.link} to="/contacts">
                  Контакты
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
