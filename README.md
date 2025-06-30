+52
-14

# E-commerce App

Front-end de um pequeno e-commerce desenvolvido em Angular. O projeto demonstra
um catálogo de produtos simples com carrinho de compras e finalização do pedido
via WhatsApp.

![Screenshot da home](./src/assets/lanche.jpg)

## Recursos

- Listagem de produtos com filtro por categoria
- Adição e remoção de itens do carrinho
- Quantidade de itens exibida no ícone do carrinho
- Envio do pedido para o WhatsApp (número configurável em `environment.ts`)

Para voltar para a página inicial basta **clicar na logo** localizada na barra
superior.

## Executando o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
   A aplicação estará disponível em `http://localhost:4200`.

## Build de produção

Para gerar os artefatos de produção execute:

```bash
ng build
```

Os arquivos serão gerados em `dist/`.

## Testes

Para executar os testes unitários:

```bash
ng test
```

> **Observação:** os testes utilizam o Karma + Chrome. Certifique-se de que o
> navegador esteja instalado no ambiente.

## Configuração do WhatsApp

Defina o número de telefone do WhatsApp em `src/environments/environment.ts`:

```ts
export const environment = {
  // ...
  whatsappPhone: '5547999999999'
};
```

A mesma configuração pode ser feita no arquivo `environment.prod.ts` para o
build de produção.