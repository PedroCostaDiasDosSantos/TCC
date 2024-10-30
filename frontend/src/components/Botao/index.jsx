import './index.scss'

export default function Botao({ titulo, onClick, outline = false }){
    return(
        <div className='botao1'>
            <button className={`buttoon ${outline ? 'outline' : 'solid'}`} onClick={onClick}>{titulo}</button>
        </div>
    )
}