function SubPage(prop) {
  const { title, children, paragraphs } = prop;
  return (
    <article className="subPage">
      <h2 className="subTitle">{title}</h2>
      <section className="subPage__description">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      <figure className="subPage__img">{children}</figure>
    </article>
  );
}

export default SubPage;
