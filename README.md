# De olho na sua vacinação!

Uma API para controlar suas próprias vacinas com o objetivo de ficar com a sua vacinação sempre em dia.

---

Cada vacina tem as seguintes informações:

| Chave            | Descrição                            | Tipo     | Exemplo           |
| ---------------- | ------------------------------------ | -------- | ----------------- |
| id               | Código da vacina                     | BigInt   | 1                 |
| name             | Nome da vacina                       | String   | "Covid19 - Dose 1"|
| expected_date    | Data prevista para a vacinação       | String   | "10/10/2021"      |
| vaccinated       | Determina se o paciente foi vacinado | Boolean  | true              |

---

As rotas disponíveis na API são as seguintes:

| Verbo        | Recurso                    | Descrição                              |
| ------------ | -------------------------- | -------------------------------------- |
| GET          | `/vaccines`                 | Retornar todas as vacinas cadastradas  |
| GET          | `/vaccines/:id`             | Retornar apenas uma vacina específica  |
| POST         | `/vaccines`                | Cadastrar uma nova vacina              |
| PATCH        | `/vaccines/:id/vaccinated`  | Marcar se tomou a vacina               |

