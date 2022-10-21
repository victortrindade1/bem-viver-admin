# Bem Viver Admin

## Referências

`https://github.com/WallysonGalvao/rocketseat-gobarber` (TS)
`https://github.com/victortrindade1/rocketseat-gobarber-web` (JS)
`https://github.com/StefanoSaffran/gobarber` (TS)

## Próximo passo

Depois, transferir o layout do login pra auth layout, pra aproveitar na page de cadastro.

ContextAPI funcionando. Agora vou dar continuidade às configurações de auth do minicurso. Ainda falta o loading, talvez um error handler, token, e quero tentar fazer um lazypage

## Login

Estou implementando o auth context. Estou em: Manipulando estados globais com ContextAPI

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
- Reactotron
- Axios (requests)
- React-Hook-Form-Mui
  - Lib that makes react-hook-form and MUI together very practice
- styled-media-query (Media-Query CSS in Styled Components)
- Polished (makes color darker or ligther)
- ContextAPI (Global states)
