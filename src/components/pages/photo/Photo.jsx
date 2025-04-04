import cls from "./Photo.module.css"
import one from "./images/1.jpg"
import two from "./images/2.jpg"
import three from "./images/3.jpg"
import four from "./images/4.jpg"
import five from "./images/5.jpg"
import six from "./images/6.jpg"
import seven from "./images/7.jpg"
import eight from "./images/8.jpg"
import nine from "./images/9.jpg"
import ten from "./images/10.jpg"
import eleven from "./images/11.jpg"
import twelve from "./images/12.jpg"
import thirteen from "./images/13.jpg"
import fourteen from "./images/14.jpg"

const Photo = () => {
  return (
    <div className={cls.photos}>
      <div className={cls.container}>
        <div className={cls.title}>Фотогалерея</div>
        <div className={cls.image}>
          <img width={630} src={one} alt="" />
          <img width={630} src={two} alt="" />
          <img src={three} alt="" />
          <img src={four} alt="" />
          <img width={630} src={five} alt="" />
          <img src={six} alt="" />
          <img src={seven} alt="" />
          <img src={eight} alt="" />
          <img src={nine} alt="" />
          <img width={630} src={ten} alt="" />
          <img width={630} src={eleven} alt="" />
          <img width={630} src={twelve} alt="" />
          <img width={630} src={thirteen} alt="" />
          <img width={630} src={fourteen} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Photo
