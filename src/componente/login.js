import React, { useState } from "react";
import Image from "./home-phones.png"



const LoginForm = () => {
  const [nomeUsuario, setnomeUsuario] = useState("");
  const [senhaUsuario, setSenhaUsuario] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const usuarios = ["thais", "mike", "perola"];
  const senhas = ["123", "thais", "2023"]

  const manipulaLogin = () => {
    // Verificar se o nome de usuário e a senha são válidos (simplificado para este exemplo)
    if (usuarios.includes(nomeUsuario) && senhas.includes(senhaUsuario)) {
      // redirecionar para a página inicial após o login bem-sucedido
      window.location.replace("/home"); // o replace substitui a página atual, então não poderá voltar a pagina anterior usando o botão voltar
    } else {
      setErrorMessage("Nome de usuário ou senha incorretos.");
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={Image} alt="./home-phones.png" />
      </div>
      <div className="input-container">
        <h1 className="h1Instagram">Instagram</h1>
        <input
          type="text"
          placeholder="Nome de usuário"
          value={nomeUsuario}
          onChange={(e) => setnomeUsuario(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senhaUsuario}
          onChange={(e) => setSenhaUsuario(e.target.value)}
          required
        />
        <button onClick={manipulaLogin}>Entrar</button>
        <p className="error-message">{errorMessage}</p>
        <p className="or">ou</p>
        <p className="face">Entrar com o Facebook</p>
        <p className="esqueceusenha">Esqueceu a senha?</p>
        
      </div>
    </div>
  );
};

export default LoginForm;
