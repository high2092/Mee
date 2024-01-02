'use client';

import { useLabel } from '../../../hooks/useLabel';
import { labelManagerStyle, labelStyle } from './LabelManager.css';

export function LabelManager() {
  const { labels } = useLabel();

  return (
    <div className={labelManagerStyle}>
      {labels.slice(0, 20).map((props) => (
        <LabelComponent key={`label-${props.id}`} {...props} />
      ))}
    </div>
  );
}

function LabelComponent({ id, name, color }: Label) {
  return (
    <div className={labelStyle} style={{ backgroundColor: color }}>
      {name}
    </div>
  );
}
