import con from "./connection.js";


export async function inserirProduto(produto) {
    const comando = `
        insert into tb_produto (id_fornecedor, nm_produto, ds_produto, qtd_produto, vl_valor) 
					        values (?, ?, ?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [produto.fornecedor, produto.produto, produto.descricao, produto.quantidade, produto.valor])
    let info = resposta[0];
    
    return info.insertId;
}

export async function consultarProduto(){
    const comando = `
        select id_produto       id,
               id_fornecedor    id,
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

export async function consultarProdutoPorId(id){
    const comando = `
        select id_produto       id,
               id_fornecedor    id,
               nm_produto		produto,
               ds_produto		descricao,
               qtd_produto     quantidade,
               vl_valor        valor
        from tb_produto
        where id_produto = ?
    `;


    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros;
}

export async function alterarProduto(id, produto){
    const comando = `
        update tb_produto
            set nm_produto = ?,
                id_fornecedor = ?,
                ds_produto = ?,
                qtd_produo = ?,
                vl_valor  = ? 
             where id_produto = ?;  
    `;
    
    let resposta = await con.query(comando, [produto.fornecedor, produto.produto, produto.descricao, produto.quantidade, produto.valor, id])
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




