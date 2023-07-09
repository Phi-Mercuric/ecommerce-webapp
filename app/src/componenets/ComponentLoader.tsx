import { useState, useEffect, ReactElement } from 'react';

interface ComponentLoaderProps {
  component: () => Promise<{ default: ReactElement }>;
}

function ComponentLoader({ component }: ComponentLoaderProps): ReactElement {
  const [Component, setComponent] = useState<ReactElement | null>(null);

  useEffect(() => {
    const loadComponent = async (): Promise<void> => {
      try {
        const { default: componentNode } = await component();
        setComponent(componentNode);
      } catch (error) {
        console.error('Error loading component:', error);
      }
    };

    loadComponent();
  }, [component]);

  if (!Component) {
    // You can show a loading state or fallback component here
    return <div>Loading...</div>;
  }

  return Component;
}

export default ComponentLoader;
