# Bem Viver Admin

## Próximo passo

##########

Na tela, terá uma tabela das matérias já cadastradas do professor e outra tabela das turmas que já atua.

Não vai poder cadastrar turma pro professor aqui. isso vai acontecer no momento que montar o horário.

##########

Intervalo: toda linha sem materia e professor é automaticamente intervalo.
No frontend, vai ter uma flag "Intervalo". Criar um intervalo já cria um novo cadastro sem matéria e professor.

No backend:

Criar campos de desligamento do professor, com boolean pra ativo, data de desligamento

Tirar nome do usuário do header qnd for mobile.

Fazer body menu mobile

Inverter menu pra direita no mobile

Fazer menu mobile

Colocar foto da criança no perfil e de avatar pro user

Melhorar layout responsivo.

Fazer um monte de loading... tem q ter pra cada consulta no backend.

Usar datepicker do Mui.

Tem um problema chatinho q nao sei o pq acontece: qnd eu volto a usar o programa no outro dia, ele nao recebe a api, só qnd desloga e loga. senao, dá token invalido.

To pensando seriamente em tirar a animação do title body. to vendo q não tem feito sentido ter, uma vez q só tem aparecido um por tela

## Login

O usuário receberá o convite por e-mail. Será o link de ediçao de cadastro, junto com um usuário e senha. Clicou no link, direciona pra tela de ediçao de cadastro admin.

Nessa tela tem nome, tem edição do e-mail, nova senha e confirmação da nova senha.

Dessa forma, eu já consigo usar o token desde o início. Então sou eu q criarei o usuário admin inicial. O próximo já tem que ser criação do próprio usuário.

## Talvez pro futuro

- Página inicial de cada aluno. Qnd seleciona o aluno, não ir pra página de cadastro, e sim pra página do aluno, onde tem informações gerais mais rápido. Lá teria:

  - Nome com idade do aluno
  - Foto
  - Status de pagamento
  - Matrícula, data da matrícula e data da pré-matrícula (tiraria de dados escolares)
  - Nome dos pais e responsáveis com telefone pra contato

- Lista crescente (até 5) pros contatos e autorizados a buscar, em vez d 3 fixos.
- Nos nomes autorizados a buscar, sugerir os dos pais ou responsável.

- Em Dados Escolares, em vez de primeiro escolher a turma, escolher o ano e turno,
  e só então aparecer o select de turma já filtrado pras turmas daquele ano e turno.

- Verificar se é simples ou não deixar o select como um input tb onde a gnt começa a digitar a turma e ele filtra nas opções.

- Fazer um loading pra aparecer enquanto busca nos selects ou até msm em input (ex: nova matricula)... hj é rápido, mas pode nao ser.

## Lá pro final

Colocar valores seed no banco pra ano, período, data de entrada e saída, turno.

## Configuração do projeto

- Create-React-App
- Typescript
- Styled Components
- React Router DOM v6
- Material UI
- Webpack rewired by Craco and react-app-alias
  - To use styled components with Material UI
  - Absolute imports
- Axios (requests)
- React-Hook-Form
  - Auxiliates forms
- styled-media-query (Media-Query CSS in Styled Components)
- Polished (makes color darker or ligther)
- ContextAPI (Global states)
- Redux Toolkit (Global states)
- date-fns
