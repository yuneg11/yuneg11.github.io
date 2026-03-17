interface MarkdownTextProps {
  text: string;
  className?: string;
}

export function MarkdownText({ text, className }: MarkdownTextProps) {
  // Parse inline markdown: **bold**, *italic*, [text](url)
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Try to match link [text](url)
    const linkMatch = remaining.match(/^(.*?)\[([^\]]+)\]\(([^)]+)\)/);
    // Try to match bold **text**
    const boldMatch = remaining.match(/^(.*?)\*\*([^*]+)\*\*/);
    // Try to match italic *text* (not preceded by another *)
    const italicMatch = remaining.match(/^(.*?(?<!\*))\*(?!\*)([^*]+)\*(?!\*)/);

    // Find earliest match
    const linkPos = linkMatch ? linkMatch[1].length : Infinity;
    const boldPos = boldMatch ? boldMatch[1].length : Infinity;
    const italicPos = italicMatch ? italicMatch[1].length : Infinity;

    const minPos = Math.min(linkPos, boldPos, italicPos);

    if (minPos === Infinity) {
      // No more patterns
      parts.push(remaining);
      break;
    }

    if (minPos === linkPos && linkMatch) {
      if (linkMatch[1]) parts.push(<span key={key++}>{linkMatch[1]}</span>);
      parts.push(
        <a
          key={key++}
          href={linkMatch[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-80"
        >
          {linkMatch[2]}
        </a>,
      );
      remaining = remaining.slice(linkMatch[0].length);
    } else if (minPos === boldPos && boldMatch) {
      if (boldMatch[1]) parts.push(<span key={key++}>{boldMatch[1]}</span>);
      parts.push(<strong key={key++}>{boldMatch[2]}</strong>);
      remaining = remaining.slice(boldMatch[0].length);
    } else if (italicMatch) {
      if (italicMatch[1]) parts.push(<span key={key++}>{italicMatch[1]}</span>);
      parts.push(<em key={key++}>{italicMatch[2]}</em>);
      remaining = remaining.slice(italicMatch[0].length);
    }
  }

  return <span className={className}>{parts}</span>;
}
