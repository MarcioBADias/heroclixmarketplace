import { Header } from '../../components/header'

const Login = () => {
  return (
    <>
      <Header />
      <form action="http://localhost:3000/usuarios" method="post">
            <div className="form-group">
                <label for="apelido">Apelido:</label>
                <input type="text" id="apelido" name="apelido" required/>
            </div>
            <div className="form-group">
                <label for="nomeCompleto">Nome Completo:</label>
                <input type="text" id="nomeCompleto" name="nomeCompleto" required/>
            </div>
            <div className="form-group">
                <label for="dataNascimento">Data de Nascimento:</label>
                <input type="date" id="dataNascimento" name="dataNascimento" required/>
            </div>
            <div className="form-group">
                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" required/>
            </div>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <h2>Endereço</h2>
            <div class="form-group">
                <label for="rua">Rua:</label>
                <input type="text" id="rua" name="endereco[rua]" required/>
            </div>
            <div class="form-group">
                <label for="numero">Número:</label>
                <input type="text" id="numero" name="endereco[numero]" required/>
            </div>
            <div class="form-group">
                <label for="complemento">Complemento:</label>
                <input type="text" id="complemento" name="endereco[complemento]"/>
            </div>
            <div class="form-group">
                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="endereco[cidade]" required/>
            </div>
            <div class="form-group">
                <label for="uf">UF:</label>
                <input type="text" id="uf" name="endereco[uf]" maxlength="2" required/>
            </div>
            <div class="form-group">
                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="endereco[cep]" required/>
            </div>
            <div className="form-group">
                <input type="submit" value="Enviar"/>
            </div>
        </form>
    </>
  )
}

export { Login }
