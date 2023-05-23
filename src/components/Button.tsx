type SelectAll = {
  info: string;
  button: string;
};

export function Button({ info, button }: SelectAll) {
  return (
    <>
      <section className="controls">
        <p className="info">{info}</p>
        <button className="button button--select">{button}</button>
      </section>
    </>
  );
}
