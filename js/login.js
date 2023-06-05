const secaoPaginaLogin = document.querySelector(".secao-pagina-login");
let botaoAlterar = document.querySelector(".botao-alterar-layout");
let campoCategoria;
let formularioCadastro;

secaoPaginaLogin.addEventListener("click", function(event) {
    if (event.target.classList.contains("botao-alterar-layout")) {
      alterarLayout();
    }
  });

function alterarLayout() {
    if (botaoAlterar.textContent == "Cadastre-se") {
        secaoPaginaLogin.innerHTML = `				<div class="subsecao-pagina-login subsecao-formulario">
        <form action="">
            <fieldset class="informacoes-cadastro">
                <label class="input-titulo" for="cadastroCategoria">Categoria</label>
                <select class="input-conteudo" name="categoria" id="cadastroCategoria" required>
                    <option value="" disabled selected>Escolha uma categoria</option>
                    <option value="comunidade">Comunidade</option>
                    <option value="produtorAgricola">Produtor Agrícola</option>
                </select>
            </fieldset>
        </form>
    </div>
    <div class="subsecao-pagina-login subsecao-banner">
        <button class="botao-padrao botao-alterar-layout">Entrar</button>
    </div>`;
        campoCategoria = document.querySelector("#cadastroCategoria");
        campoCategoria.addEventListener("change", adicionarCamposEspecificos);
        formularioCadastro = document.querySelector(".informacoes-cadastro");

    } else {
        secaoPaginaLogin.innerHTML = `<div class="subsecao-pagina-login subsecao-banner">
        <button class="botao-padrao botao-alterar-layout">Cadastre-se</button>
    </div>
    <div class="subsecao-pagina-login subsecao-formulario">
        <form action="">
            <fieldset class="informacoes-login">
                <label class="input-titulo" for="loginEmail">Email</label>
                <input class="input-conteudo" type="email" name="email" id="loginEmail" placeholder="Digite seu email" required>
                <label class="input-titulo" for="loginSenha">Senha</label>
                <input class="input-conteudo" type="password" name="senha" id="loginSenha" placeholder="Digite sua senha" required>
            </fieldset>

            <input class="botao-padrao input-enviar" type="submit" value="Entrar">
        </form>
    </div>`
    }
    botaoAlterar = document.querySelector(".botao-alterar-layout");
}

function adicionarCamposEspecificos() {
    secaoPaginaLogin.setAttribute("style", "height: fit-content");

	if (campoCategoria.value == "comunidade") {
		formularioCadastro.innerHTML = `<fieldset>
        <label class="input-titulo" for="cadastroNome">Nome da comunidade</label>
        <input class="input-conteudo" type="text" name="nome" id="cadastroNome" placeholder="Ex.: Grupo Alimentação Solidária" required>

        <label class="input-titulo" for="cadastroEmail">Email</label>
        <input class="input-conteudo" type="email" name="email" id="cadastroEmail" placeholder="Ex.: alimentacaosolidaria@xmail.com" required>

        <label class="input-titulo" for="cadastroNumeroDePessoas">Número de pessoas</label>
        <input class="input-conteudo" type="number" name="numeroPessoas" id="cadastroNumeroDePessoas" placeholder="Ex.: 35 (pode ser um número aproximado)" required>
    </fieldset>

    <fieldset>
        <label class="input-titulo" for="cadastroPais">País</label>
        <input class="input-conteudo" type="text" name="pais" id="cadastroPais" placeholder="Ex.: Brasil" required>

        <label class="input-titulo" for="cadastroEstado">Estado</label>
        <input class="input-conteudo" type="text" name="estado" id="cadastroEstado" placeholder="Ex.: Goiás" required>

        <label class="input-titulo" for="cadastroCidade">Cidade</label>
        <input class="input-conteudo" type="text" name="cidade" id="cadastroCidade" placeholder="Ex.: Anápolis " required>
        
        <label class="input-titulo" for="cadastroEndereco">Endereço</label>
        <input class="input-conteudo" type="text" name="endereco" id="cadastroEndereco" placeholder="Ex.: Bairro do Limoeiro" required>
    </fieldset>

    <fieldset>
        <label class="input-titulo" for="cadastroSenha">Senha</label>
        <input class="input-conteudo" type="password" name="senha" id="cadastroSenha" placeholder="Digite sua senha" required>

        <label class="input-titulo" for="cadastroConfirmacaoSenha">Confirme sua senha</label>
        <input class="input-conteudo" type="password" name="senhaConfirmacao" id="cadastroConfirmacaoSenha" placeholder="Digite novamente sua senha" required>
    </fieldset>
    <input class="botao-padrao input-enviar" type="submit" value="Cadastrar">`;
	} else if (campoCategoria.value == "produtorAgricola") {
        formularioCadastro.innerHTML = `							<fieldset>
        <label class="input-titulo" for="cadastroNome">Nome completo</label>
        <input class="input-conteudo" type="text" name="nome" id="cadastroNome" placeholder="Ex.: Pedro Henrique Silva e Sauro" required>

        <label class="input-titulo" for="cadastroEmail">Email</label>
        <input class="input-conteudo" type="email" name="email" id="cadastroEmail" placeholder="Ex.: phsilvasauro@xmail.com" required>

        <label class="input-titulo" for="cadastroProdutosAVenda">Produtos à venda</label>
        <input class="input-conteudo" type="text" name="produtos" id="cadastroProdutosAVenda" placeholder="Ex.: batata-inglesa, cenoura, beterraba, arroz..." required>
    </fieldset>

    <fieldset>
        <label class="input-titulo" for="cadastroPais">País</label>
        <input class="input-conteudo" type="text" name="pais" id="cadastroPais" placeholder="Ex.: Brasil" required>

        <label class="input-titulo" for="cadastroEstado">Estado</label>
        <input class="input-conteudo" type="text" name="estado" id="cadastroEstado" placeholder="Ex.: Goiás" required>

        <label class="input-titulo" for="cadastroCidade">Cidade</label>
        <input class="input-conteudo" type="text" name="cidade" id="cadastroCidade" placeholder="Ex.: Anápolis " required>
        
        <label class="input-titulo" for="cadastroEndereco">Endereço</label>
        <input class="input-conteudo" type="text" name="endereco" id="cadastroEndereco" placeholder="Ex.: Rua das Belezas, 4569, apto 10 bloco Z" required>
        </fieldset>
        
        <fieldset>
        <label class="input-titulo" for="cadastroSenha">Senha</label>
        <input class="input-conteudo" type="password" name="senha" id="cadastroSenha" placeholder="Digite sua senha" required>
        
        <label class="input-titulo" for="cadastroConfirmacaoSenha">Confirme sua senha</label>
        <input class="input-conteudo" type="password" name="senhaConfirmacao" id="cadastroConfirmacaoSenha" placeholder="Digite novamente sua senha" required>
        </fieldset>
        <input class="botao-padrao input-enviar" type="submit" value="Cadastrar">`;
	}
}
