import { Header } from '../../components/header'
import * as S from './style'

const Login = () => {
  return (
    <>
      <S.Container>
        <Header />
      </S.Container>

      <S.Container style={{ background: 'var(--cor-red-primary)' }}>
        <S.Form action="">
          <h1 style={{ textAlign: 'center', margin: '1rem' }}>Login</h1>
          <label htmlFor="">Nome de usuário</label>
          <S.Input />
          <label htmlFor="">Senha</label>
          <S.Input />
          <S.Enter>Entrar</S.Enter>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '1rem',
            }}
          >
            <p>Náo tenho cadastro</p>
            <p>Esqueci minha senha</p>
          </div>
        </S.Form>
      </S.Container>
    </>
  )
}

export { Login }
