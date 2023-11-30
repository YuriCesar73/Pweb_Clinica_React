
function Formulario() {
    const onSubmit = () => {};

    return(
        <div>
            <h1>Formulário de cadastro</h1>
            <p>Insira suas informações</p>
            <br />
            <form action="" onSubmit={() => {}}>
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

                <fieldset>
                    <div>
                        <label htmlFor="UF"></label>
                        <input type="text" placeholder="UF" id="UF" />
                    </div>

                    <div>
                        <label htmlFor="Cidade"></label>
                        <input type="text" placeholder="Cidade" id="Cidade" />
                    </div>

                    <div>
                        <label htmlFor="Bairro"></label>
                        <input type="text" placeholder="Bairro" id="Bairro" />
                    </div>

                    <div>
                        <label htmlFor="CEP"></label>
                        <input type="text" placeholder="CEP" id="CEP" />
                    </div>

                    <div>
                        <label htmlFor="Logradouro"></label>
                        <input type="text" placeholder="Logradouro" id="Logradouro" />
                    </div>

                    <div>
                        <label htmlFor="Numero"></label>
                        <input type="number" placeholder="Numero" id="Numero" />
                    </div>

                    <div>
                        <label htmlFor="Complemento"></label>
                        <input type="text" placeholder="Complemento" id="Complemento" />
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