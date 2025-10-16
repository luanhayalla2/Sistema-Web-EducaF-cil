# Documentação do POT (Plano de Trabalho)

Este diretório contém uma versão em HTML do POT do projeto EducaFácil.

## Arquivos

- `POT_EducaFacil.html` — Versão HTML do POT, para visualização rápida no navegador.

## Como gerar `.docx` e `.pdf` com capa e sumário

A fonte principal para gerar documentos formatados é o arquivo `POT_EducaFacil.md` na raiz do projeto.

1.  **Instale o Pandoc**: https://pandoc.org/installing.html
2.  **(Opcional para PDF)** Instale um motor LaTeX como MiKTeX (Windows) ou TeX Live (Linux/Mac).

Com o Pandoc instalado, abra um terminal na **raiz do projeto** e execute um dos comandos abaixo:

```powershell
# Gerar DOCX a partir do Markdown
pandoc POT_EducaFacil.md -o POT_EducaFacil_Final.docx --toc --standalone

# Gerar PDF a partir do Markdown (requer LaTeX)
pandoc POT_EducaFacil.md -o POT_EducaFacil_Final.pdf --toc --standalone
```

Opção B — abrir `POT_EducaFacil.html` no navegador e usar "Imprimir → Salvar como PDF".

Observações

- Se quiser que eu gere o `.docx` diretamente aqui, informe os nomes dos integrantes e do orientador, e se prefere formatação `ABNT` ou `Livre`.
- Posso também ajustar a capa (adicionar logo). Para isso, envie a imagem ou indique o caminho no repositório.
