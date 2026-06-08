/**
 * Cursive "handwriting" reveal - the text wipes in left-to-right via a pure
 * CSS animation (.handwrite), so it always ends visible (no JS dependency).
 * The clip lives on the OUTER span so it never breaks the gradient text inside.
 */
export default function HandwriteText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className="handwrite inline-block">
      <span className={`inline-block ${className}`}>{text}</span>
    </span>
  );
}
