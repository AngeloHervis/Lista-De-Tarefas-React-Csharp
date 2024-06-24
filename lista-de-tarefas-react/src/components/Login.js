import React from "react";
import {Navigate} from "react-router-dom";
import {login} from "../services/api";
import "../styles/Login.css";

const Login = () => {
    const history = Navigate();
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [erro, setErro] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({email, senha});
            history.push("/tarefas");
        } catch (error) {
            setErro("Email ou senha inválidos.");
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Entrar</button>
            </form>
            {erro && <p className="error-message">{erro}</p>}
            <p>Ainda não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
        </div>
    );
}

export default Login;