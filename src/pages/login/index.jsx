import { Header } from '../../components/header'

const Login = () => {
    const [formData, setFormData] = useState({
        apelido: '',
        nomeCompleto: '',
        dataNascimento: '',
        cpf: '',
        email: '',
        endereco: {
          rua: '',
          numero: '',
          complemento: '',
          cidade: '',
          uf: '',
          cep: '',
        },
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        if (name.startsWith('endereco')) {
          const field = name.split('[')[1].slice(0, -1); // Extrai o campo do endereço (rua, numero, etc.)
          setFormData((prevData) => ({
            ...prevData,
            endereco: {
              ...prevData.endereco,
              [field]: value,
            },
          }));
        } else {
    
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log('Dados enviados com sucesso!');
           
          } else {
            console.log('Erro ao enviar dados.');
          }
        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      }
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="apelido">Apelido:</label>
          <input type="text" id="apelido" name="apelido" value={formData.apelido} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="nomeCompleto">Nome Completo:</label>
          <input type="text" id="nomeCompleto" name="nomeCompleto" value={formData.nomeCompleto} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input type="date" id="dataNascimento" name="dataNascimento" value={formData.dataNascimento} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <h2>Endereço</h2>
        <div className="form-group">
          <label htmlFor="rua">Rua:</label>
          <input type="text" id="rua" name="endereco[rua]" value={formData.endereco.rua} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="numero">Número:</label>
          <input type="text" id="numero" name="endereco[numero]" value={formData.endereco.numero} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="complemento">Complemento:</label>
          <input type="text" id="complemento" name="endereco[complemento]" value={formData.endereco.complemento} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="cidade">Cidade:</label>
          <input type="text" id="cidade" name="endereco[cidade]" value={formData.endereco.cidade} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="uf">UF:</label>
          <input type="text" id="uf" name="endereco[uf]" maxLength="2" value={formData.endereco.uf} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="cep">CEP:</label>
          <input type="text" id="cep" name="endereco[cep]" value={formData.endereco.cep} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </>
  )
}

export { Login }
