# Bem Viver Admin

## Próximo passo

Tá dando ruim no setFocus pro mask. to cogitando não usar react-input-mask e fazer
as máscaras na unha. Não dá tanto trabalho... vamos ver.

Novo aluno:
Criei uma nova rota só pra retornar o novo id.

Dá pra fazer uma consulta index, acha pages. Faz outra consulta com page=pages se pages !== 1.
Retorna o id + 1 do primeiro elemento da lista (se for decrescente, como hj é).
Dá pra colocar essa consulta num useEffect, pra qnd abrir a página já fazer.
Não vai ter trigger de input. Vou triggar pelo botão só, pq são vários itens juntos
nesse primeiro submit. E tb dá pra gerar de boa a matrícula e popular no input sem
ficar triggando sem querer.
Inclusive dá pra colocar um loading no input da matrícula.

Eu tenho que criar trigger pra action store do aluno. Assim terei um state.
Eu criei o showAluno, mas só vou precisar qnd criar a lista de alunos na tela alunos.

Tenho q ver esse store do aluno q ta usando id do state. pode ser q tenha q tirar esse id do state pra store

Depois q eu terminar Dados Pessoais, vou tentar criar uma função genérica pra onSubmit

Melhorar o select e o switch. verificar como fica o yup nesses 2 comps.

Tirar nome do usuário do header qnd for mobile.

Fazer body menu mobile

Fazer botão de voltar

Inverter menu pra direita no mobile

Fazer menu mobile

Colocar foto da criança no perfil

## Login

O usuário receberá o convite por e-mail. Será o link de ediçao de cadastro, junto com um usuário e senha. Clicou no link, direciona pra tela de ediçao de cadastro admin.

Nessa tela tem nome, tem edição do e-mail, nova senha e confirmação da nova senha.

Dessa forma, eu já consigo usar o token desde o início. Então sou eu q criarei o usuário admin inicial. O próximo já tem que ser criação do próprio usuário.

## Configuração do projeto

- Create-React-App
- Typescript
- Styled Components
- React Router DOM v6
- Material UI
- Webpack rewired by Craco and react-app-alias
  - To use styled components with Material UI
  - Absolute imports
- Reactotron (maybe not)
- Axios (requests)
- React-Hook-Form
  - Auxiliates forms
- styled-media-query (Media-Query CSS in Styled Components)
- Polished (makes color darker or ligther)
- ContextAPI (Global states)
- Redux Toolkit (Global states)

### OBS

O Redux tem um lance de fazer sort nas listas. Pra usar, veja createEntityAdapter
