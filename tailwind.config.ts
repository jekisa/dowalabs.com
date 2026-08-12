import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { emerald: { 50: '#EAF7F1', 100: '#CDEEDD', 300: '#6ED9A8', 500: '#0FA76D', 600: '#0C8A59', 700: '#0A6D47' }, indigo: { 50: '#EEF2FF', 100: '#E0E7FF', 600: '#4F46E5', 700: '#4338CA' }, ink: { 900: '#0F1A17' }, mint: '#dff5ec', forest: '#215c4b', lilac: '#e8e2ff', cream: { 50: '#FBF9F3' } }, boxShadow: { soft: '0 18px 60px rgba(29, 51, 43, .08)' } } }, plugins: [] };
export default config;
