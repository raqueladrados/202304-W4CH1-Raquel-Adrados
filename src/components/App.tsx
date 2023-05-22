import { Header } from "./Info";
import { Button } from "./Button";

export function App() {
  const name = "The caspers gentleman";
  const info = "0 caspers pointing at you";
  const button = "SELECT ALL";
  return (
    <>
      <Header name={name}></Header>
      <section className="controls">
        <Button info={info} button={button}></Button>
      </section>
    </>
  );
}
