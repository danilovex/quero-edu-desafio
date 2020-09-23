# QUERO-EDU-DESAFIO
Desafio da Quero Educação - API com exibição e filtragem de ofertas de curso

Os principais requisitos que a aplicação atendeu foram:

*	Criação do banco relacional via migrations
*	Persitência de dados de forma automatizada no banco relacional
*	Sistema de build com gestão de dependências via gerenciador de pacotes NPM
*	APIs REST
*	Parse da estrutura do retorno do banco para o JSON
*	Testes end-to-end
*	Restrições de segurança

## Demo

Aplicação foi publicada no servidor Heroku, segue os principais end-points:

* https://quero-edu-desafio.herokuapp.com/api/courses (GET)
* https://quero-edu-desafio.herokuapp.com/api/offers (GET)

## Install

Após realizar o download da aplicação rode o comando abaixo:

`npm i`

Crie na raiz do projeto o arquivo chamado *config.env* e preencha com as variáveis:

```
PORT=3000
DATABASE_URL=postgres://username:password@localhost:port/database
```

Na variável *DATABASE_URL* informe os dados de conexão com seu banco de dados local

## Run

Para iniciar a aplicação rode o comando abaixo:

 `npm start`

## Run Tests

Para verificar a condição dos testes, rode os dois comandos abaixo:

`npm start`

`npm test`

## Requisição de API

### API: Carga dos dados
Type: GET

http://localhost:3000/api/load-data

Resultado:
```json
true
```

### API: Busca de Cursos
Type: GET

http://localhost:3000/api/courses

Parâmetros de Pesquisa:
* kind, exemplo: *http://localhost:3000/api/courses?kind=Presencial*
* level, exemplo: *http://localhost:3000/api/courses?level=Bacharelado*
* shift, exemplo: *http://localhost:3000/api/courses?shift=Noite*
* university, exemplo: *http://localhost:3000/api/courses?university=UNIP*

Pode-se adicionar vários parâmetros numa mesmo requisição, exemplo:
*http://localhost:3000/api/courses?kind=Presencial&university=UNIP*

Resultado Esperado:
```json
[
    {
        "course": {
            "name": "Engenharia Mecânica",
            "kind": "Presencial",
            "level": "Bacharelado",
            "shift": "Noite",
            "university": {
                "name": "UNIP",
                "score": 4.5,
                "logo_url": "https://www.tryimg.com/u/2019/04/16/unip.png"
            }
        }
    }
]
```

### API: Busca de Ofertas
Type: GET

http://localhost:3000/api/offers

Parâmetros de Pesquisa:
* kind, exemplo: *http://localhost:3000/api/offers?kind=Presencial*
* level, exemplo: *http://localhost:3000/api/offers?level=Bacharelado*
* shift, exemplo: *http://localhost:3000/api/offers?shift=Noite*
* university, exemplo: *http://localhost:3000/api/offers?university=UNIP*
* course, exemplo: *http://localhost:3000/api/offers?course=Jogos Digitais*
* city, exemplo: *http://localhost:3000/api/offers?city=São Paulo*

Parâmetro de Ordenação por Preço com Desconto:
* order_price_with_discount, valores a serem informados: ASC ou DESC
  Exemplo: *http://localhost:3000/api/offers?order_price_with_discount=DESC*

Pode-se adicionar vários parâmetros numa mesmo requisição, exemplo:
*http://localhost:3000/api/offers?kind=Presencial&university=UNIP*

Resultado Esperado:
```json
[
    {
        "full_price": 1520,
        "price_with_discount": 1368,
        "discount_percentage": 10,
        "start_date": "01/08/2019",
        "enrollment_semester": "2019.2",
        "enabled": true,
        "course": {
            "name": "Marketing",
            "kind": "Presencial",
            "level": "Bacharelado",
            "shift": "Noite"
        },
        "university": {
            "name": "Anhembi Morumbi",
            "score": 4.2,
            "logo_url": "https://www.tryimg.com/u/2019/04/16/anhembi-morumbi.png"
        },
        "campus": {
            "name": "Bela Vista",
            "city": "São Paulo"
        }
    }
]
```
