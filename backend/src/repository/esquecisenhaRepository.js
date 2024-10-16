import con from "./connection.js";


export async function inserirFornecedor(senha) {
    const comando = `
        insert into tb_adm_esqueci_senha (ds_email, nmr_codigo, ds_senha_novamente, ds_senha) 
					        values (?, ?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [senha.email, senha.codigo, senha.senha_novamente, senha.senha])
    let info = resposta[0];
    
    return info.insertId;
}

export async function alterarFornecedor(id, senha){
    const comando = `
        update tb_adm_esqueci_senha
            set ds_email              = ?,
                nmr_codigo            = ?, 
                ds_senha_novamente    = ?,
                ds_senha              = ?
            where id_login  = ?;  
    `;
    
    let resposta = await con.query(comando, [pessoa.fronecedor, pessoa.cnpj, pessoa.produto, pessoa.pessoa, id])
    let info = resposta[0];
    
    return info.affectedRows;
}




