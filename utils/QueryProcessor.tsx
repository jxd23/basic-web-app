export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "joshuado";
  }

  if (query.toLowerCase().includes("name")) {
    return "jxd23";
  }

  // Handle arithmetic queries like "What is 56 plus 42?"
  const plusMatch = query.match(/what\s+is\s+(\d+)\s+plus\s+(\d+)/i);
  if (plusMatch) {
    const leftOperand = parseInt(plusMatch[1], 10);
    const rightOperand = parseInt(plusMatch[2], 10);
    return String(leftOperand + rightOperand);
  }

  // Handle largest-number queries like
  // "Which of the following numbers is the largest: 73, 70, 30?"
  if (query.toLowerCase().includes("largest")) {
    const listMatch = query.match(/largest:\s*([0-9,\s]+)/i);
    if (listMatch) {
      const candidates = listMatch[1]
        .split(/[\s,]+/)
        .filter(Boolean)
        .map((token) => parseInt(token, 10))
        .filter((n) => !Number.isNaN(n));
      if (candidates.length > 0) {
        const max = Math.max(...candidates);
        return String(max);
      }
    }
  }
  return "";
}
