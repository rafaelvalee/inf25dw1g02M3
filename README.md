# Relatório de Desenvolvimento do Projeto - Sistema de Gestão de Biblioteca

**Unidade Curricular:** Desenvolvimento Web I
**Grupo:** 02
**Autor:** Rafael Vale e Diogo Vilaça

---

## 1. Introdução
O presente relatório descreve as etapas de desenvolvimento, as decisões técnicas e as soluções implementadas para a realização do trabalho prático do Módulo 3. O objetivo foi criar uma aplicação *Full Stack* para a gestão de uma biblioteca, composta por uma API REST em Node.js e um Backoffice administrativo em React.

## 2. Arquitetura e Tecnologias
Para assegurar escalabilidade e facilidade de manutenção, foram selecionadas as seguintes tecnologias:

* **Backend:** Node.js com *LoopBack 4* (Framework para criação de APIs REST escaláveis).
* **Frontend:** React com *React-Admin* (Framework para construção de interfaces administrativas).
* **Base de Dados:** MySQL 5.7.
* **Infraestrutura:** Docker e Docker Compose (para orquestração de contentores).
* **Controlo de Versões:** Git e GitHub.

---

## 3. Etapas de Desenvolvimento

### 3.1. Configuração do Ambiente e Base de Dados
O projeto iniciou-se com a definição da infraestrutura. Foi criado um ficheiro `docker-compose.yml` para instanciar o serviço de base de dados MySQL de forma isolada e consistente.
* **Configuração:** Definição de portas, variáveis de ambiente e volumes para persistência de dados.
* **Rede:** Configuração da comunicação interna entre o serviço da base de dados e a aplicação backend.

### 3.2. Desenvolvimento do Backend (Serviço Node.js)
Utilizando o *LoopBack 4*, foi estruturada a API RESTful.
* **Modelação de Dados:** Definição das entidades `Autor`, `Livro`, `Utilizador` e `Emprestimo`, incluindo a tipagem forte com TypeScript.
* **Relações:** Implementação das relações entre tabelas (e.g., um `Livro` pertence a um `Autor`; um `Emprestimo` relaciona `Livro` e `Utilizador`).
* **Repositórios e Controladores:** Geração e personalização do código para operações CRUD (Create, Read, Update, Delete).
* **Correção de Tipagem:** Resolução de conflitos de tipos no TypeScript, especificamente na gestão de IDs e nas interfaces de relações geradas automaticamente pelo framework.

### 3.3. Desenvolvimento do Frontend (Cliente Backoffice)
A interface de utilizador foi desenvolvida utilizando *Vite* para um arranque rápido e *React-Admin* para a gestão de dados.
* **Integração com a API:** Utilização do adaptador `ra-data-lb4` para comunicar com o Backend LoopBack.
* **Interface:** Criação de listagens, formulários de criação e edição para todas as entidades (Autores, Livros, Utilizadores, Empréstimos).
* **Componentes Visuais:** Ajuste dos campos de visualização (e.g., `DateField` para datas, `ReferenceField` para chaves estrangeiras).

---

## 4. Desafios Técnicos e Soluções Implementadas

Durante o desenvolvimento, surgiram desafios técnicos complexos que exigiram investigação e implementação de soluções específicas:

### 4.1. Configuração de CORS (Cross-Origin Resource Sharing)
**Problema:** O navegador bloqueava as requisições do Frontend (porta 5173) para o Backend (porta 3000) por motivos de segurança.
**Solução:** Configuração explícita do middleware de CORS no ficheiro `index.ts` do servidor, permitindo os métodos HTTP necessários (`GET`, `POST`, `PUT`, `DELETE`) e definindo a origem permitida.

### 4.2. Paginação e Cabeçalhos HTTP (X-Total-Count)
**Problema:** O *React-Admin* exige saber o número total de registos para calcular a paginação. O *LoopBack 4*, por defeito, não enviava essa informação no cabeçalho da resposta, fazendo com que as listas aparecessem vazias.
**Solução:** Personalização dos Controladores (`Controllers`) para injetar o objeto `Response`. Foi implementada lógica adicional nos métodos `find` para contar os registos na base de dados e enviar o cabeçalho `X-Total-Count` na resposta HTTP.

### 4.3. Conetividade de Rede (IPv4 vs IPv6)
**Problema:** Inconsistências na resolução de nomes `localhost` em ambiente Windows.
**Solução:** Padronização do endereço de ligação para `127.0.0.1` tanto no Backend como no Frontend, garantindo estabilidade na comunicação cliente-servidor.

### 4.4. Povoamento de Dados (Seeding)
Para validar o funcionamento da aplicação e demonstrar as funcionalidades na entrega final, foram desenvolvidos *scripts* em JavaScript para povoar a base de dados com registos de teste coerentes, garantindo que todas as tabelas e relações continham informação válida.

---

## 5. Metodologia e Ferramentas de Apoio
O projeto seguiu uma abordagem iterativa. Para a resolução de erros de sintaxe, otimização de consultas e análise de documentação técnica das frameworks (*LoopBack* e *React-Admin*), foram utilizadas ferramentas de IA como suporte ao desenvolvimento. Estas ferramentas auxiliaram na aceleração do diagnóstico de erros (debugging) e na compreensão de padrões de arquitetura, sendo todo o código revisto, testado e integrado manualmente pelos autores.

## 6. Conclusão
O sistema encontra-se funcional, cumprindo todos os requisitos propostos. A arquitetura implementada permite a gestão integral da biblioteca através de uma interface web intuitiva, suportada por uma API robusta e uma base de dados relacional. O código-fonte foi devidamente limpo de ficheiros temporários e submetido no repositório GitHub.
