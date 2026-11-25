/** Count open issues per label, including a zero for labels with only closed issues. */
export function openIssueCounts(issues: readonly { label: string; open: boolean }[]) {
  const counts = new Map<string, number>()
  for (const issue of issues) {
    counts.set(issue.label, (counts.get(issue.label) ?? 0) + 1)
  }
  return counts
}
