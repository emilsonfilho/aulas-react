import Button from "./evento/Button";

function Evento() {
  const meuEvento = () => console.log(`Ativando o primeiro evento!`);

  const segundoEvento = () => console.log("Ativando o segundo evento!");

  return (
    <div>
      <p>Clique para disparar um evento</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />
    </div>
  );
}

export default Evento;
