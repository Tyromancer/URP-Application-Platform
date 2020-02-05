const dev = process.env.NODE_ENV !== 'production';

// baseUrl for async fetches. Use localhost for testing purposes
export const baseUrl = dev ? "http://localhost:3000" : "https://placer.holder";
