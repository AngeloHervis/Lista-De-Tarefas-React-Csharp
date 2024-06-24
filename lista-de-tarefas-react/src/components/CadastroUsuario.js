import React from "react";
import { useNavigate } from "react-router-dom";
import {realizarCadastro} from "../services/api";

const CadastroUsuario = () => {
    const history = useNavigate();
    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [erro, setErro] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await realizarCadastro({nome, email, senha});
            history.push("/login");
        } catch (error) {
            setErro("Erro ao cadastrar usuário.");
        }
    };

    return (
        <div className="login-container">
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
            {erro && <p className="error-message">{erro}</p>}
            <p>Já tem uma conta? <a href="/login">Faça login</a></p>
        </div>
    );
}

export default CadastroUsuario;