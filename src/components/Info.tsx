type TitleType = {
  name: string;
};

export function Header({ name }: TitleType) {
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">{name}</h1>
      </header>
    </>
  );
}
