import cls from "./POU.module.css"

const POU = () => {
  return (
    <div className={cls.pou}>
      <div className={cls.container}>
        <div className={cls.title}>Платные обр.услуги</div>
        <p>
          Кафедра оказывает платные образовательные услуги в части подготовки
        </p>
        <div>
          <strong>
            - бакалавров по направлению 27.03.04 «Управление в технических
            системах»:
          </strong>
        </div>
        <div>
          <strong>
            - магистров по направлению 27.04.04 «Управление в технических
            системах» (с 2024 года - «Интеллектуальные технологии управления в
            технических системах, обработка и анализ данных»):
          </strong>
        </div>

        <div>
          <strong>
            - аспирантов по научной специальности 2.3.1 «Системный анализ,
            управление и обработка информации, статистика»
          </strong>
        </div>

        <p>
          На кафедре работает Центр подготовки и переподготовки специалистов
          «Современные промышленные системы автоматизации и телемеханики», на
          базе которого проводятся курсы повышения квалификации специалистов,
          работающих в области, связанной с автоматизированными системами
          управления технологическими процессами (АСУ ТП).
        </p>
        <p>
          В рамках изучаемых курсов повышения квалификации рассматриваются как
          общие моменты организации современной АСУ ТП, так и работа
          непосредственно с программируемыми логическими контроллерами (ПЛК).
          Кроме того, есть курс, связанный с автоматизированными системами на
          базе электропневмоавтоматики.
        </p>
        <p>
          Длительность курсов различна: от 16 академических часов (базовый курс)
          до 72 академических часов (стандартный курс). По результатам обучения
          выдается сертификат государственного образца о повышении квалификации
          по направлению 27.04.04. «Управление в технических системах».
        </p>

        <p>
          По вопросам обучения на курсах повышения квалификации обращаться к
          проф. Балареву Дмитрию Александровичу.
        </p>
      </div>
    </div>
  )
}

export default POU
