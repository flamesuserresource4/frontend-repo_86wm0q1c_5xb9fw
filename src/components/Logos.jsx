const logos = ['OpenAI','Anthropic','Meta','Google','Microsoft','AWS']

export default function Logos(){
  return (
    <section className="relative py-10">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center gap-8 opacity-70 text-white/60 text-sm flex-wrap">
          {logos.map(l => (
            <div key={l} className="px-4 py-2 rounded-full border border-white/10 bg-white/5">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
