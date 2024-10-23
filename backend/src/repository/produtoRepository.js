import con from "./connection.js";


export async function inserirProduto(produto) {
    const comando = `
        insert into tb_adm (nm_produto, ds_produto, qtd_produto, vl_produto) 
					        values (?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [produto.produto, produto.descricao, produto.quantidade, produto.valor])
    let info = resposta[0];
    
    return info.insertId;
}

export async function consultarProduto(){
    const comando = `
        select
            nm_produto		produto,
            ds_produto		descricao,
            qtd_produto     quantidade,
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
                ds_produto = ?,
                qtd_produo = ?,
                vl_valor  = ?
             ;  
    `;
    
    let resposta = await con.query(comando, [produto.produto, produto.descricao, produto.quantidade, produto.valor])
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




