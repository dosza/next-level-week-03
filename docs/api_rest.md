API  Happy.
===
Versão: v0.1.0<br/>
Esta API fornece informações sobre busca de Casas de Acolhimento

#### Método GET
1. 	Listar todas as Casas de Atendimento
2.	Listar detalhes de uma Casa de Acolhimento


#### 1 - Listar todas as Casas de Atendimento
http://localhost:3333/orphanages

#### Resposta do Servidor:

```js
[
  {
    "id": 26,
    "name": "Lar das meninas",
    "latitude": -23.4667294,
    "longitude": -46.5475621,
    "about": "Sobre o Orfanato",
    "instructions": "Venha visita",
    "opening_hours": "Das 8h até 18h",
    "open_on_weekends": true,
    "images": [
      {
        "id": 46,
        "url": "http://localhost:3333/uploads/1603175517364-market.jpg"
      },
      {
        "id": 47,
        "url": "http://localhost:3333/uploads/1603175517476-market-Roman.jpg"
      }
    ]
  },
  {
    "id": 27,
    "name": "outro orfanato",
    "latitude": -23.4546991,
    "longitude": -46.5697031,
    "about": "Sobre o Orfanato",
    "instructions": "Venha visita",
    "opening_hours": "Das 8h até 18h",
    "open_on_weekends": true,
    "images": [
      {
        "id": 48,
        "url": "http://localhost:3333/uploads/1603175519969-market.jpg"
      },
      {
        "id": 49,
        "url": "http://localhost:3333/uploads/1603175520105-market-Roman.jpg"
      }
    ]
  },
  {
    "id": 31,
    "name": "Irmãs da Serena Misericórdia",
    "latitude": -23.437205,
    "longitude": -46.4623279,
    "about": "Uma Instituição Riverdale",
    "instructions": "Venha visita",
    "opening_hours": "Das 12 ás 16h",
    "open_on_weekends": false,
    "images": [
      {
        "id": 56,
        "url": "http://localhost:3333/uploads/1603175983975-07.jpg"
      },
      {
        "id": 57,
        "url": "http://localhost:3333/uploads/1603175983991-18216457_1117358741743668_4222250260211303276_o.jpg"
      }
    ]
  }
]
]
```


#### 2 - Listar detalhes de uma Casa de Acolhimento
http://localhost:3333/orphanages/{id}
Parâmetro | tipo
-----------|-----------
id | numeral

##### Exemplo:
http://localhost:3333/orphanages/10

#### Resposta do servidor:

```js
{
  "id": 26,
  "name": "Lar das meninas",
  "latitude": -23.4667294,
  "longitude": -46.5475621,
  "about": "Sobre o Orfanato",
  "instructions": "Venha visita",
  "opening_hours": "Das 8h até 18h",
  "open_on_weekends": true,
  "images": [
    {
      "id": 46,
      "url": "http://localhost:3333/uploads/1603175517364-market.jpg"
    },
    {
      "id": 47,
      "url": "http://localhost:3333/uploads/1603175517476-market-Roman.jpg"
    }
  ]
}
```



#### Método POST
Formato de envio: arquivo *multipart*
+	Cadastar Casa de Acolhimento

http://localhost:3333/orphanages
Obs: open_on_weekends recebe uma *string* com valor false or true

Parâmetros | Tipo| Valor
-----------|-----------|-----------
name  		        | string  | 'Casa de Acolhimento'
latitude	        | numeral | -23.00
longitude	        | numeral | -46.00
about               | string  | 'Atende jovens'
instructions        | string  | 'Use Máscara'
open_hours          | string  | 'Das 9 às 16h'
open_on_weeekends   | string | 'false'
images		        | image/jpg   | arquivo.jpg


