import { useState } from 'react';

export type TemplateNameReturnType = {
  templateName: string;
  handleTemplateNameChange: (value: string) => void;
};

const useTemplateName = (): TemplateNameReturnType => {
  const [templateName, setTemplateName] = useState('');

  const handleTemplateNameChange = (value: string) => {
    setTemplateName(value);
  };

  return {
    templateName,
    handleTemplateNameChange
  };
};

export default useTemplateName;
