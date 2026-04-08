export type ModuleCardProps = {
  title: string;
  outcomes: string[];
};

export function ModuleCard({ title, outcomes }: ModuleCardProps) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <ul>
        {outcomes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
