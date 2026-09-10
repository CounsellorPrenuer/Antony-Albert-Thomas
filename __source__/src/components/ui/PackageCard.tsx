export function PackageCard({ pkg }: { pkg: any }) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-[#001F3F]">{pkg.title || pkg.planName}</h3>
        {pkg.target && <p className="mt-1 text-sm font-medium text-slate-500">{pkg.target}</p>}
      </div>
      <div className="mb-6">
        <p className="text-3xl font-extrabold text-[#001F3F]">{pkg.price}</p>
      </div>
      <ul className="mb-8 flex-1 space-y-3">
        {(pkg.features || []).map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start">
            <svg className="h-5 w-5 shrink-0 text-[#001F3F]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            <span className="ml-3 text-sm text-slate-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a href="/contact" className="mt-auto block w-full rounded-md bg-[#001F3F] py-2.5 text-center text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
        Choose Plan
      </a>
    </div>
  );
}
