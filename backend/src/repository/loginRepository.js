import con from "./connection.js";
import crypto from "crypto-js";


export async function inserirLogin(pessoa) {
    const comando = `
        insert into tb_adm (nm_login, ds_senha) 
					        values (?, ?)
    `;

    let hash = crypto.createHash('sha256').update(pessoa.senha).digest('hex');

    console.log("Inserindo usuário:", pessoa.login, hash); 

    let resposta = await con.query(comando, [pessoa.login, pessoa.senha, hash])
    let info = resposta[0];
    
    return info.insertId;
}

export async function validarUsuario(pessoa) {
    const comando = `
        select
            id_login id,
            nm_login nome
        from tb_adm 
        where
            nm_login = ?
            and ds_senha = ?  
    `;

    try {

        let registros = await con.query(comando, [pessoa.login, pessoa.senha]);

        if (registros[0].length === 0) {
            throw new Error("Usuário não encontrado");
        }

        let usuario = registros[0][0];
        // let hash = crypto.createHash('sha256').update(pessoa.senha).digest('hex');

        // if (usuario.ds_senha !== hash) {
        //     throw new Error("Usuário ou senha incorreto(s)");
        // }

        return usuario; 
    } catch (error) {
        console.error("Erro ao validar usuário:", error);
        throw new Error("Não foi possível validar o usuário.");
    }
}

export async function alterarSenha(pessoa) {
    const comando = `
        Update tb_adm
        set ds_senha = ?  
        
        where
            nm_login = ?
            and ds_senha = ?  
    `;

    try {

        let registros = await con.query(comando, [ pessoa.Novasenha,pessoa.login, pessoa.senha]);

        if (registros[0].length === 0) {
            throw new Error("Usuário não encontrado");
        }

        let usuario = registros[0][0];
        // let hash = crypto.createHash('sha256').update(pessoa.senha).digest('hex');

        // if (usuario.ds_senha !== hash) {
        //     throw new Error("Usuário ou senha incorreto(s)");
        // }

        return usuario; 
    } catch (error) {
        console.error("Erro ao validar usuário:", error);
        throw new Error("Não foi possível validar o usuário.");
    }
}