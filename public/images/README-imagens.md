# Pasta de Imagens Locais — Skina do Bebê

Coloque aqui os arquivos de imagem do projeto para substituir as URLs externas.

## Mapeamento de arquivos

| Arquivo esperado | Campo no `config.ts` | Seção |
|---|---|---|
| `hero-bg.jpg` | `hero.backgroundImage` | Hero |
| `vsl-poster.jpg` | `vsl.posterSrc` | VSL |
| `owner.png` | `history.ownerImage` | História |
| `logo.png` | `general.logoSrc` | Global |
| `produtos/berco.webp` | `destaques.products[0].image` | Destaques |
| `produtos/carrinho.webp` | `destaques.products[1].image` | Destaques |
| `produtos/kit-enxoval.jpg` | `destaques.products[2].image` | Destaques |
| `produtos/quartinho.webp` | `destaques.products[3].image` | Destaques |
| `lojas/vila-sonia.webp` | `storesInfo.stores[0].image` | Lojas |
| `lojas/industrial.png` | `storesInfo.stores[1].image` | Lojas |

## Como usar

1. Adicione o arquivo na pasta correta dentro de `/public/images/`
2. No `src/config.ts`, altere o campo correspondente para o caminho local:
   - Exemplo: `"/images/hero-bg.jpg"` em vez da URL do postimg.cc

## Recomendação de formatos

- **Hero / Lojas**: `.webp` ou `.jpg`, mín. 1920×1080px
- **Produtos**: `.webp`, mín. 600×600px
- **Logo**: `.png` com fundo transparente, mín. 200px de altura
- **Owner**: `.png` ou `.webp`, orientação portrait
