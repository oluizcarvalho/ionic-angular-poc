# Documentação do Projeto Ionic

## Resumo

Este projeto Ionic consiste em um aplicativo com quatro páginas principais: Home, Informe Dados, Badges e Login. O aplicativo oferece funcionalidades como exibição de uma lista na página Home, entrada de dados na página Informe Dados, utilização de Badges e autenticação de login com redirecionamento para a página de Boas-Vindas em caso de sucesso.

## Estrutura do Projeto

### Páginas

1. **Home (`home`):**

- Exibe uma lista de itens simulados.
- Ao clicar em um item, mostra uma mensagem Toast.

2. **Informe Dados (`informe-dados`):**

- Possui um botão "Informe seus dados" na página inicial (`home`).
- Ao clicar no botão, abre um alerta com campos de entrada para email e telefone.
- Após clicar em "Enviar", exibe os dados na página inicial (`home`).

3. **Badges (`badges`):**

- Exibe Badges com texto e ícones na temática de preferência.

4. **Login (`login`):**

- Contém campos de entrada para usuário e senha, além de um botão "Entrar".
- Realiza a validação do login e senha.
- Em caso de sucesso, redireciona para a página de Boas-Vindas (`bem-vindo`).
- Em caso de falha, exibe um alerta informando ao usuário.

5. **Boas-Vindas (`bem-vindo`):**

- Exibe uma mensagem de boas-vindas ao usuário autenticado.

### Fluxo de Navegação

**Login ➔ Boas-Vindas:**

- Usuário realiza o login com sucesso na página de Login.
- Após validação, é redirecionado para a página de Boas-Vindas.

## Implementação

### Home Page (`home`)

- Utiliza o componente `List` para exibir uma lista de itens.
- Ao clicar em um item, utiliza o componente `Toast` para mostrar uma mensagem indicando o item escolhido.

### Informe Dados Page (`informe-dados`)

- Possui um botão "Informe seus dados" na página Home.
- Ao clicar no botão, abre um alerta com campos de entrada para email e telefone.
- Após clicar em "Enviar", exibe os dados na página Home.

### Badges Page (`badges`)

- Utiliza o componente `Badge` para exibir Badges com texto e ícones.

### Login Page (`login`)

- Contém campos de entrada para usuário e senha, além de um botão "Entrar".
- Realiza a validação do login e senha (simulada com dados hardcoded).
- Em caso de sucesso, redireciona para a página de Boas-Vindas.
- Em caso de falha, exibe um alerta informando ao usuário.

### Boas-Vindas Page (`bem-vindo`)

- Exibe uma mensagem de boas-vindas ao usuário autenticado.

## Como Executar o Projeto

1. Clone o repositório: `git clone [URL do repositório]`.
2. Navegue até o diretório do projeto: `cd [diretório do projeto]`.
3. Instale as dependências: `npm install`.
4. Execute o aplicativo: `ionic serve`.

## Considerações Finais

Este projeto serve como um exemplo básico de um aplicativo Ionic com funcionalidades de navegação entre páginas, entrada de dados, exibição de listas e uso de componentes como Toast, Alert e Badge.
