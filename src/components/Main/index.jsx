import style from './index.module.css'
import img from '../../assets/macbook.png'
import icon from '../../assets/icon.png'
function Main() {
  return (
    <>
      <div className={style.main}>
      <h1 className={style.title}>Launch your own online learning platform</h1>
      <p className={style.paragrph}>Top instructors from around the world teach millions of students on kreed. Get unlimited access to 2,000+ courses for your team.</p>
      <button className={style.button}>Explore Courses</button>
      </div>
      <div className={style.images}>
      <img className={style.img} src={img} alt="" />
      <img className={style.icon} src={icon} alt="" />
      </div>
    </>
  )
}

export default Main; 
