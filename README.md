# Minimanual de Insurgência Informacional (ou janonismo)

Página web para leitura do manual de **@YACOBVS & @DENGXIAOPIX**, com navegação por tópicos e download do documento original. O manual informa que não há copyright e que sua disseminação é livre.

## Arquivos

- `index.html`: estrutura, texto do manual e ilustrações SVG.
- `style.css`: estilos e adaptação para diferentes tamanhos de tela.
- `script.js`: menu móvel, destaque do índice e contador local.
- `manual.pdf`: documento disponibilizado para download.
- `favicon.png`: logomarca e ícone da página.
- `seloFuraBolha.png`: imagem exibida ao final do posfácio.

## Como usar

Abra `index.html` em um navegador atualizado. Não é necessário instalar dependências ou executar uma etapa de compilação. Mantenha os arquivos necessários na mesma pasta.

- Use **Início** para voltar ao começo da página.
- Abra **Índice** para acessar um tópico. Em telas maiores, há também um índice lateral.
- Em smartphones, abra o menu pelo botão no canto superior direito.
- Selecione **Baixar PDF** para salvar o manual no dispositivo.

O contador no rodapé registra carregamentos da página usando o armazenamento local do navegador. Ele **não é um total compartilhado** entre visitantes ou dispositivos; pode ser reiniciado ao limpar os dados do navegador e pode ficar indisponível se o armazenamento estiver bloqueado.

## Publicação

Envie `index.html`, `style.css`, `script.js`, `manual.pdf`, `favicon.png` e `seloFuraBolha.png` para a mesma pasta de uma hospedagem de sites estáticos. Abra o endereço publicado e confira a navegação, as imagens e o download do PDF. Não é necessário servidor de aplicação ou banco de dados.

## Manutenção

Edite o texto e a estrutura em `index.html`, a aparência em `style.css` e as interações em `script.js`. Ao alterar seções ou seus identificadores, atualize os links dos dois índices no HTML. Se substituir o PDF ou a logomarca, mantenha os nomes dos arquivos ou atualize as referências correspondentes.
