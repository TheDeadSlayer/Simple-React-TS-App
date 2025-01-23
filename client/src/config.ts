// src/config.ts

export interface AppConfig {
    VITE_REACT_API_URL: string;
    // Add other configuration variables as needed
  }
  
  let config: AppConfig | null = null;
  
  /**
   * Loads the configuration from /config.json
   */
  export const loadConfig = async (): Promise<void> => {
    try {
      const response = await fetch('/config.json', { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error(`Failed to fetch config.json: ${response.statusText}`);
      }
      config = await response.json();
    } catch (error) {
      console.error('Error loading configuration:', error);
      // Optionally, set default values or handle the error as needed
    }
  };
  
  /**
   * Retrieves the loaded configuration
   */
  export const getConfig = (): AppConfig => {
    if (!config) {
      throw new Error('Configuration has not been loaded. Ensure loadConfig() is called before accessing the config.');
    }
    return config;
  };
  