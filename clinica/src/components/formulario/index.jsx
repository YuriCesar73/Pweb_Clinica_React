
function Formulario() {
    const onSubmit = () => {};

    return(
        <div>
            <h1>Formulário de cadastro</h1>
            <p>Insira suas informações</p>
            <br />
            <form action="">
                <fieldset>
                    <div>
                        <label htmlFor="Nome"></label>
                        <input type="text" placeholder="Nome" id="nome" />
                    </div>

                    <div>
                        <label htmlFor="CPF"></label>
                        <input type="text" placeholder="CPF" id="cpf" />
                    </div>

                    <div>
                        <label htmlFor="Email"></label>
                        <input type="email" placeholder="Email" id="email" />
                    </div>

                    <div>
                        <label htmlFor="Telefone"></label>
                        <input type="text" placeholder="Telefone" id="telefone" />
                    </div>
                </fieldset>   
                <button type="submit">Enviar</button>

            </form>

        </div>
    )
    
}export default Formulario;


/*
<input type="text" placeholder="Nome Completo" required />
<input type="text" placeholder="CPF" required />
<input type="text" placeholder="Email" required />
<input type="text" placeholder="Telefone" required />
<input type="text" placeholder="Uf" required />
<input type="text" placeholder="Cidade" required />
<input type="text" placeholder="Bairro" required />
<input type="text" placeholder="CEP" required />
<input type="text" placeholder="Logradouro" required />
<input type="text" placeholder="Numero" />
<input type="text" placeholder="Complemento" />
*/