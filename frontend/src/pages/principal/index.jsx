import './index.scss';
import Menu from '../../components/Menu/'


export default function inicial(){


    const Div1 = () => <div className='inicial'>
           
        

        <h1 className='linqui'>
            <a className='link' id='sla1' href='#'>Lançamentos</a>
            <a className='link' id='sla2' href='#'>Masculino</a>
            <a className='link' id='sla3' href='#'>Feminino</a>

            <input id='busca' type="text" class="search-input" placeholder="Pesquisar..." />
            <button class="search-button">Buscar</button>
        </h1> 
         </div>


    const Div2 = () => <div className='fotos'>
            <img className='logo' src='/assets/images/muie.png' alt='a' /> 
    </div>

    const Div3 = () => <div className='linha'>

    </div>

    const Div4 = () => <div className='nitro'>
        <h1 className='gabriella' id="teste1">DEVIATE NITRO™ 3</h1>
        <h2 className='gabriella' id="teste2">SINTA-SE MAIS RÁPIDO </h2>
        <a className='gabriella'  id ="teste3" href='/comprar'>Comprar Agora</a>
    </div>

    const Div5 = () => <div className='linhaD'>

    </div>

    const Div6 = () => <div className='parceria'> 
                <h1 className='parcerias' id="teste4">Parcerias</h1>  
    </div>

    const Div7 = () => <div className='marcas'>
            <img className='puma' id="teste5" src='/assets/images/adidas.png' alt='a' />
            <img className='puma' id="teste5" src='/assets/images/puma.png.png' alt='a' /> 
            <img className='nike' id="teste6" src='/assets/images/nike.png' alt='a' />
            <img className='new' id="teste6" src='/assets/images/new.png' alt='a' />
    </div>


     const Div8 = () => <div className='nome'>
    <h1 className='teniss' id="teste12">Adidas</h1>
    <h2 className='teniss' id="teste13">Puma</h2>
    <h2 className='teniss' id="teste14">Nike</h2>
    <h3 className='teniss' id="teste15">New Balance</h3>
    </div>

    
    const Div9 = () => <div className='linhass'>
    </div>

    const Div10 = () => <div className='tenis'>
    <img className='pisante' id="teste9" src='/assets/images/campus.png' alt='a' />
    <img className='pisante' id="teste10" src='/assets/images/tn.png' alt='a' />
    <img className='pisante' id="teste11" src='/assets/images/nb.png' alt='a' />
    </div>

    const Div11 = () => <div className='nome'>
        <h1 id='teste20'>Adidas</h1>
        <h2 id='teste21'>Nike</h2>
        <h3 id='teste22'>New Balance</h3>
    </div>

    const Div12 = () => <div className='linhasss'>
    </div>

    const Div13 = () => <div className='produtos'>
        <h1>Produtos</h1>
    </div>

    const Div14 = () => <div className='produtossss'>
        
        <button id="produtoss" className="botao-transparente">
            Ver Tudo
        </button>
        
    </div>

    const Div15 = () => <div className='modelo'>
         <img className='azul' id="teste19" src='/assets/images/niketnazul.png' alt='a' />
         <img className='milan' id="teste16" src='/assets/images/milan.png' alt='a' />
         <img className='high' id="teste17" src='/assets/images/camisetahigh.png' alt='a' />
         <img className='blusa' id="teste18" src='/assets/images/blusa.png' alt='a' />
    </div>

    const Div16 = () => <div className='name'>
        <h1 className='n' id='me'>Tênis</h1>
        <h2 className='time' id='tim'>Camisas de Time</h2>
        <h3 className='cami' id='setas'>Camisetas</h3>
        <h4 className='blu' id='sa'>Blusas</h4>
    </div>

    const Div17 = () => <div className='linhassss'>
    </div>

    const Div18 = () => <div className='poster'>
        <img id='teste20' src="/assets/images/Air_Jordan_poster.png" alt="a" />
        
    </div>

    const Div19 = () => <div className='brasil'>
        <img id='bola1' src="/assets/images/logo.png" alt="" />
    </div>

    const Div20 = () => <div className='usuario'>
         <a href='#'><img className="dell" src="/assets/images/User.png" alt="" /></a>
    </div>
    return(
        <>
        
        <Div1 />
        <Div2 />
        <Div3 />
        <Div4 />
        <Div5 />
        <Div6 />
        <Div7 />
        <Div8 />
        <Div9 />
        <Div10/>
        <Div11/>
        <Div12/>
        <Div13/>
        <Div14/>
        <Div15/>
        <Div16/>
        <Div17/>
        <Div18/>
        </>
    )
}

