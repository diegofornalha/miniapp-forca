# Jogo da Forca - Mini Programa e H5

## Requisitos

- Node.js: `>=16.20.0` (recomendado: v18.19.1)
- Taro: `v4.0.9`
- Framework: React

## Primeira Execução

Para garantir uma instalação limpa e funcional, siga estes passos na ordem:

1. Certifique-se de estar usando Node.js v18.19.1:
```bash
nvm install 18.19.1
nvm use 18.19.1
```

2. Limpe qualquer instalação anterior:
```bash
rm -rf node_modules package-lock.json
sudo chown -R $(whoami) .
```

3. Instale as dependências com configurações específicas:
```bash
npm install --legacy-peer-deps
npm install core-js-pure@3.36.0 --save-dev --legacy-peer-deps
npm install @pmmmwh/react-refresh-webpack-plugin@0.5.10 --save-dev --legacy-peer-deps
```

4. Inicie o projeto em modo de produção (recomendado para primeira execução):
```bash
NODE_ENV=production npm run dev:weapp
```

## Desenvolvimento

### Mini Programa WeChat

Para desenvolvimento com hot-reload:
```bash
npm run dev:weapp
```

Para build de produção com compressão:
```bash
NODE_ENV=production npm run dev:weapp
```

### Web H5

Para desenvolvimento com hot-reload:
```bash
npm run dev:h5
```

Para build de produção:
```bash
npm run build:h5
```

## Notas de Desenvolvimento

### Melhorando Performance

1. Habilite o cache no `config/index.ts`:
```typescript
cache: {
  enable: true
}
```

2. Use o modo de produção para melhor performance:
```bash
NODE_ENV=production npm run dev:weapp
```

### Depuração

- **WeApp**: Abra o WeChat DevTools e carregue o projeto da pasta `dist`
- **H5**: Acesse `http://localhost:10086` no seu navegador

## Resolução de Problemas Comuns

### Erro de Permissão
Se encontrar erros de permissão (EACCES), execute:
```bash
sudo chown -R $(whoami) .
```

### Erro de Dependências
Se encontrar erros relacionados ao `core-js-pure` ou `react-refresh`, execute:
```bash
npm install core-js-pure@3.36.0 --save-dev --legacy-peer-deps
npm install @pmmmwh/react-refresh-webpack-plugin@0.5.10 --save-dev --legacy-peer-deps
```

### Erro de Compilação
Se o webpack apresentar erros de compilação, tente:
1. Limpar o cache:
```bash
rm -rf node_modules/.cache
```
2. Reinstalar as dependências:
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

## Links Úteis

- [Documentação do Taro](https://taro-docs.jd.com/)
- [GitHub do Taro](https://github.com/NervJS/taro)