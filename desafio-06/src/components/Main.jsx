import star from '../images/star.svg'
import wStar from '../images/star-w.svg'
import clock from '../images/clock.svg'

const Main = () => {
  return (
    <div className="main">
      <div className="main-img"></div>
      <div className="main-conteudo">
        <p>Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retoma seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de “Vingadores: Endgame”.</p>
        <div className="main-descricao">
            <p><img src={clock} alt="" /> 51min</p>
            <div className="main-star">
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={wStar}/>
            </div>
            <p>2021</p>
        </div>
        <button className='btn1'>Assistir agora</button>
        <button className='btn2'>Trailer</button>
      </div>
    </div>
  )
}

export default Main
