<p align=center className="logo">
  <img src="https://raw.githubusercontent.com/DanielOliveiraSouza/next-level-week-03/main/aulas/web/src/images/logo.svg"
  />
</p>

<p align=center>
  <a href="https://github.com/DanielOliveiraSouza/next-level-week-03/archive/v0.1.0.zip"><img src="https://img.shields.io/badge/Release-v0.1.0-green"/> </a><img src="https://img.shields.io/badge/language-typescript-blue"/> <a href="https://github.com/DanielOliveiraSouza/next-level-week-03/LICENSE.md"><img src="https://img.shields.io/github/license/danieloliveirasouza/next-level-week-03"/></a>
</p>


Happy - Next Level Week \# 3 
---

<p align="center">
<img src="https://raw.githubusercontent.com/DanielOliveiraSouza/next-level-week-03/main/screenshots/captura-01-web-tela-inicial.png"/>
</p>

Um Projeto desenvolvido na Semana *[Next Level Week \#3](https://nextlevelweek.com)* da *[Rocketseat](https://rocketseat.com.br/)*
Leve a felicidade para o mundos.<br/>Visite orfanatos e mude o dia de muitas crianças.

Tecnologias usadas
---
Consulte  *[tutorial](https://react-native.rocketseat.dev/)* de instalação feito pela Rocketseat.
+ Node JS
+ React JS
+ React Native
+ TypeScript
+ Sqlite3
+ Expo
+ Insomnia
+ Beekeeper-Studio

Módulos do Projeto 
---
+ [Servidor Web](https://github.com/DanielOliveiraSouza/next-level-week-03/tree/main/aulas/backend)
+ [Aplicativo Móvel](https://github.com/DanielOliveiraSouza/next-level-week-03/tree/main/aulas/mobile)
+ [Aplicação Web](https://github.com/DanielOliveiraSouza/next-level-week-03/tree/main/aulas/web)

Layout
---
Segue os links do Layout do Happy:

+ [Layout do Web App](https://www.figma.com/file/mDEbnoojksG4w8sOxmudh3/Happy-Web?node-id=0%3A1)
+ [Layout do App Mobile](https://www.figma.com/file/X27FfVxAgy9f5IFa7ONlph/Happy-Mobile?node-id=0%3A1)
**Obs:** Você precisa precisará ter uma conta no Figma!

Front-end:
---

O front-end envia requisições para o back-end através da **API Rest**.<br/>Endereço da aplicação web: http://localhost:3000<br/>Endereço do aplicativo móvel (via expo) http://localhost:19000

**Responsabilidade da aplicação Web e do aplicativo Móvel:**

+ Consultar Casas de Acolhimento próximas à Guarulhos
+ Cadastrar novas casas de Acolhimento



Back-end: Servidor Web
---
Responsável pela implementação da **API Rest** e a conexão com banco de dados Sqlite3.<br/>Endereço do servidor: http://localhost:3333
### Entidades do Sistema:

API Rest
---
Leia a Especificação da *[API Rest](https://github.com/DanielOliveiraSouza/next-level-week-03/tree/master/docs/api_rest.md)* para obter informações sobre Itens e Pontos disponíveis. <br/>

---
Inicializando o servidor
```console
	user@pc:~$ cd server
user@pc:~$ #Configuração de dependencias
user@pc:~$ yarn
user@pc:~$ #Inicialização do servidor
user@pc:~$ yarn dev
```
Inicialização da Aplicação web
```console
user@pc:~$ cd web
user@pc:~$ #configuração de dependencias
user@pc:~$ yarn
user@pc:~$ #Inicialização da aplicação web
user@pc:~$ yarn start
```
Inicialização da App Movel
```console
user@pc:~$ cd mobile
user@pc:~$ #configuração de dependencias
user@pc:~$ yarn
user@pc:~$ #Inicialização do App
user@pc:~$ expo start
```
Desafios
---
Seguem os desafios propostos  pela **Rocketseat** para levar o Happy para o próximo nível
[Desafio Happy 2.0](https://www.notion.so/Vers-o-2-0-do-Happy-c754db7a4d41469e8c2d00fcf75392c4)

Release Notes
---
Para informaçõs sobre novas funcionalidades  e correções de *bugs* leia as *[Notas de Lançamento](https://github.com/DanielOliveiraSouza/next-level-week-03/tree/main/docs/releases_notes.md)*<br/>

