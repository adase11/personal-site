import Markdown from 'markdown-to-jsx';
import selectedWork from '@/data/selected-work';

/**
 * The 0→1 products and the open-source work, rendered as a plain list. Shared
 * by the homepage cover and the resume so the two cannot say different things.
 */
const SelectedWorkList = () => (
  <div className="flex flex-col gap-9 print:gap-4">
    {selectedWork.map((item) => (
      <article key={item.title}>
        <p className="label text-accent">{item.kind}</p>
        <h3 className="mt-2 font-serif text-[1.2rem]">
          {item.href ? (
            <a href={item.href} className="hover:text-accent">
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h3>
        <div className="mt-2.5 max-w-2xl text-[0.92rem] leading-[1.7] text-muted [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:text-fg">
          <Markdown options={{ forceInline: true }}>{item.body}</Markdown>
        </div>
      </article>
    ))}
  </div>
);

export default SelectedWorkList;
