# Bem Viver Admin

## Próximo passo

O Redux tem um lance de fazer sort nas listas. Pra usar, veja createEntityAdapter

Cara, não deu bom usar o ContextAPI junto com o setFocus do react-hook-form.
Qnd altera, rerenderiza a tela e perde o foco do input q eu quero. Vou subir
esse código, e depois instalar o Redux pra ver se tenho algum sucesso.
Boa sorte pra mim com esse monte de lib q vem agora...

Vou tirar o setFocus do react-hook-form e usar o do React
https://stackoverflow.com/questions/28889826/how-to-set-focus-on-an-input-field-after-rendering

Comunicar api de alunos:
Na tela Alunos faz request de n alunos, retornando todos os dados deles.
Ao clicar em um aluno, os dados desse aluno alimenta um ContextAPI.
Ao editar qqr input, faz request do update mas não faz request pra recarregar
os dados do aluno. Em vez disso, altera a Context. Todo defaultValue vai pegar
da Context. Daí vamos esbarrar no setFocus não funcionando após atualizar o Context.

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

Dessa forma, eu já consigo usar o token desde o início. Então sou eu q criarei os usuários admin iniciais.

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
