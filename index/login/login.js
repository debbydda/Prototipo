const login = (
    <div>
        <body>
            <h1>PEP - ELA</h1>
            <h2>Login</h2>
            <form>
                <label>
                Informe seu email:
                 <input type="text" name="email" />
                 </label>

                 <label>
                Informe sua senha:
                 <input type="text" name="senha" />
                </label>

                <input type="submit" value="Submit" />
            </form>
            <a href={"cadastro/cadastro.html"}>Cadastro</a>
        </body>
    </div>
)

ReactDOM.render(login, document.getElementById("login"));