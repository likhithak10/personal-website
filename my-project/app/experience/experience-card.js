export default function ExperienceCard({
  company,
  role,
  dateRange,
  points,
  skills = [],
}) {
  return (
    <div
      className="bg-[#0e0e0e] p-4 rounded shadow-[0_0_16px_4px_#3d5a81]
                hover:shadow-[0_0_16px_0_#7d7432] duration-500"
    >
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-semibold text-[#bfc1c2]">{company}</h2>
        <p className="text-sm text-[#bfc2c1]">{dateRange}</p>
      </div>

      <p className="mb-2 text-base font-semibold text-[#ffffff]">
        {role}
      </p>

      <ul className="list-disc list-inside text-sm">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>

      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-1 rounded bg-[#222222] text-[#ffffff] text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
