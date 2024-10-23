import './index.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

export default function Senha() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [newsenha, setNewsenha] = useState("");
    const [confirmNewSenha, setConfirmNewSenha] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (newsenha !== confirmNewSenha) {
            setErrorMessage("A nova senha e a confirmação não coincidem.");
            return;
        }


        setErrorMessage("");
        setSuccessMessage("");

        try {

            const response = await fetch("/senha/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    senha,
                    newsenha,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage("Senha alterada com sucesso!");


                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                setErrorMessage(data.message || "Ocorreu um erro.");
            }
        } catch (error) {
            setErrorMessage("Erro ao alterar senha.");
        }
    };



    return (
        <>
            <div className='container-senha'>
                <div className='roxoo'>
                    <img className='roxom' src='/assets/images/Group3.png' />
                </div>

                <form className='senha-form' >
                    <h1 className='h1-senha'>Esqueceu a Senha?!</h1>

                    <img className='usuario' src='/assets/images/user.png' alt='a' />

                    <input type="text" />
                </form>
            </div>
        </>
    )
}

