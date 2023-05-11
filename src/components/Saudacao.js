function Saudacao({nome}) {
  const gerarSaudacao = algumNome => `Olá, ${algumNome}, tudo bem?`
  
    return (
    <>
      {nome && (<p>{gerarSaudacao(nome)}</p>)}
    </>
  );
}

export default Saudacao;
