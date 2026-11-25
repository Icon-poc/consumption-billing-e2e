/** Return one count per non-empty label. Labels may repeat across issues. */
export function countLabels(labels: readonly string[]): Map<string, number> {
  const counts = new Map<string, number>()
  for (const label of labels) {
    if (label.trim().length === 0) continue
    counts.set(label, 1)
  }
  return counts
}
