import { useEffect } from 'react';

import { StyledButton } from '../atoms';

export const PrintResume = () => {
  useEffect(() => {
    globalThis?.addEventListener('beforeprint', () => {
      globalThis.document.title = `ResuMingle_${Date.now()}`;
    });

    globalThis?.addEventListener('afterprint', () => {
      globalThis.document.title = 'ResuMingle';
    });
  }, []);

  return (
    <StyledButton onClick={globalThis?.print} variant="outlined">
      Download as PDF
    </StyledButton>
  );
};
