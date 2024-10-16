import con from "./connection.js";


export async function inserirLogin(pessoa) {
    const comando = `
        insert into tb_adm (nm_login, ds_senha) 
					        values (?, ?)
    `;
    
    let resposta = await con.query(comando, [pessoa.login, pessoa.senha])
    let info = resposta[0];
    
    return info.insertId;
}

export async function consultarLogin(){
    const comando = `
        select
            nm_login		login,
            ds_senha		senha
        from tb_adm
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function alterarLogin(id, pessoa){
    const comando = `
        update tb_adm
            set nm_login = ?,
                ds_senha = ?
            where id_login = ?;  
    `;
    
    let resposta = await con.query(comando, [pessoa.login, pessoa.senha, id])
    let info = resposta[0];
    
    return info.affectedRows;
}

export async function removerLogin(id){
    const comando = `
        delete from tb_adm
            where id_login = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}




