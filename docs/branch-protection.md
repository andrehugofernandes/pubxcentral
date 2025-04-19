# Configuração de Proteção de Branches

## Branch Master

Para configurar a proteção do branch master, siga estes passos no GitHub:

1. Acesse: https://github.com/andrehugofernandes/pubxcentral/settings/branches
2. Clique em "Add branch protection rule"
3. Configure as seguintes regras:

### Configurações Recomendadas

- Branch name pattern: `master`
- Require a pull request before merging
  - Require approvals (1 aprovação mínima)
  - Dismiss stale pull request approvals when new commits are pushed
  - Require review from Code Owners
- Require status checks to pass before merging
  - Require branches to be up to date before merging
  - Status checks required:
    - build (GitHub Actions)
    - type-check
    - lint
- Include administrators
- Allow force pushes (desabilitado)
- Allow deletions (desabilitado)

### Proteções Adicionais

- Require signed commits
- Require linear history
- Lock branch
- Require deployments to succeed before merging
  - Production environment

## Branches de Desenvolvimento

Para branches de feature/desenvolvimento:

1. Padrão de nomenclatura:
   - `feature/*` - Para novas funcionalidades
   - `fix/*` - Para correções de bugs
   - `docs/*` - Para atualizações de documentação
   - `refactor/*` - Para refatorações
   - `test/*` - Para adição/atualização de testes

2. Fluxo de trabalho:
   ```bash
   # Criar nova branch
   git checkout -b feature/nome-da-feature

   # Desenvolver e commitar mudanças
   git add .
   git commit -m "Feat: descrição da feature"

   # Push para o GitHub
   git push origin feature/nome-da-feature

   # Criar Pull Request via GitHub
   ``` 