
function FormularioPaciente() {
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
                        <input type="text" placeholder="* Nome" id="nome" required/>
                    </div>

                    <div>
                        <label htmlFor="CPF"></label>
                        <input type="text" placeholder="* CPF" id="cpf" required/>
                    </div>

                    <div>
                        <label htmlFor="Email"></label>
                        <input type="email" placeholder="* Email" id="email" required/>
                    </div>

                    <div>
                        <label htmlFor="Telefone"></label>
                        <input type="text" placeholder="* Telefone" id="telefone" required/>
                    </div>
                </fieldset>

                <fieldset>
                    <div>
                        <label htmlFor="UF"></label>
                        <input type="text" placeholder="* UF" id="UF" required/>
                    </div>

                    <div>
                        <label htmlFor="Cidade"></label>
                        <input type="text" placeholder="* Cidade" id="Cidade" required/>
                    </div>

                    <div>
                        <label htmlFor="Bairro"></label>
                        <input type="text" placeholder="* Bairro" id="Bairro" required/>
                    </div>

                    <div>
                        <label htmlFor="CEP"></label>
                        <input type="text" placeholder="* CEP" id="CEP" required/>
                    </div>

                    <div>
                        <label htmlFor="Logradouro"></label>
                        <input type="text" placeholder="* Logradouro" id="Logradouro" required/>
                    </div>

                    <div>
                        <label htmlFor="Numero"></label>
                        <input type="number" placeholder="Numero" id="Numero"/>
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
    
}export default FormularioPaciente;


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