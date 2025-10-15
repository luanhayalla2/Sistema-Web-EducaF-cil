POT - EducaFácil

Este diretório contém uma versão HTML do POT (Plano de Trabalho) do projeto EducaFácil e instruções para converter o documento para `.docx` ou `.pdf` localmente.

Arquivos

- `POT_EducaFacil.html` — versão em HTML do POT.

Como gerar `.docx` e `.pdf`

Opção A — usar o Pandoc (recomendado):

1. Instale o Pandoc: https://pandoc.org/installing.html
2. (Opcional) Instale um motor de PDF como wkhtmltopdf ou use o próprio Pandoc com LaTeX (MikTeX/TeX Live).

Com Pandoc instalado, abra um terminal na pasta `docs/` e execute:

```powershell
# converter HTML para DOCX
pandoc POT_EducaFacil.html -o POT_EducaFacil.docx

# converter HTML para PDF (requer LaTeX ou wkhtmltopdf)
pandoc POT_EducaFacil.html -o POT_EducaFacil.pdf
```

Opção B — abrir `POT_EducaFacil.html` no navegador e usar "Imprimir → Salvar como PDF".

Observações

- Se quiser que eu gere o `.docx` diretamente aqui, informe os nomes dos integrantes e do orientador, e se prefere formatação `ABNT` ou `Livre`.
- Posso também ajustar a capa (adicionar logo). Para isso, envie a imagem ou indique o caminho no repositório.
