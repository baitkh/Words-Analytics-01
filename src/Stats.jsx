export default function Stats({ stats_props }) {
  return (
    <section className="stats">
      <Stat number={stats_props.numberOfWords} label="Words" />
      <Stat number={stats_props.numberOfCharacters} label="Characters" />
      <Stat
        number={stats_props.numberOfInstagramCharacters}
        label="Instagram"
      />
      <Stat number={stats_props.numberOfFacebookCharacters} label="Facebok" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <>
      <section className="stat">
        <span
          className={`stat__number ${number < 0 ? "stat__number--limit " : ""}`}
        >
          {number}
        </span>
        <h2 className="second-heading">{label}</h2>
      </section>
    </>
  );
}
