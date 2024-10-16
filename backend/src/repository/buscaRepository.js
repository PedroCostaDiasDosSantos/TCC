import con from "./connection.js";


export async function inserirBusca(pessoa) {
    const comando = `
        insert into tb_adm (nm_produto, ds_produto) 
					        values (?, ?)
    `;
    
    let resposta = await con.query(comando, [pessoa.produto, pessoa.produto])
    let info = resposta[0];
    
    return info.insertId;
}

export async function consultarBusca(){
    const comando = `
        select
           nm_produto		produto,
            ds_produto		descricacao
        from tb_busca
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function alterarBusca(id, pessoa){
    const comando = `
        update tb_busca
            set nm_produto = ?,
                ds_produto = ?
            where id_produto = ?;  
    `;
    
    let resposta = await con.query(comando, [pessoa.produto, pessoa.produto, id])
    let info = resposta[0];
    
    return info.affectedRows;
}

export async function removerBusca(id){
    const comando = `
        delete from tb_busca
            where produto_id = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}




