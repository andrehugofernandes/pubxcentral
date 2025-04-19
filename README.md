# PubXentral MVP

Portal de acesso a dados de saúde pública com sistema de níveis de assinatura.

## 🚀 Sobre o Projeto

PubXentral é uma plataforma que disponibiliza dados de saúde pública através de um sistema de download organizado em diferentes níveis de assinatura (Explorer, Visionary, Pioneer). O backend, metadados e sistema de URLs pré-assinadas já estão desenvolvidos.

## 🛠️ Tecnologias

- [Next.js 14](https://nextjs.org/) - Framework React com App Router
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Shadcn/UI](https://ui.shadcn.com/) - Componentes React reutilizáveis

## 📦 Estrutura do Projeto

```
src/
├── app/                  # App Router do Next.js
├── components/          # Componentes React
│   ├── dashboard/      # Componentes do Dashboard
│   ├── dataset-listing/ # Listagem de Datasets
│   ├── subscription-tier/ # Níveis de Assinatura
│   └── ui/            # Componentes UI Base
├── data/              # Dados Mockados
├── types/             # Definições TypeScript
└── utils/             # Funções Utilitárias
```

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Criar build de produção
npm run build

# Executar em produção
npm start
```

## 🔐 Níveis de Assinatura

### Explorer
- Acesso básico a conjuntos de dados públicos
- Download limitado a 3 arquivos por dia
- Sem suporte prioritário

### Visionary
- Acesso a conjuntos de dados estendidos
- Download ilimitado
- Suporte por email em 24h

### Pioneer
- Acesso a todos os conjuntos de dados
- API de acesso direto
- Suporte prioritário 24/7
- Painéis analíticos avançados

## 📊 Datasets Disponíveis

- Dados de Vacinação (2022-2023)
- Estatísticas Hospitalares (2022-2023)
- Indicadores de Saúde Pública

## 🤝 Contribuindo

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Feat: Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **André Hugo Fernandes** - *Desenvolvimento Inicial* - [andrehugofernandes](https://github.com/andrehugofernandes)

## 📫 Contato

André Hugo Fernandes - andrehugofernandes@gmail.com 