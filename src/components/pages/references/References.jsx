import cls from "./References.module.css"

const References = () => {
  return (
    <div className={cls.references}>
      <div className={cls.container}>
        <div className={cls.title}>Ссылки</div>
        <ul className={cls.links}>
          <li className={cls.link}>
            Интернет-портал НИУ "МЭИ":{" "}
            <a href="https://mpei.ru/">https://mpei.ru/</a>
          </li>
          <li className={cls.link}>
            Сайт Института Информационных и Вычислительных Технологий (ИВТИ) НИУ
            "МЭИ": <a href="https://ivti.mpei.ru/">https://ivti.mpei.ru/</a>
          </li>
          <li className={cls.link}>
            Официальная группа НИУ "МЭИ" в социальной сети "ВКонтакте":{" "}
            <a href="https://vk.com/mpei_ru">https://vk.com/mpei_ru</a>
          </li>
          <li className={cls.link}>
            Официальная группа ИВТИ в социальной сети "ВКонтакте":{" "}
            <a href="https://vk.com/mpei_ivti">https://vk.com/mpei_ivti</a>
          </li>
          <li className={cls.link}>
            Сайт выпускников ИВТИ (АВТФ):{" "}
            <a href="http://sachkodrom.ru/">http://sachkodrom.ru/</a>
          </li>
          <li className={cls.link}>
            Научно-техническая библиотека МЭИ:{" "}
            <a href="http://ntb.mpei.ru/">http://ntb.mpei.ru/</a>
          </li>
          <li className={cls.link}>
            Дом культуры МЭИ:{" "}
            <a href="http://www.dkmpei.ru">http://www.dkmpei.ru</a>
          </li>
          <li className={cls.link}>
            Спортивно-технический центр МЭИ:
            <a href=" https://mpeisport.ru/"> https://mpeisport.ru/</a>
          </li>
          <li className={cls.link}>
            Спортивно-технический центр МЭИ:{" "}
            <a href="http://lc.mpei.ru/Pages/default.aspx">
              http://lc.mpei.ru/Pages/default.aspx
            </a>
          </li>
          <li className={cls.link}>
            Студенческий оздоровительно-спортивный лагерь "Алушта":{" "}
            <a href="http://lc.mpei.ru/Pages/default.aspx">
              http://lc.mpei.ru/Pages/default.aspx
            </a>
          </li>
          <li className={cls.link}>
            Сайт Профкома студентов и аспирантов МЭИ:{" "}
            <a href="http://lc.mpei.ru/Pages/default.aspx">
              http://lc.mpei.ru/Pages/default.aspx
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default References
