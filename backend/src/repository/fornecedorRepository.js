import con from "./connection.js";


export async function inserirFornecedor(pessoa) {
    const comando = `
        insert into tb_fornecedor (nm_fornecedor, ds_cnpj) 
					        values (?, ?)
    `;
    
    let resposta = await con.query(comando, [pessoa.fornecedor, pessoa.cnpj])
    let info = resposta[0];
    
    return info.insertId;
}

export async function consultarFornecedor(){
    const comando = `
        select
           nm_fornecedor		fronecedor,
            ds_cnpj		        cnpj
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
                ds_cnpj       = ?
            where id_fornecedor  = ?;  
    `;
    
    let resposta = await con.query(comando, [pessoa.fronecedor, pessoa.cnpj, id])
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




