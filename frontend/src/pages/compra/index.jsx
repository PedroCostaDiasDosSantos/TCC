import './index.scss'


export default function produtos(){
    const Div1 =() => <div className='barraa'>
        <a className='barra' id="a" href='#'>Lançamentos</a>
        <a className='barra' id="b"href='#'>Masculino</a>
        <a className='barra' id="c" href='#'>Feminino</a>
        <a className='barra' id="d" href='#'>Outlet</a>
    </div>

    const Div2 = () => <div className='etiopia'>
        <img className='azeitona' src='/assets/images/logo.png' alt='a' />
    </div>

    const Div3 = () => <div className='chuva'>
        <a href='#'><img className='azeite' src='/assets/images/usuario.png' alt='a' /></a>
    </div>

    const Div4 = () => <div className='seta'>
         <img className='um'id="e" src='/assets/images/imagemQ.png' alt='a' />
         <img className='um' id="f" src='/assets/images/imagemT.png' alt='a' />
         <a href='#'><img className='compartilhar' id='vascp' src='/assets/images/Share.png' alt='a'/></a>
    </div>

    const Div5 = () => <div className='ssetas'>
     <img className='do' id="g" src='/assets/images/imagemD.png' alt='a' />
     <img className='do' id="h" src='/assets/images/imagemU.png' alt='a' />
    </div>

    const Div6 = () => <div className='nome'>
        <h1 className='modelo'>
        Nike <br></br> TN Air Max Plus <br></br> White University 
        <br></br> Blue
        </h1>
    </div>

    const Div7 = () => <div className='avaliacao'>
         <img className='estrela' id="i" src='/assets/images/star_filled.png' alt='a' />
         <img className='estrela' id="j" src='/assets/images/star_filled.png' alt='a' />
         <img className='estrela' id="k" src='/assets/images/star_filled.png' alt='a' />
         <img className='estrela' id="l" src='/assets/images/star_filled.png' alt='a' />
         <img className='estrela' id="m" src='/assets/images/star.png' alt='a' />
    </div>

    const Div8 = () => <div className='classificacao'>
         <h1 className='classificacao' id="n">4.9</h1>
         <h2 className='aval'>(33) avaliações</h2>
    </div>

    const Div9 = () => <div className='preco'>
         <h3 className='pre' id="o">R$ 930,99 no Pix</h3>
         <h4 className='co' id="p">ou R$ 979,99 em até 9x sem juros</h4>
         </div>

    const Div10 = () => <div className='fotinha'>
        <img className='lg' src='/assets/images/imagemPE.png' alt='a' />
        <img className='samsungo' id="q"src='/assets/images/niketnirmax.png' alt='a' />
    </div>    
    
   const Div11 = () => <div className='botao'>
    <button className='bu' id="r">40</button>
    <button className='but' id="s">41</button>
    <button className='bua' id="t">42</button>
   </div>

   const Div12 = () => <div className='botoes'>
    <button id="u">43</button>
    <button id="v">44</button>
    <button id="w">45</button>
   </div>

  const Div13 = () => <div className='botoes'>
  <button id="x">46</button>
  <button id="y">47</button>
  <button id="z">48</button>
</div>

 const Div14 = () => <div className='aiaiD'>
    <img className='ai' id="presunto" src='/assets/images/logoo.png' alt='a' />
    <a className='linkk' id='link1' href='#'>Inicio</a>
    <a className='linkk' id='link2' href='#'>Sobre Nós</a>

    <a className='linkk' id='link3' href='#'>Suporte</a>
    <a className='linkk' id='link4' href='#'>Informações</a>
 </div>

 const Div15 = () => <div className='seguro'>
        <img className='seguro'  src='assets/images/compraSS.png'></img>
        <h1 className='seguro' id='seguro'>Compra Segura</h1>
 </div>

 const Div16 = () => <div className='links'>
    <a href='#' className='linkss' id='paysandu'>Home</a>
    <a href='#' className='linkss' id='ibis'>Produtos</a>
    <a href='#' className='linkss' id='nautico'>Informações da Empresa</a>
    <a href='#' className='linkss' id='crb'>Contato</a>
    <a href='#' className='linkss' id='remo'>Telefones</a>
    <a href='#' className='linkss' id='pelotas'>Chat</a>
 </div>

  const Div17 = () => <div className='aiai'>
  <a href='#'> <img className='caldo' id="podrao" src='/assets/images/Phone.png' alt='a' /></a>
  <a href='#'> <img className='caldo' id="podroes"src='/assets/images/mail.png' alt='a' /></a>
  <a href='#'> <img className='caldo' id="3" src='/assets/images/Instagram.png' alt='a' /></a>
</div>

const Div18 = () => <div className="voltar">
    <img className='caldeirao' src='/assets/images/Arrow right.png' alt='a' />
</div>

const Div19 = () => <div className='outubro'>
        <img src='/assets/images/rectanglee.png' alt='a'/>
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
    <Div19/>
    </>

)
}