function ElokuvaHaku({ search, onSearchChange }) {
  return (
    <input
      placeholder="Search by title"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default ElokuvaHaku;
