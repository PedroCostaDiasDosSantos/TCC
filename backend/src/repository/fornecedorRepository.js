import con from "./connection.js";


export async function inserirFornecedor(pessoa) {
    const comando = `
        insert into tb_fornecedor (nm_fornecedor, ds_cnpj, nm_produto, ds_produto) 
					        values (?, ?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [pessoa.produto, pessoa.cnpj, pessoa.produto])
    let info = resposta[0];
    
    return info.insertId;
}

export async function consultarBusca(){
    const comando = `
        select
           nm_fornecedor		fronecedor,
            ds_cnpj		        cnpj,
            nm_produto          produto,
            ds_produto         descricao
        from tb_fornecedor
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function alterarFornecedor(id, pessoa){
    const comando = `
        update tb_busca
            set nm_fornecedor = ?,
                ds_cnpj       = ?, 
                nm_produto    = ?,
                ds_produto    = ?
            where id_fornecedor  = ?;  
    `;
    
    let resposta = await con.query(comando, [pessoa.fronecedor, pessoa.cnpj, pessoa.produto, pessoa.pessoa, id])
    let info = resposta[0];
    
    return info.affectedRows;
}

export async function removerFornecedor(id){
    const comando = `
        delete from tb_fornecedor
            where id_fornecedor = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}




