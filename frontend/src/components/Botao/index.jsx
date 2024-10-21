import './index.scss'

export default function Botao({ titulo, onClick, outline = false }){
    return(
        <div className='botao'>
            <button className={`button ${outline ? 'outline' : 'solid'}`} onClick={onClick}>{titulo}</button>
        </div>
    )
}