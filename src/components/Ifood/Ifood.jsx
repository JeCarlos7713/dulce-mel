import "./Ifood.css"
import ifood from "./../../assets/ifood.png"

const Ifood = () => {
  return (
    <section className="ifood">
        <h2>Peça já pelo ifood</h2>
        
        <div className="img-ifood">
            <img src={ifood} alt="Ifood" />
        </div>
    </section>
  )
}

export default Ifood