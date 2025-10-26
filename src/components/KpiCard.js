const KpiCard = ({ title, value}) => {
  return (
    <div className="bg-white shadow-md rounded-lg border-4 border-blue-100 p-4 min-w-60">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-3xl font-bold text-blue-600">{value}</p>
    </div>
  );
}

export default KpiCard;