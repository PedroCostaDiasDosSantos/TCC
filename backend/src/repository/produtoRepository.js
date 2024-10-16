import con from "./connection.js";


export async function inserirProduto(produto) {
    const comando = `
        insert into tb_adm (nm_produto, ds_produto, vl_produto) 
					        values (?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [produto.produto, produto.produto, produto.produto])
    let info = resposta[0];
    
    return info.insertId;
}

export async function consultarProduto(){
    const comando = `
        select
            nm_produto		produto,
            ds_produto		produto,
            vl_valor        valor
        from tb_produto
    `;


    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function alterarProduto(id, produto){
    const comando = `
        update tb_produto
            set nm_produto = ?,
                ds_produto= ?,
                vl_valor  = ?
             ;  
    `;
    
    let resposta = await con.query(comando, [produto.produto, produto.produto, produto.valor])
    let info = resposta[0];
    
    return info.affectedRows;
}

export async function removerProduto(id){
    const comando = `
        delete from tb_produto
            where id_produto = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}




