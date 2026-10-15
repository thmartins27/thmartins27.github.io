type SectionLabelProps = {
  index: string;
  children: React.ReactNode;
};

export function SectionLabel({ index, children }: SectionLabelProps) {
  return (
    <div className="section-label" aria-hidden="true">
      <span>{index}</span>
      <i />
      <span>{children}</span>
    </div>
  );
}
