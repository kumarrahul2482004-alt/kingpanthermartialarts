const FORM_SUBMIT_ENDPOINT = "https://formsubmit.co/r8802746909@gmail.com";

type ContactFormProps = {
  compact?: boolean;
};

export function ContactForm({ compact = false }: ContactFormProps) {
  return (
    <form
      action={FORM_SUBMIT_ENDPOINT}
      method="POST"
      className={compact ? "flex flex-col gap-3 sm:flex-row" : "grid gap-4 sm:grid-cols-2"}
    >
      <input type="hidden" name="_subject" value="New King Panther website lead" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      {compact ? (
        <>
          <input type="hidden" name="interest" value="Newsletter signup" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email for class updates"
            className="input-shell"
            aria-label="Email address"
            required
          />
          <button type="submit" className="button-primary whitespace-nowrap">
            Join Newsletter
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="input-shell sm:col-span-1"
            aria-label="Your name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="input-shell sm:col-span-1"
            aria-label="Your email"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="input-shell sm:col-span-1"
            aria-label="Phone number"
          />
          <select name="interest" className="input-shell sm:col-span-1" aria-label="What are you interested in?" defaultValue="">
            <option value="" disabled>
              I am interested in...
            </option>
            <option value="Free trial class">Free trial class</option>
            <option value="Kids program">Kids program</option>
            <option value="Automation demo">Automation demo</option>
            <option value="General inquiry">General inquiry</option>
          </select>
          <textarea
            name="message"
            placeholder="Tell us what you need"
            className="min-h-32 w-full rounded-[1.5rem] border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/20 sm:col-span-2"
            aria-label="Message"
            required
          />
          <button type="submit" className="button-primary sm:col-span-2 sm:w-fit">
            Submit Inquiry
          </button>
        </>
      )}
    </form>
  );
}
